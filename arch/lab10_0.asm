;lab10_0.asm
extern printf
section .data
msg db 'Hello, World!', 0
section .text
global main
main:
lea ecx, [msg]
call printf
ret