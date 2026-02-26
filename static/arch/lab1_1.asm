;lab1_1.asm
extern _printf
section .data
message: db 'Hello, World', 10, 0
section .text
global _main
_main:
 push message
 call _printf
 add esp, 4
 ret