;lab4_4.asm
extern _printf
section .bss
 num1: resb 4
 num2: resb 4
 num3: resb 4
section .data
 fval: db "%f", 10, 0
section .text
global _main
_main:
 mov dword [num1], __float32__(0b0.0110101)
 mov dword [num2], __float32__(0o0.324)
 mov dword [num3], __float32__(0x0.6A)
 ;
 sub esp, 8
 fld dword [num1]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ;
 sub esp, 8
 fld dword [num2]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ;
 sub esp, 8
 fld dword [num3]
 fstp qword [esp]
 push fval
 call _printf
 add esp, 12
 ret