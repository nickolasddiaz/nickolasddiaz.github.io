; ex3_1.asm
; Student: Nickolas Diaz

extern _printf
section .data
    message db 'Your reality check about to bounce.', 10
            db 'A cynic is only a frustrated optimist.', 10
            db 'Drive like hell, you will get there.', 10
            db 'You will be hungry again in one hour.', 0

section .text
global _main

_main:
    push message
    call _printf
    add esp, 4
    ret
