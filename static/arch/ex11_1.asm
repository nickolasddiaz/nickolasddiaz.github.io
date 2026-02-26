;ex11_1.asm
;Student: Nickolas Diaz

bits 64
default rel
extern printf
extern strlen
section .data
dash: times 19 db '-' 
db 0
fmt: db 0xd, 0xa, '|Nickolas Diaz: %d|', 10, 0
section .bss
len: resq 1
section .text
global main
main:
mov rcx, dash
sub rsp, 32
call printf
add rsp, 32

mov rcx, dash
sub rsp, 32
call strlen
add rsp, 32
mov qword[len], rax
mov rcx, fmt
mov rdx, [len]
sub rsp, 32
call printf
add rsp, 32

mov rcx, dash
sub rsp, 32
call printf
add rsp, 32

mov rcx, dash
sub rsp, 32
call strlen
add rsp, 32
mov qword[len], rax
ret
