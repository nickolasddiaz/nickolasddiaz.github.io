;lab8_1.asm
org 100h
mov ax,0

lea dx, msg
mov bl,5 
mov ah, 09h
int 10h 
int 21h

mov ah,4ch ;terminating
int 21h

msg dw 10, 13, 'Nickolas in purple purple','$'
