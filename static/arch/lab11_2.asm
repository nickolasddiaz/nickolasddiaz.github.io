;lab11_2.asm
bits 64
default rel
extern scanf
extern printf
extern strlen
section .data
msg: db 'Enter your full name: ', 0
input: db '%s', 0
result: db 'Welcome, %s %s!', 0
section .bss
str: resb 512
lstN: resb 256
fstN: resb 256
section .text
global main
main:
 ; print msg
 mov rcx, msg
 sub rsp, 32
 call printf
 add rsp, 32
 ; scan
 mov rcx, input
 mov rdx, str
 sub rsp, 32
 call scanf
 add rsp, 32
 ; get string len
 mov rcx, str
 sub rsp, 32
 call strlen
 add rsp, 32
 ; init for lstN
 mov rcx, rax ; the length of string is in rax
 mov rsi, str ; source string
 mov rdi, lstN ; destination string
 cld ; direction from lstN to fstN
.L1:
 lodsb ; load string byte at address `rsi` into `al`

 cmp al, ','
 je main.L2 ; change rdi from lstN to fstN
 cmp al, 0 ; if character is equal to EOL
 je .L3
 stosb ; stroe string byte at address `rdi` into `al`
 loop main.L1
.L2:
 mov rdi, fstN
 jmp main.L1
.L3:
 mov rcx, result
 mov rdx, fstN
 mov r8, lstN
 sub rsp, 32
 call printf
add rsp, 32
 ret