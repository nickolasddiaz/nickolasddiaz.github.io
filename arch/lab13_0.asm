;lab13_0.asm
[bits 16]
[org 0x7c00]
hlt
times (510-($-$$)) db 0x00
dw 0xAA55