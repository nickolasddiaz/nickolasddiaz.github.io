;ex12_2.asm
;Student: Nickolas Diaz

org 100h
mov al,00h 
mov ah,3ch
lea dx,file 
mov cx,0000h 
int 21h

jc exit 

lea dx,[msg] 
mov ah,09h
int 21h

exit:
mov ah,4ch 
int 21h
file db 'ex12_2.txt',0
msg db 'File Created','$'