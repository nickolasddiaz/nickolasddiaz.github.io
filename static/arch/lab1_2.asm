;lab1_2.asm
extern printf
section .data
msg db "Hello, World! 64-bit version.", 10, 0
section .text
global main
main:
lea rcx, [msg]
call printf
ret
