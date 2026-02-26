;lab2_5.asm
extern _printf
segment .data:
msg db "Welcome to the world of Assembly!" , 0xA, 0
msg_length equ $-msg ;count the number of characters
val: db 'Number of char: %d', 10, 0 ; define the display format
segment .bss:
segment .text:
global _main
_main:
 mov eax, msg ;msg is the string to be printed
 mov ebx, msg_length ;length of msg
 push eax ;display the message
 call _printf
 push ebx ;get the length of msg
 push val ;display the length
 call _printf
 ret