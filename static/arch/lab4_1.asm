;lab4_1.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 add esp,4 ;allocate space in the stack
 ;binary
 mov eax, 10001011b ;assign value
 push eax ;get the value
 push val ;display value
 call _printf
 sub esp, 4
 ;octal
 mov eax, 0o213 ;assign value
 push eax ;get the value
 push val ;display value
 call _printf
 add esp, 4
 ;hexadecimal
 mov eax, 8Bh ;assign value
 push eax ;get the value
 push val ;display value
 call _printf
 add esp, 8