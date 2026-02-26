;ex4_1.asm
;Student: Nickolas Diaz
extern _printf
SECTION .data
aph: db "aa", "bb", "cc", "dd", "ff", "ee", 10,0
SECTION .text
global _main
_main:
 add esp,4
 push aph
 call _printf
 ret
