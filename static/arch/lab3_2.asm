;lab3_2.asm
;declare some external functions
extern _printf
section .data
 v1: db 55, 10, 0 ; ASCII in decimal 55
 v2: db 0x55,0x56,0x57, 10, 0 ; 3 ASCII in hexadecimal
 v3: db 'A', 0xA, 0 ; 1 character
 v4: db 'CSCI242', 0xA, 0 ;string
section .text
 global _main
_main:
 add esp, 4 ;allocate new 4-byte space on the stack
 push v1 ;load value(s) in v1
 call _printf ;display the value(s)
 sub esp, 1 ;clear 1-byte space used by v1
 push v2 ;load value(s) in v2
 call _printf
 sub esp, 3 ;clear 3-byte space used by v2
 push v3 ;load value(s) in v3
 call _printf
 sub esp, 1 ;clear 1-byte space used by v3
 push v4 ;load value(s) in v4
 call _printf
 add esp, 5 ;clear 5-byte space used by v4
 ret
