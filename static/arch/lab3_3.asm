;lab3_3.asm
;declare some external functions
extern _printf
section .data
 name: db " Welcome to CSCI242!", 10, 0
 line: times 21 db '-'
 br: db '', 10, 0
section .text
global _main ;the standard gcc entry point
_main:
 sub esp,21
 push line
 call _printf
 sub esp, 21
 push name
 call _printf
 sub esp, 19
 push line
 call _printf
 sub esp, 21
 ret