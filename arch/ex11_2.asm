;ex11_2.asm
;Student: Nickolas Diaz
bits 64
default rel
extern printf
extern scanf
section .data
table: db 'abcdefghijklmnopqrstuvwxyz', 0
msg: db 'Type a number 0-25: ', 0
err: db 'error', 0
input: db '%d', 0
msgans: db '%c', 0
section .bss
num: resb 1
section .text
global main
main:
mov rcx, msg
sub rsp, 32
call printf
add rsp, 32
mov rcx, input
mov rdx, num
sub rsp, 32
call scanf
add rsp, 32
cmp qword [num], 25
ja error 

cmp qword [num], 0
jb error ; if num < 0
mov rbx, table 
mov al, byte [num] 
xlatb  
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