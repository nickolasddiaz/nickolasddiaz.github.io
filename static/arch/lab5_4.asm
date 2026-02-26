;lab5_4.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 ;A OR B operation
 mov eax, 1011b ;assign value
 mov ecx, 1010b
 or eax, ecx ;OR operation

 ;C OR D
 mov ebx, 101b ;assign value
 mov edx, 111b
 OR ebx, edx ;AND operation
 ;(A or B) OR (C or D)
 OR eax, ebx ;OR operation
 push eax ;get the value
 push val ;display value
 call _printf
 xor eax, eax ;set eax to 0
 xor ebx, ebx ;set ebx to 0
 xor ecx, ecx ;set ecx to 0
 xor edx, edx ;set edx to 0
 ;A AND B operation
 mov eax, 10011b ;assign value
 mov ecx, 1110b
 and eax, ecx ;AND operation

 ;C AND D
 mov ebx, 1010b ;assign value
 mov edx, 111b
 and ebx, edx ;AND operation
 ;(A and B) OR (C and D)
 OR eax, ebx ;OR operation
 push eax ;get the value
 push val ;display value
call _printf
 ret
