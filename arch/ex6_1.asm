;ex6_1.asm
;Student: Nickolas Diaz


extern _printf
section .data
result: db "The output is %d", 10,0
section .text
global _main
_main:
xor edx, edx
mov ebx,0o44
mov eax,0o524
div ebx
push eax
push result
call _printf
add esp,8
ret