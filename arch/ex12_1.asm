;ex12_2.asm
;Student: Nickolas Diaz

ORG 100h
lea dx, [filepath]
mov ah,39h
int 21h
mov ax, 4c00h
int 21h
filepath DB "Narumi", 0
