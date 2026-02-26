;lab5_1.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 ;AND operation
 mov eax, 10110b ;assign value
 mov ecx, 11011b
 and eax,ecx ;AND operation
 push eax ;get the value
 push val ;display value
 call _printf
 xor eax,eax ;set eax to 0
 xor ecx,ecx ;set ecx to 0

 ;OR operation
 mov eax, 10110b ;assign value
 mov ecx, 11011b
 or eax,ecx ;OR operation
 push eax ;get the value
 push val ;display value
 call _printf 
 xor eax,eax ;set eax to 0
 xor ecx,ecx ;set ecx to 0
 ;NOT operation
 mov eax, 1101b ;assign value
 not eax ;NOT operator
 push eax ;get the value
 push val ;display value
 call _printf
 ret