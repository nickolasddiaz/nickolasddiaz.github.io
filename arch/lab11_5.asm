;lab11_5.asm
;Constants
NULL EQU 0
STD_OUTPUT_HANDLE EQU -11
extern GetStdHandle ;Import external symbols
extern WriteFile ;Windows API functions, not decorated
extern ExitProcess
global main ;Export symbols. The entry point
;Initialized data segment
section .data
msg db "64-bit console app.", 0Dh, 0Ah
msgLength EQU $-msg ;address of msg
section .bss ;Uninitialized data segment
alignb 8
StandardHandle resq 1
Written resq 1
section .text ;Code segment
main:
sub RSP, 8 ;Align the stack to a multiple of 16 bytes
sub RSP, 32 ;32 bytes of shadow space
mov ECX, STD_OUTPUT_HANDLE
call GetStdHandle
mov qword [REL StandardHandle], RAX
add RSP, 32 ;Remove the 32 bytes
sub RSP, 32 + 8 + 8 ;Shadow space+5th parameter+align stack
 ;to a multiple of 16 bytes
mov RCX, qword [REL StandardHandle] ;1st parameter
lea RDX, [REL msg] ;2nd parameter
mov R8, msgLength ;3rd parameter
lea R9, [REL Written] ;4th parameter
mov qword [RSP + 4 * 8], NULL ;5th parameter
call WriteFile ;Output can be redirect to a file
add RSP, 48 ;Remove the 48 bytes
xor ECX, ECX
call ExitProcess