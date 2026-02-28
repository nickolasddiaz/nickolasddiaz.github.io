;lab7_3.asm
; declare some external functions
extern _printf ;the C function, to be called
SECTION .data ;Data section, initialized labels
a: dd 5 ;int a=5;
val: db "a=%d, eax=%d", 10, 0 ;The printf format, "\n", '0'
SECTION .text ;Code section.
global _main ;the standard gcc entry point
_main: ;the program label for the entry point
 push ebp ;set up stack frame
 mov ebp,esp
 mov eax, [a] ;put a from store into register
 add eax, 2 ;a+2
 push eax ;value of a+2
 push dword [a] ;value of label a
 push dword val ;address of ctrl string
 call _printf ;call C function
 add esp, 12 ;pop stack 3 push times 4 bytes
 mov eax,0 ;normal, no error, return value
 ret