;lab5_2.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 ;NAND operation
 mov eax, 10110b ;assign value
 mov ecx, 101b
 AND eax, ecx ;10110 AND 101 operation
 NOT eax ;NOT operation on the above result
 push eax ;get the value
 push val ;display value
 call _printf
 xor eax,eax ;set eax to 0
 xor ecx,ecx ;set ecx to 0

 ;NOR operation
 mov eax, 10110b ;assign value
 mov ecx, 101b
 OR eax, ecx ;OR operation
 NOT eax ;not operation
 push eax ;get the value
 push val ;display value
 call _printf
 xor eax,eax ;set eax to 0
 xor ecx,ecx ;set ecx to 0
 ;XOR operation
 mov eax, 10110b ;assign value
 mov ecx, 1010b
 xor eax, ecx ;XOR operation
 push eax ;get the value
 push val ;display value
 call _printf
 ret