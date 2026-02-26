;ex6_2.asm
;Student: Nickolas Diaz
extern _printf
section .data
result: db "The result is %d", 10,0
section .text
global _main
_main:
mov ebx,344
mov eax,67
shl eax, 3
shr ebx, 3
push eax
push result
call _printf
push ebx
push result
call _printf
add esp,8
ret
