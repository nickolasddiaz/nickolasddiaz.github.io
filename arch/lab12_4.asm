;lab12_4.asm
extern printf
extern scanf
section .data
msg: db 'Enter two floating-point numbers: ', 0
inFmt: db '%lf %lf', 0
result: db '%lf %s %lf', 0xd, 0xa,0
gt: db '>', 0
lt: db '<', 0
eq: db '=', 0
newline:db 0xa, 0xd, 0
section .bss
a: resq 1
b: resq 1
flag: resq 1
op: resq 1
section .text
global main
main:
 mov rcx, msg
 sub rsp, 32
 call printf
 add rsp, 32

 mov rcx, inFmt ; scanf(inFmt, &a, &b)
 mov rdx, a
 mov r8, b
 sub rsp, 32
 call scanf
 add rsp, 32
 finit
 fld qword [a]
 fcom qword [b] ; a compare to b
 fstsw ax ; store FPU flags to AH
 sahf ; store AH into (CPU's) Flags
 pushfq ; Push EFLAGS Register onto the Stack
 pop qword [flag]
 ; flag & 0000 0001
 test byte [flag], 00000001B ; test C0 (C0 is carry flag)
 jnz .less ; if C0 = 1 goto less
 ; flag & 0100 0000
 test byte [flag], 01000000B ; test C3 (C3 is zero flag)
 jnz .equal ; if C3 = 1 goto equal
 mov qword[op], gt
 jmp .comp_result
.less:
mov qword[op], lt
jmp .comp_result
.equal:
mov qword[op], eq
.comp_result:
; printf(result, a, op, b)
mov rcx, result
mov rdx, qword [a]
mov r8, qword [op]
mov r9, qword [b]
sub rsp, 32
call printf
add rsp, 32
; printf("\r\n")
mov rcx, newline
sub rsp, 32
call printf
add rsp, 32
jmp $$
ret