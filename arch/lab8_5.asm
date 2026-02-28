;lab8_5.asm
org 100h
;Displaying msg1
mov dx, msg1
mov ah, 09h
int 21h
;User input
mov ah, 01h
int 21h
MOV BH, AL
mov ah, 01h
int 21h
MOV BL, AL
call Newline

;Displaying msg2
mov dx, msg2
mov ah, 09h
int 21h
;Displaying User's input
mov dl, BH
mov ah, 02h
int 21h
mov dl, BL
mov ah, 02h
int 21h
call Newline

;Displaying msg3
mov dx, msg3
mov ah, 09h
int 21h
ret
Newline:
 mov DL, 13
 mov ah, 02h
 int 21h
 mov DL, 10
 mov ah, 02h
 int 21h
 ret
mov ax,4c00h ;return to ms-dos
int 21h
ret
msg1 db "Enter a two-digit integer: $"
msg2 db "You entered: $"
msg3 db "Welcome to CSCI242!$"
