;lab13_1.asm
[bits 16]
[org 0x7c00]
banner: db 'CSCI242',13,0
xor ax,ax ; set ax register to 0
mov ds,ax ; set data segment(ds) to 0
mov es,ax ; set extra segment(es) to 0
mov bx,0x8000
mov si, banner ; point banner to source index
mov ah, 0x0E
loop:
 lodsb ; get character from string
 cmp al, 0 ; cmp al with end of string
 je end ; if char is zero, end of string
 int 0x10 ; otherwise, print it
 jmp loop ; jmp to .repeat_next_char if not 0
end:
 hlt
 ret ; return
times (510-($-$$)) db 0x00 ;set 512 bytes for boot sector
dw 0xAA55