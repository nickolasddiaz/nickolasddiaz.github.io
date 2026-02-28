;lab6_5.asm
extern _printf
section .data
    result db "Sum is: %d", 10, 0
section .text
global _main
_main:
    mov ebx, 0
    mov eax, 0
getSum: ; Define a subroutine
    inc ebx ; Increment ebx by 1
    add eax, ebx ; eax = eax + ebx
    cmp ebx, 20 ; Check if ebx equals to 20
    jnz getSum ; Go to getSum if ebx != 20
    push eax
    push result
    call _printf
    add esp, 8
    ret
