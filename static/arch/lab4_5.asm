;lab4_5.asm
extern _printf
section .bss
 num1: resb 4
 num2: resb 4
section .data
 fval: db "%f", 10, 0
section .text
global _main
_main:
 mov dword [num1], __float32__(17.69)
 mov dword [num2], __float32__(4.27)
 ;fadd for addition
 sub esp, 8
 fld dword [num1]
 fadd dword [num2]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ;fsub for subtraction
 sub esp, 8
 fld dword [num1]
 fsub dword [num2]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ;fmul for multiplication
 sub esp, 8
 fld dword [num1]
 fmul dword [num2]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ;fmul for division
 sub esp, 8
 fld dword [num1]
 fdiv dword [num2]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ret