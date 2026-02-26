;lab8_3.asm
org 100h
xor ax,ax ;same as, mov ax,0
lea dx, msg1
mov ah, 09h
int 21h
lea dx, msg2
mov bl,10 ;different number will produce different colors
mov ah, 9
int 10h ;interrupt for colors
int 21h
lea dx, msg3
mov bl,5 ;different number will produce different colors
mov ah, 09h
int 10h ;interrupt for colors
int 21h
lea dx, msg4
mov bl,8 ;different number will produce different colors
mov ah, 9
int 10h ;interrupt for colors
int 21h
lea dx, msg5
mov bl,7 ;different number will produce different colors
mov ah, 9
int 10h ;interrupt for colors
int 21h

mov ah,4ch ;terminating
int 21h
; declare variables
msg1 dw 10, 13, 'Display in default color!','$'
msg2 dw 10, 13, 'Display in light green color!','$'
msg3 dw 10, 13, 'Display in purple color!','$'
msg4 dw 10, 13, 'Display in grey color!','$'
msg5 dw 10, 13, 'Display in default color again!','$'