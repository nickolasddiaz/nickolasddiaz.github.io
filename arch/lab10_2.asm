;lab10_2.asm
extern printf
default rel
bits 64
section .data ;Initialized data segment
n1 dq 5
n2 dq 255
n3 dq 487369
n1fmt db "n1=%d, converted to hex=%x", 10, 0
n2fmt db "n2=%d, converted to hex=%x", 10, 0
n3fmt db "n3=%d, converted to hex=%x", 10, 0
section .text
global main ;the "main" function.
main:
sub rsp, 56 ;align the stack
;print the values of n1:
lea rcx, [n1fmt]
mov rdx, [n1]
mov r8, rdx
call printf
;print the values of n2:
lea rcx, [n2fmt]
mov rdx, [n2]
mov r8, rdx
call printf
;print the values of n3:
lea rcx, [n3fmt]
mov rdx, [n3]
mov r8, rdx
call printf
add rsp, 56
ret