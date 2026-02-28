;lab3_4.asm
extern _printf
extern _scanf
section .bss
ans: resb 1 ;reserve 1 bytes of memory
section .data
prompt: db 'How many states are in the U.S.A.? ', 0
input: db '%d', 0
output: db 'You entered: %d',0ah, 0
section .text
global _main
_main:
 push prompt ;get the string
 call _printf ;display the string
 add esp,4
 push ans ;specify where to store input
 push input ;specify format of input
 call _scanf ;get input
 add esp,8
 mov eax,[ans] ;assign the value of ans to eax
 push eax ;get value
 push output ;specify format of output
 call _printf ;display the string
 add esp,8
 ret
