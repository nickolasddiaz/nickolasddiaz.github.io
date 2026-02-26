;lab3_5.asm
extern _printf
extern _scanf
section .bss
fn: resb 2
ln: resb 2
section .data
prompt1: db 'Enter first name: ', 0
prompt2: db 'Enter last name: ', 0
input: db '%s', 0
greet: db 'Welcome, %s %s, to CSCI242!',0ah, 0
section .text
global _main
_main:
 add esp,4
 ;first name
 push prompt1
 call _printf
 sub esp,4
 push fn
 push input
 call _scanf
 add esp,8
 ;last name
 push prompt2
 call _printf
 sub esp,4
 push ln
 push input
 call _scanf
 add esp,8
 ;display output
 push ln
 push fn
 push greet
 call _printf
 add esp,8
 ret
