;lab6_2.asm
extern _printf
section .data
heading1: db "AND OR NOT", 10, 0 ;define heading
heading2: db "NOR XOR NAND", 10, 0 ;define heading
val: dw "%d ", 0 ;define output format
br: db '', 10, 0 ;define a new line
section .text
global _main

_main: ;denotes the entry point
 push heading1
 call _printf ;display the value
 mov eax, 147 ;store 147 in eax
 and eax, 13 ;performs 147 AND 13 and saves result in eax
 push eax ;get the value
 push val
 call _printf ;display the value
 mov eax, 147 ;store 147 in eax
 or eax, 13 ;performs 147 or 13 and saves result in eax
 push eax ;get the value
 push val
 call _printf ;display the value
 mov eax, 147 ;store 147 in eax
 not eax ;performs NOT 147 and saves result in eax
 push eax ;get the value
 push val
 call _printf ;display the value
 push br
 call _printf ;print new line
 ;2nd row
 push heading2
 call _printf ;display the value
 mov eax, 147 ;store 147 in eax
 OR eax, 13 ;performs 147 OR 13 and saves result in eax
not eax ;not (147 or 13)
 push eax ;get the value
 push val
 call _printf ;display the value
 mov eax, 147 ;store 147 in ebx
 xor eax, 13 ;performs 147 xor 13 and saves result in ebx
 push eax ;get the value
 push val
 call _printf ;display the value
 mov eax, 147 ;store 147 in ecx
 and eax, 13 ;147 and 13
 not eax ;not (147 and 13)
 push eax ;get the value
 push val
 call _printf ;display the value
 ret
