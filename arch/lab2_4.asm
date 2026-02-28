;lab2_4.asm
extern _printf
section .bss
addr: RESB 4
section .data
var db 'a' ;assign 'a' to var
fmt db "0x%x", 10, 0 ;format string
section .text
global _main
_main:
 mov eax, var ;variable address is stored in eax register
 mov [addr], dword eax ;move the value of eax to address
 push dword [addr] ;push value of address
 push dword fmt ;address of format string
 call _printf ;calling printf
 add esp, 8 ;pop stack 2*4 bytes after passing variables to printf
 ret