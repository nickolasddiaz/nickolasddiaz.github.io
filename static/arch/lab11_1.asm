;lab11_1.asm
bits 64
default rel
extern printf
extern strlen
section .data
dash: times 22 db '-' ;specify the number of dashes
 db 0
fmt: db 0xd, 0xa, '|Number of dashes: %d|', 10, 0
section .bss
len: resq 1
section .text
global main
main:
 ; print string
 mov rcx, dash
 sub rsp, 32
 call printf
 add rsp, 32
 ; call strlen
 ; strlen(dash)
 mov rcx, dash
sub rsp, 32
 call strlen
 add rsp, 32
 mov qword[len], rax
 ; print string length
 mov rcx, fmt
 mov rdx, [len]
 sub rsp, 32
 call printf
 add rsp, 32

 ; print string
 mov rcx, dash
 sub rsp, 32
 call printf
 add rsp, 32

 ; call strlen
 ; strlen(dash)
 mov rcx, dash
 sub rsp, 32
 call strlen
 add rsp, 32
 mov qword[len], rax

 ret
