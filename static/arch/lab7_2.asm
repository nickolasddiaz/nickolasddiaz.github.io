;lab7_2.asm
; declare some external functions
extern _printf
section .data
val: db '%10d', 0
section .text
global _main
_main:
 push ebx
 mov ecx, 40
 xor eax, eax
 xor ebx, ebx
 inc ebx
print:
push eax
push ecx
push eax
push val
call _printf
add esp, 8
pop ecx
pop eax
mov edx, eax
mov eax, ebx
add ebx, edx
dec ecx
jnz print
pop ebx
ret
