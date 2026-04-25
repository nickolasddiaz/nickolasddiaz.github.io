#lang plait

; AST
{define-type Exp
  [numE  (n     : Number)]
  [plusE (left  : Exp) (right : Exp)]
  [subE (left  : Exp) (right : Exp)]
  [varE  (name  : Symbol)]
  [let1E (var   : Symbol) (val : Exp) (body : Exp)]
  [set1E (var   : Symbol) (val : Exp)]
  [lamE  (var   : Symbol) (body : Exp)]
  [appE  (fun   : Exp)   (arg  : Exp)]
  [ifE   (cnd   : Exp)   (thn  : Exp) (els : Exp)]
  [beginE (es    : (Listof Exp))]
  [whileE (cnd   : Exp) (body : Exp)]
  [andE  (left  : Exp)   (right : Exp)]
  [orE   (left  : Exp)   (right : Exp)]
  }




{define-type Value
  [numV (n : Number)]
  [funV (var : Symbol) (body : Exp) (nv : Env)]}



; Helper
; add : Value Value -> Value
{define (add [l : Value] [r : Value]) : Value
  (cond
    [(and (numV? l) (numV? r))
     (numV (+ (numV-n l) (numV-n r)))]
    [else
     (error 'add "not a number")])}

{define (sub [l : Value] [r : Value]) : Value
  (cond
    [(and (numV? l) (numV? r))
     (numV (- (numV-n l) (numV-n r)))]
    [else
     (error 'sub "not a number")])}

{define (parse [s : S-Exp]) : Exp
  (cond
    [(s-exp-number? s)
     (numE (s-exp->number s))]
    [(s-exp-symbol? s)
     (varE (s-exp->symbol s))]
    [(s-exp-list? s)
     (let ([l (s-exp->list s)])
       (cond
         [(empty? l)
          (error 'parse "empty list")]
         [(= 1 (length l))
          (parse (first l))]
         [(and (s-exp-symbol? (first l))
               (symbol=? '+ (s-exp->symbol (first l))))
          (plusE (parse (second l)) (parse (third l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? '- (s-exp->symbol (first l))))
          (subE (parse (second l)) (parse (third l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'if (s-exp->symbol (first l))))
          (ifE (parse (second l))
               (parse (third l))
               (parse (fourth l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'and (s-exp->symbol (first l))))
          (andE (parse (second l)) (parse (third l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'or (s-exp->symbol (first l))))
          (orE (parse (second l)) (parse (third l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'lam (s-exp->symbol (first l))))
          (lamE (s-exp->symbol (second l))
                (parse (third l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'begin (s-exp->symbol (first l))))
          (beginE (map parse (rest l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'set! (s-exp->symbol (first l))))
          (cond
            [(and (= (length l) 3) (s-exp-symbol? (second l)))
             (set1E (s-exp->symbol (second l))
                    (parse (third l)))]
            [(and (= (length l) 2) (s-exp-list? (second l)))
             (let ([binding (s-exp->list (second l))])
               (set1E (s-exp->symbol (first binding))
                      (parse (second binding))))]
            [else
             (error 'parse "bad set! syntax")])]
         [(and (s-exp-symbol? (first l)) 
            (symbol=? 'while (s-exp->symbol (first l)))) 
         (whileE (parse (second l)) 
         (parse (third l)))]
         [(and (s-exp-symbol? (first l))
               (symbol=? 'let1 (s-exp->symbol (first l))))
          (let ([binding (s-exp->list (second l))])
            (let1E (s-exp->symbol (first binding))
                   (parse (second binding))
                   (parse (third l))))]
         [else
          (appE (parse (first l)) (parse (second l)))]))]
    [else
     (error 'parse "not a number, symbol, or list")])}


;; Desugarer : Exp -> Exp
;; Translates surface AST nodes into core AST nodes.
;; Recurses into every sub-expression.

{define (desugar [e : Exp]) : Exp
  (type-case Exp e
    [(numE n)        (numE n)]
    [(varE s)        (varE s)]
    [(plusE l r)     (plusE  (desugar l) (desugar r))]
    [(subE l r)     (subE  (desugar l) (desugar r))]
    [(ifE c t e)     (ifE    (desugar c) (desugar t) (desugar e))]
    [(lamE v b)      (lamE v (desugar b))]
    [(appE f a)      (appE   (desugar f) (desugar a))]
    [(let1E v val b) (let1E v (desugar val) (desugar b))]
    [(set1E v val) (set1E v (desugar val))]
    [(beginE es)     (beginE (map desugar es))]
    [(whileE c b) (whileE (desugar c) (desugar b))]
    [(andE l r)
    (desugar (ifE l r (numE 0)))]
    [(orE l r)
     (desugar
       (let1E 'v l
         (ifE (varE 'v)
              (varE 'v)
              r)))])}


; defines memory a vector of 100
{define MEMORY (make-vector 100 -1)}
; incrementing pointer for the memory, example 0, 1, 2, 3 ...
{define next-addr 0}


; allocates a new location
; returns the address
{define (create-num [value : Number]) : Number
  (let ([cur-addr next-addr])
    (begin
    (vector-set! MEMORY cur-addr value)
    (set! next-addr (add1 next-addr))
    cur-addr))}

; takes in the address and returns the address's value
{define (read-num [address : Number]) : Number
  (vector-ref MEMORY address)}

; takes in an address and value and sets it
{define (set-num [value : Number] [address : Number]) : Void
  (vector-set! MEMORY address value)}


{define-type Binding
  [bind (name : Symbol) (val : Value)]}


{define-type-alias Env (Listof Binding)}
{define empty-env : Env empty}

{define (lookup [name : Symbol] [env : Env]) : Value
  (cond
    [(empty? env)
     (error name (string-append "unbound variable: " (symbol->string name)))]
    [(symbol=? name (bind-name (first env)))
     (type-case Value (bind-val (first env))
       [(numV n) (numV (read-num n))]
       [(funV var body nv) (funV var body nv)])]
    [else
     (lookup name (rest env))])} ; empty env

{define (extend [env : Env] [name : Symbol] [val : Value]) : Env
  (type-case Value val
    [(numV n)
     (let ([new-address (create-num n)]) ; cheks if val is a number then calls create-num returing it's address
       (cons (bind name (numV new-address)) env))]; address is stored on the env instead of the number value
    [(funV _var _body _nv) (cons (bind name val) env)])}

; checks if 
{define (set-binding [env : Env] [name : Symbol] [new-val : Number]) : Value
  (cond
    [(empty? env)
     (error name (error name (string-append "unbound variable: " (symbol->string name))))]
    [(symbol=? name (bind-name (first env)))
    ; env will return a Value even though it is guaranteed to be a numV
    ; plait forces a type-case
     (type-case Value (bind-val (first env)) 
       [(numV addr)
        (begin
          (set-num new-val addr)
          (numV new-val))]
       [(funV _var _body _nv)
        (error 'set1E "cannot assign to a function")])]
    [else
     (set-binding (rest env) name new-val)])} ; empty env
  
 
;;Evaluates a list of expressions, returning the value of the last one.
 
{define (eval-begin [es : (Listof Exp)] [nv : Env]) : Value
  (cond
    [(empty? (rest es)) (interp (first es) nv)] 
    [else
     (begin
       (interp (first es) nv)                 
       (eval-begin (rest es) nv))])}

{define (interp [e : Exp] [nv : Env]) : Value
  (type-case Exp e
    [(numE n)        (numV n)]
    [(varE s)        (lookup s nv)]
    [(plusE l r)     (add (interp l nv) (interp r nv))]
    [(subE l r)     (sub (interp l nv) (interp r nv))]
    [(ifE cnd thn els)
     (if (equal? (interp cnd nv) (numV 0))
         (interp els nv)
         (interp thn nv))]
    [(lamE v b)      (funV v b nv)]
    [(appE f a)
     (let ([fv (interp f nv)]
           [av (interp a nv)])
       (type-case Value fv
         [(funV v b nv*)
          (interp b (extend nv* v av))]
         [else
          (error 'app "not a function")]))]
    [(let1E var val body)
     (interp body (extend nv var (interp val nv)))]
    [(set1E var val)
     (type-case Value (interp val nv)
       [(numV n)
        (set-binding nv var n)]
       [(funV _var _body _nv)
        (error 'set1E "not a number")])]
    [(beginE es)
     (if (empty? es)
         (error 'interp "begin: empty sequence") ;A begin needs at least one expr
         (eval-begin es nv))]
 
    [(whileE c b)
     (if (equal? (interp c nv) (numV 0))
         (numV 0)
         (begin
           (interp b nv)
           (interp (whileE c b) nv)))]
    [(orE _l _r)
     (error 'interp "orE not desugared!")]
    [(andE _l _r)
     (error 'interp "andE not desugared!")]
     
     )}



; Runner
{define (run [s : S-Exp]) : Value
  (interp (desugar (parse s)) empty-env)}
; parse → desugar → interp



;;Disable to see outputs
{print-only-errors #true}

;; numbers and addition
{test (run `3)                     (numV 3)}
{test (run `{+ 3 4})               (numV 7)}
{test (run `{+ {+ 1 2} {+ 3 4}})  (numV 10)}

;; variables and let1
{test (run `{let1 {x 3} x})        (numV 3)}
{test (run `{let1 {x 3} {+ x x}})  (numV 6)}

;; shadowing
{test (run `{let1 {x 1}
              {let1 {x 2} x}})
      (numV 2)}

;; lambda immediate application
{test (run `{{lam x {+ x x}} 3})   (numV 6)}

;; bind lambda to name
{test (run `{let1 {sq {lam x {+ x x}}}
              {sq 5}})
      (numV 10)}

;; lexical scope
{test (run `{let1 {x 3}
              {let1 {f {lam y {+ x y}}}
                {let1 {x 2}
                  {f 4}}}})
      (numV 7)}

;; closure outside defining scope
{test (run `{{let1 {x 3} {lam y {+ x y}}} 4})
      (numV 7)}

;; if core
{test (run `{if 1 42 99})           (numV 42)}
{test (run `{if 0 42 99})           (numV 99)}
{test (run `{if {+ 1 2} 7 8})       (numV 7)}

;; and sugar
{test (run `{and 1 2})              (numV 2)}
{test (run `{and 0 2})              (numV 0)}
{test (run `{and 1 0})              (numV 0)}

;; or sugar
{test (run `{or 3 99})              (numV 3)}
{test (run `{or 0 99})              (numV 99)}
{test (run `{or 0 0})               (numV 0)}

;; or preserves value
{test (run `{let1 {x 5} {or x 99}}) (numV 5)}

;; nested sugar
{test (run `{and {or 0 3} {+ 1 1}}) (numV 2)}

;; sugar inside lambda
{test (run `{let1 {f {lam x {or x 10}}}
              {f 0}})
      (numV 10)}

;; errors
{test/exn (run `x)      "unbound"}
{test/exn (run `{f 3})  "unbound"}
;; error: applying + to a function
{test/exn (run `{+ {{lam x x} {lam x x}} 1}) "not a number"}


; using set
{test/exn (run `{set! x {5}}) "unbound"}
{test (run `{let1 {x 3} {set! x {3}}})  (numV 3)}
{test (run `{let1 {x 3} {set! x {{lam x {+ x x}} 3}}})  (numV 6)}


{test (run `{let1 {x 5}
                  {begin {set! x {10}} x}})
      (numV 10)}

{test (run `{let1 {x 1}
                  {begin {set! x {+ x 1}}
                         {set! x {+ x 1}}
                         x}})
      (numV 3)}

{test (run `{let1 {x 0}
                  {let1 {inc {lam _ {set! x {+ x 1}}}}
                        {begin {inc 0} {inc 0} {inc 0} x}}}
           ) (numV 3)}

{test (run `{let1 {x 0}
                  {let1 {i 1}
                        {begin
                          {while
                           {if {+ i {- 0 6}} 1 0}
                           {begin {set! x {+ x i}}
                                  {set! i {+ i 1}}}} x}}})
      (numV 15)}
