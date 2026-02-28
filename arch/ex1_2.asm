;ex1_2.asm
;Student: Nickolas Daniel Diaz
global _main
extern _ExitProcess@4
extern _MessageBoxA@16

section .data
    msg db "Nickolas Daniel Diaz in 32-bit dialog box.", 0

section .text
_main:
    push 0            
    push msg         
    push msg          
    push 0            
    call _MessageBoxA@16

    push 0            
    call _ExitProcess@4
