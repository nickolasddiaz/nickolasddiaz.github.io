;ex5_1.asm
;Student: Nickolas Diaz
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 mov eax, 2169 
 mov ebx, 10011111b
 and eax,ebx
 not eax
 push eax 
 push val 
 call _printf
 mov ecx, 10111b 
 mov edx, 53
 xor ecx,edx
 not ecx
 push ecx 
 push val
 call _printf
 ret

