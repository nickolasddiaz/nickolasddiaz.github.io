;lab8_2.asm
ORG 100h
LEA DX, [msg1] ;Display message msg1
MOV AH, 09H
INT 21H
MOV AH, 08H ;Read character without echo
INT 21H ;Store enter char in AL
MOV AH, AL ;Copy entered char in AH
SUB AL, 20H ;convert character to capital
MOV BL, AL ;Save converted character in BL
;display the character
MOV DL, AH ;load the copied char from AH
MOV AH, 02H ; Display the copied character
INT 21H
;MOV DX, OFFSET msg2
LEA DX, [msg2] ;Display message msg2
MOV AH, 09H
INT 21H
MOV DL, BL
MOV AH, 02H ;Display converted character
INT 21H
MOV AH, 4CH ;Terminate program and
INT 21H ; Exit to DOS
RET
msg1 DB 10, 13, 'Enter a lower-case character: ', '$'
msg2 DB 10, 'Its upper-case character: ','$',10, 0