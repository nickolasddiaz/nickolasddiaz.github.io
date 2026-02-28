;lab10_4.asm
extern printf
default rel
bits 64
section .const
fmt db "pb's value is %ph", 10
 db "*pb's value is %d", 10, 0

section .data
b db 0
 db 1, 2, 3, 4, 5, 6, 7
pb equ b+2

section .text
global main
main:
 sub rsp, 48 ;align the stack
 lea rcx, [fmt]
 mov rdx, pb
 movzx r8, byte [rdx]
 call printf

 add rsp, 48
 ret