;lab10_3.asm
extern printf
default rel
bits 64
section .const
fmt1 db 'arr[0]=%d ',10, 0
fmt2 db 'arr[1]=%d ',10, 0
fmt3 db 'arr[2]=%d ',10, 0
fmt4 db 'arr[3]=%d ',10, 0
section .data
i db 0, 1, 2, 3 ;index
section .text
global main
main:
 push rbx
 sub rsp, 48 ;align the stack
 lea rcx, [fmt1]
 movzx rdx, byte[i]
 call printf

 lea rcx, fmt2
 movzx rdx, byte[i+1]
 call printf

 lea rcx, fmt3
 movzx rdx, byte[i+2]
 call printf

 lea rcx, fmt4
 movzx rdx, byte[i+3]
 call printf
 add rsp, 48
 pop rbx
 ret
