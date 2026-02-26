;lab6_3.asm
extern _printf
section .data
heading: db "eax ebx edx", 10, 0 ;define heading
val: db "%d ", 0 ;define output format
br: db '', 10, 0 ;define a new line
M: db "MUL:", 10, 0 ;variable with word "MUL" as value
D: db "DIV:", 10, 0 ;variable with word "DIV" as value
section .text
global _main 
_main: ;denotes the entry point
 ;MUL instruction
 push M ;get value from M variable
 call _printf
 push heading
 call _printf ;display the value
 xor edx, edx ;set edx to 0
 mov eax, 15 ;store 15 in eax
 mov ebx, 3 ;store 3 in ebx
 mul ebx ;eax=ebx*eax
 push eax ;get the value
 push val
 call _printf ;display the value
 push ebx ;get the value
 push val
 call _printf ;display the value
 push edx ;get the value
 push val
 call _printf ;display the value
 push br
 call _printf ;print new line
 ;clear registers
 xor eax, eax ;set eax to 0
 xor ebx, ebx ;set eax to 0
 ;DIV instruction
 push D ;get value from D variable
 call _printf
 push heading
 call _printf ;display the value
 xor edx, edx ;set edx to 0
 mov eax, 15 ;store 15 in eax
 mov ebx, 3 ;store 3 in ebx
 div ebx ;eax=eax/ebx
 push eax ;get the value
 push val
 call _printf ;display the value
 push ebx ;get the value
 push val
 call _printf ;display the value
 push edx ;get the value
 push val
 call _printf ;display the value

 ret