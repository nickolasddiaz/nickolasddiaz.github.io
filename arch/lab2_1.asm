;lab2_1.asm
extern _printf ;import the "printf" function
section .data
val: db '%d', 10, 0 ; define the display format
section .txt
global _main
_main:
 mov eax,7 ;assign 7 to register eax
 mov ebx,4 ;assign 4 to register ebx
 sub eax,ebx ;perform 7-4
 mov ecx,eax ;assign result to register ecx
 push ecx ;get the value from ecx
 push val ;print the value in register ecx
 call _printf
 ret
