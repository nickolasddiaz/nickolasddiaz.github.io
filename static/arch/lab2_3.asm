;lab2_3.asm
extern _printf ;import the "printf" function
section .data
val: db '%d', 10, 0 ; define the display format
section .txt
global _main
_main:
 mov eax,1 ;assign to register eax
 add eax,2 ;add 2 to eax which already has 1
 add eax,3 ;add 3 to eax which already has 3
 add eax,4 ;add 4 to eax which already has 6
 add eax,5 ;add 5 to eax which already has 10
 push eax ;get the value from eax
 push val ;print the value in register eax
 call _printf
 ret