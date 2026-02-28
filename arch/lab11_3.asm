;lab11_3.asm
bits 64
default rel
extern printf
extern scanf

section .data
table: db '0123456789abcdefg', 0
msg: db 'Type a number 0-16: ', 0
err: db 'error', 0
input: db '%d', 0
msgans: db '%c', 0
section .bss
num: resb 1
section .text
global main
main:
 ; printf(message)
 mov rcx, msg
 sub rsp, 32
 call printf
 add rsp, 32
 ; scanf(input, &num)
 mov rcx, input
 mov rdx, num
 sub rsp, 32
 call scanf
 add rsp, 32
 cmp qword [num], 16
 ja error ; if num > 16

 cmp qword [num], 0
 jb error ; if num < 0
 mov rbx, table ; rbx: base address
 mov al, byte [num] ; al: offset
 xlatb ; table look-up translation
 ; printf(msgans, table[num])
 mov rcx, msgans
 movzx rdx, al
 sub rsp, 32
 call printf
 add rsp, 32
 ret
error:
 mov rcx, err
 sub rsp, 32
 call printf
 add rsp, 32
 ret
