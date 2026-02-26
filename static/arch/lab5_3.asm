;lab5_3.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 ;XNOR operation
 mov eax, 10110b ;assign value
 mov ecx, 1010b
 xor eax, ecx ;XOR operation
 not eax ;NOT operation
 push eax ;get the value
 push val ;display value
 call _printf
 xor eax,eax ;set eax to 0
 xor ecx,ecx ;set ecx to 0

 ;AND-OR operation
 mov eax, 1011b ;assign value
 mov ecx, 1010b
 and eax, ecx ;AND operation
 mov edx, 101b ;assign value
 OR eax, edx ;OR operation
 push eax ;get the value
 push val ;display value
 call _printf
 xor eax,eax ;set eax to 0
 xor ebx,ebx ;set ebx to 0
 xor ecx,ecx ;set ecx to 0
 xor edx,edx ;set edx to 0
 ;AND-AND operation
 mov eax, 1011b ;assign value
 mov ecx, 1010b
 and eax, ecx ;AND operation
 mov edx, 101b ;assign value
 and eax, edx ;OR operation
 push eax ;get the value
 push val ;display value
 call _printf
 ret
