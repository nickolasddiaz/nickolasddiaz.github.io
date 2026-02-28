;lab3_1.asm
;declare some external functions
extern _printf
section .data
msg: db 'Welcome to CSCI242!', 10, 0
student: db 'Computer Architecture and Organization', 10, 0
section .text
global _main
_main:
 add esp,4 ;allocate new 4-byte space on the stack

 push msg ;insert the string to stack
 call _printf ;print the string
 add esp,4 ;allocate another 4-byte space on the stack
 push student
 call _printf
 add esp,4
 ret ;transfer the control back to stack