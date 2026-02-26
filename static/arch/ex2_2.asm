;ex2_2.asm
;Student: Nickolas Diaz
extern _printf
section .data
    msg db "Nickolas Diaz said the sum is %d", 0xA, 0  
section .text
global _main
_main:
    mov eax, 11 
    add eax, 13
    add eax, 15
    add eax, 17
    add eax, 19
    push eax
    push dword msg
    call _printf
    add esp, 8
    ret
