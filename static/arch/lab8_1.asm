;lab8_1.asm
ORG 100h
;display a single character
mov dl, 'R' ;store ascii code of 'R' in dl
mov ah, 2h ;ms-dos character output function
int 21h ;displays character in dl register
;insert a new line
mov dl, 0Ah ;0Ah is ASCII code for new line
mov ah, 2h ;ms-dos character output function
int 21h ;displays character in dl register
;display 32 heart characters
MOV AH,09 ;write character
MOV AL,03 ;ASCII of the heart character
MOV BX,0004 ;PAGE 0, color 4
MOV CX,20h ;32 characters
INT 10H ;interrupt 10 -> BIOS
;insert a new line
mov dl, 0Ah ;0Ah is ASCII code for new line
mov ah, 2h ;ms-dos character output function
int 21h ;displays character in dl register
;display the string
lea dx, [msg];display message
mov ah,9
int 21h
;insert a new line
mov dl, 0Ah ;0Ah is ASCII code for new line
mov ah, 2h ;ms-dos character output function
int 21h ;displays character in dl register
;display 32 equal characters
MOV AH,09 ;write character
MOV AL,61 ;ASCII of the equal character
MOV BX,0009 ;PAGE 0, color 9
MOV CX,20h ;32 characters
INT 10H ;interrupt 10 -> BIOS
mov ah,4ch ;return to ms-dos
int 21h
RET ;returns to operating system.
msg: DB 'CSCI242$'