;lab2_2.asm
extern _printf ;import the "printf" function
section .data
val: db '%d', 10, 0 ; define the display format
section .txt
global _main
_main:
 mov eax,00000001b ;assign to register eax
 push eax ;get the value from eax
 push val ;print the value in register eax
 call _printf
 mov eax,00000100b ;assign to register eax
 push eax ;get the value from eax
 push val ;print the value in register eax
 call _printf
 ret