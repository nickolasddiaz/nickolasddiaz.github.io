;lab10_1.asm
extern printf
section .data
msg db "Ohayo Gozaimasu!", 0
section .text
global main
main:
push rbp
mov rbp, rsp ;for correct debugging
sub rsp, 32

lea rcx, [msg]
call printf
mov rsp, rbp
pop rbp
ret
