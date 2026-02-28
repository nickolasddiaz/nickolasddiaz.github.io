;lab6_4.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
;SHL
mov eax, 5 ;eax = 00000101b
SHL eax, 1 ;eax = 00001010b
push eax
push val
call _printf
xor eax,eax
;SHR
mov eax, 32 ;eax = 00100000b
SHR eax, 1 ;eax = 00010000b
push eax
push val
call _printf
;eax*32 + eax*4
mov eax, 123
mov ebx, eax
shl eax, 5 ; multiply by 2^5
shl ebx, 2 ; mulitply by 2^2
add eax, ebx ; add the products
push eax
push val
call _printf
;eax/32 + eax/4
mov eax, 128
mov ebx, eax
SHR eax, 5 ; divide by 2^5
SHR ebx, 2 ; divide by 2^2
add eax, ebx ; add the products
push eax
push val
call _printf
;ROL
mov al, 40h ;al = 01000000b
ROL al, 1 ;al = 10000000b
push eax
push val
call _printf
;ROR
mov al, 128 ;al = 10000000b
ROR al, 1 ;al = 01000000b
push eax
push val
call _printf
ret