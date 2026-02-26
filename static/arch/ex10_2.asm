;ex10_2.asm
;Student: Nickolas Diaz

extern MessageBoxA 
extern ExitProcess 

MB_DEFBUTTON1 EQU 0
MB_DEFBUTTON2 EQU 100h
IDNO EQU 7
MB_YESNO EQU 4
global main 

section .data
MessageBoxText db "Are you a robot?", 0 
MessageBoxCaption db "CSCI242 Lab", 0 
section .text 
main:
sub RSP, 8 
sub RSP, 32 
.DisplayMessageBox:
xor ECX, ECX 
lea RDX, [REL MessageBoxText] 
lea R8, [REL MessageBoxCaption] 
mov R9D, MB_YESNO | MB_DEFBUTTON2
call MessageBoxA
cmp RAX, IDNO 
jne .DisplayMessageBox
add RSP, 32 

xor ECX, ECX
call ExitProcess