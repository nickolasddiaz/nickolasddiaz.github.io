;ex7_1.asm
;Student: Nickolas Diaz
extern _scanf
extern _printf
SECTION .data

msg1: db "Enter the first number: ", 0
msg2: db "Enter the second number: ", 0
fmtin: db "%d", 0
fmtout: db "The product: %d", 10, 0 
int1: times 4 db 0 
int2: times 4 db 0
SECTION .text
global _main

_main:
 push msg1 
 call _printf
 add esp, 4 
 push int1 
 push fmtin 
 call _scanf 
 add esp, 8 
 push msg2 
 call _printf
 add esp, 4 
 push int2 
 push fmtin 
 call _scanf 
 add esp, 8 
 mov eax, dword [int1]
 mov ecx, dword [int2]
 imul eax, ecx 
 push eax 
 push fmtout
 call _printf 
 add esp, 8 
 ret