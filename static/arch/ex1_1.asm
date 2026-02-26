;ex1_1.asm
;Student: Nickolas Daniel Diaz
extern _printf
section .data
message: db 'Nickolas Daniel Diaz reports to CSCI2422!', 10, 0
section .text
global _main
_main:
 push message
 call _printf
 add esp, 4
 ret