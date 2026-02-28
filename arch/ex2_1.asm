;ex2_1.asm
;Student: Nickolas Diaz

extern _printf 
section .data
msg: dw "Nickolas Diaz in Comp Arch and Orgn!"
section .txt
global _main
_main:
 push msg
 call _printf
 ret
