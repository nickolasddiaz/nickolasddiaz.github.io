;ex4_2.asm
extern _printf
section .bss
 PI: resb 4
section .data
 fval: db "%f", 10, 0
section .text
global _main
_main:
 mov dword [PI], __float32__(3.1415926)
 fld dword [PI]
 fstp qword [esp]
 push fval
 call _printf
 ret