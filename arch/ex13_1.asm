;ex13_1.asm
;Student: Nickolas Diaz
[bits 16]
[org 0x7c00]
xor ax,ax 
mov ds,ax 
mov es,ax 
mov bx,0x8000
mov si, banner 
mov ah, 0x0E
loop:
 lodsb 
 cmp al, 0 
 je getInput 
 int 0x10 
 jmp loop 
getInput:
 mov ah,00h
 int 16h
cmp al,51
 je end
end:
 mov si, msg
 mov ah, 0x0E
 jmp loop

 hlt
 ret ; return
banner: db "Press 1: ",13,0
msg: db "Nickolas Diaz's Bootloader",13,0
times (510-($-$$)) db 0x00 
dw 0xAA55