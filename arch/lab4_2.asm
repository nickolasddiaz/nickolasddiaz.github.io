;lab4_2.asm
extern _printf
SECTION .data
char1: db 65,66,67,68,69, 10,0
char2: db "ABCDE", 10, 0
price1: db '$','1','2','.','3','4','5', 10,0
price2: db "$12.345", 10, 0
IS64: dw '64-bit Windows',10, 0
IS32: dw "32-bit Windows",10, 0
SECTION .text
global _main
_main:
 add esp,4
 push char1 ;display value
 call _printf
 add esp,4
 push char2 ;display value
 call _printf
 add esp,4
 push price1 ;display value
 call _printf
 add esp,4
 push price2 ;display value
 call _printf
 add esp,8
 push IS64 ;display value
 call _printf
 add esp,8
 push IS32 ;display value
 call _printf
 ret