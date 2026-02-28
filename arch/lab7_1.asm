;lab7_1.asm
;declare some external functions
extern _scanf
extern _printf
SECTION .data
msg1: db "Enter the first number: ", 0
msg2: db "Enter the second number: ", 0
fmtin: db "%d", 0
fmtout: db "The difference: %d", 10, 0 ; newline, null terminator
int1: times 4 db 0 ;32-bits integer = 4 bytes
int2: times 4 db 0
SECTION .text
global _main
_main:
 push msg1 ;display the first message
 call _printf
 add esp, 4 ;remove parameters
 push int1 ;address of int1 (second parameter)
 push fmtin ;arguments are right to left (first parameter)
 call _scanf ;take user input
 add esp, 8 ;remove parameters
 push msg2 ;display the first message
 call _printf
 add esp, 4 ;remove parameters
push int2 ;address of int2
 push fmtin ;arguments are right to left
 call _scanf ;take user input
 add esp, 8 ;remove parameters
 mov eax, dword [int1]
 mov ecx, dword [int2]
 sub eax, ecx ;sub the values eax=eax-ecx
 push eax ;display the result
 push fmtout
 call _printf ;display the difference
 add esp, 8 ;remove parameters
 ret