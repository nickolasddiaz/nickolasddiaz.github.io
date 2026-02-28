;ex10_1.asm
;Student: Nickolas Diaz
extern printf
section .data
msg db "Welcome to CSCI242!",10,"We are writing 64-bit code!",10,"The code will not work in 32-bit OS",0
section .text
global main
main:
push rbp
mov rbp, rsp 
sub rsp, 32

lea rcx, [msg]
call printf
mov rsp, rbp
pop rbp
ret
