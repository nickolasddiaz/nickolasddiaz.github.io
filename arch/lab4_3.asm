;lab4_3.asm
extern _printf
SECTION .data
val: db "%d", 10, 0
SECTION .text
global _main
_main:
 add esp,4 ;allocate space in the stack

 ;addition
 mov eax, 2 ;assign 2 to eax
 add eax, 2Ah ;eax=eax+2A 2A is 42
 push eax ;get the value
 push val
 call _printf
 add esp,4
;subtraction
 mov eax, 1111b ;assign 15 to eax
 sub eax, 2Ah ;eax=eax-2A
 push eax ;get the value
 push val
 call _printf
 add esp,4
 ;multiplication
 mov eax, 3 ;assign 3 to eax
 mov ecx, 101b ;assign 5 to ecx
 mul ecx ;eac=eax*ecx
 push eax ;get the value
 push val
 call _printf
 add esp,4
 ;division
 mov eax, 150 ;assign 150 to eax
 mov ecx, 0xf ;assign 15 to ecx
 div ecx ;eac=eax/ecx
 push eax ;get the value
 push val
 call _printf
 add esp,4
 ret
