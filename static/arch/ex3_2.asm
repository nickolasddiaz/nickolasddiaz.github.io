;ex3_2.asm
;Student: Nickolas Diaz
extern _printf
extern _scanf
section .bss
ans: resb 1 
section .data
prompt: db 'How old are you? ', 0
input: db '%d', 0
output: db 'You are %d years old.',0ah, 0
section .text
global _main
_main:
 push prompt 
 call _printf 
 add esp,4
 push ans 
 push input 
 call _scanf 
 add esp,8
 mov eax,[ans] 
 push eax 
 push output 
 call _printf 
 add esp,8
 ret
