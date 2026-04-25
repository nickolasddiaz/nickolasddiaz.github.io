#lang plait  
(print-only-errors #true)

;; ============================================  
;; SMoL-X Language Implementation  
;; Group Members: [Emily Herman, Megan Ruiz,  
;;                 Erik Ellams, Nickolas Diaz]  
;; ============================================  

;; ============================================  
;; PART 1: ABSTRACT SYNTAX TREE  
;; ============================================  
   

{define-type Exp  
  [numE (n : Number)]  
  [boolE (b : Boolean)]  
  [varE (name : Symbol)]  
  [plusE (left : Exp) (right : Exp)]  
  [ifE (test : Exp) (then : Exp) (else : Exp)]  
  [let1E (var : Symbol) (val : Exp) (body : Exp)]}  


;; ============================================  
;; PART 2: PARSER  
;; ============================================  
 

{define (num [string : S-Exp]) : Exp  
  (numE (s-exp->number string))}  

{define (var [string : S-Exp]) : Exp  
  (varE (s-exp->symbol string))}  
  

{define (plus [string : S-Exp]) : Exp  
  (let* ([parts (s-exp->list string)])  
    (let* ([left (parse (first parts))]  
          [right (parse (third parts))])  
      (cond  
        [(and (numE? left) (numE? right))  
         (numE (+ (numE-n left) (numE-n right)))]  
        [else   
         (plusE left right)])))}  

{define (iff [string : S-Exp]) : Exp  
  (let* ([parts (s-exp->list string)])  
    (let* ([test (parse (second parts))]  
          [then (parse (third parts))]  
          [elsse (parse (list-ref parts 4))])  
      (ifE test then elsse)))}  


{define (let [string : S-Exp]) : Exp  
  (let* ([parts (s-exp->list string)])  
    (let* ([var (s-exp->symbol (second parts))]  
          [val (parse (fourth parts))]  
          [body (parse (list-ref parts 4))])  
      (let1E var val body)))}  


{define (parse [s : S-Exp]) : Exp  
  (cond  
    [(s-exp-match? `(if ANY ANY then ANY) s)(iff s)]  
    [(s-exp-match? `(let SYMBOL = ANY ANY) s)(let s)]  
    [(equal? `true s) (boolE #t)]  
    [(equal? `false s) (boolE #f)]  
    [(s-exp-match? `NUMBER s) (num s)]  
    [(s-exp-match? `SYMBOL s) (var s)]  
    [(s-exp-match? `(ANY + ANY) s)(plus s)]  
    [else (error 'parse "Unknown Expression")]  
    )}  

(test (parse `(let a = 10 (1 + a))) (let1E 'a (numE 10) (plusE (numE 1) (varE 'a))))  
{test (parse `(if x 10 then 20) ) (ifE (varE 'x) (numE 10) (numE 20))}  
{test (parse `1) (numE 1)}  
{test (parse `(1 + (1 + 2))) (numE 4)}  
{test (parse `(1 + (x + 2))) (plusE (numE 1) (plusE (varE 'x) (numE 2)))}  
{test (parse `(1 + y)) (plusE (numE 1) (varE 'y))}  
{test (parse `(y + 2)) (plusE (varE 'y) (numE 2))}  
{test (parse `true) (boolE #t)}  
{test (parse `false) (boolE #f)}  

;; ============================================ 
;; PART 3: SUBSTITUTION INTERPRETER 
;; ============================================  

;; 1. Setup the Substitution Counter 
(define sub-count (box 0)) 

(define (reset-sub-counter!): Void 
  (set-box! sub-count 0)) 

(define (increment-sub-counter!): Void 
  (set-box! sub-count (+ 1 (unbox sub-count)))) 

(define (get-sub-count): Number 
  (unbox sub-count)) 

;; 2. The Substitution Function 
;; Critical requirement: Must correctly handle shadowing 
(define (subst [var : Symbol] [val : Exp] [expr : Exp]) : Exp 
  (begin 
    (increment-sub-counter!) 
    (type-case Exp expr 
      [(numE n) expr] 
      [(boolE b) expr] 
      [(varE x) (if (symbol=? x var) val expr)] 
      [(plusE l r) (plusE (subst var val l) (subst var val r))] 
      [(ifE test then elsse)  
       (ifE (subst var val test) (subst var val then) (subst var val elsse))] 
      [(let1E bound-var bound-body let-body) 
       (if (symbol=? bound-var var) 
           ;; Shadowing: If names match, do NOT substitute into the body 
           (let1E bound-var (subst var val bound-body) let-body) 
           ;; No shadowing: Substitute into both parts 
           (let1E bound-var (subst var val bound-body) (subst var val let-body)))]))) 

;; 3. The Interpreter 

(define (interp [expr : Exp]) : Exp 
  (type-case Exp expr 
    [(numE n) expr] 
    [(boolE b) expr] 
    [(varE x) (error 'interp (string-append "Free variable: " (symbol->string x)))] 
    [(plusE l r) 
     ;; We extract the numbers directly to avoid 'v1' unbound errors 
     (numE (+ (numE-n (interp l))  
              (numE-n (interp r))))] 

    [(ifE test then elsse) 
     ;; Use type-case on the result of the test directly 
     (type-case Exp (interp test) 
       [(boolE b) (if b (interp then) (interp elsse))] 
       [else (error 'interp "If test must be a boolean")])] 

     

    [(let1E var val body) 
     ;; Substitute the evaluated value into the body, then interp the result 
     (interp (subst var (interp val) body))])) 

  

;; --- Verification Tests --- 

;; Arithmetic  
(test (interp (parse `(2 + 3))) (numE 5))  
(test (interp (parse `((1 + 2) + 3))) (numE 6))  
(test (interp (parse `(11 + (10 + 10)))) (numE 31))  

;; Conditional True/False  
(test (interp (parse `(if false 5 then 10))) (numE 10))   
(test (interp (parse `(if true 6 then 8))) (numE 6))  
(test (interp (parse `(if true 1 then 2))) (numE 1))  

;; Variable Binding And Lookup  
(test (interp (parse `(let x = 10 x))) (numE 10))  
(test (interp (parse `(let x = 5 (x + 6)))) (numE 11))  
(test (interp (parse `(let x = 5 (x + 2)))) (numE 7))  

;; Nesting Binding  
(test (interp (parse `(let x = 2(let y = 4(x + y))))) (numE 6))  
(test (interp (parse `(let x = 10(let y = (x + 10)(x + y))))) (numE 30))  
(test (interp (parse `(let x = 2(let y = (x + 10)(y + 8))))) (numE 20))  

;; Shadowing Behavior  
(test (interp (parse `(let x = 8(let x = 10 x)))) (numE 10))  
(test (interp (parse `(let x = 5(let x = 15 (x + 15))))) (numE 30))  
(test (interp (parse `(let x = 18(let x = 5 (x + x))))) (numE 10)) 

(get-sub-count) 
(reset-sub-counter!) 