;ex5_2.asm
;Student: Nickolas Diaz
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 mov eax, 47 
 mov ebx, 38
 mov ecx, 105 
 mov edx, 126
 and eax,ebx
 or ecx,edx
 or eax,ecx
 push eax
 push val
 call _printf
 ret

