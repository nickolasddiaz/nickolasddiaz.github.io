;lab10_5.asm
extern MessageBoxA ;Import external symbols
extern ExitProcess ;Windows API functions, not decorated
;constants
MB_DEFBUTTON1 EQU 0
MB_DEFBUTTON2 EQU 100h
IDNO EQU 7
MB_YESNO EQU 4
global main ;define entry point
;Initialized data segment
section .data
MessageBoxText db "Do you want to exit?", 0 ;set the question
MessageBoxCaption db "64-bit Message Box", 0 ;set the title
section .text ;Code segment
main:
sub RSP, 8 ;Align the stack
sub RSP, 32 ;32 bytes of shadow space
.DisplayMessageBox:
xor ECX, ECX ;1st parameter
lea RDX, [REL MessageBoxText] ;2nd parameter
lea R8, [REL MessageBoxCaption] ;3rd parameter
mov R9D, MB_YESNO ;4th parameter
call MessageBoxA
cmp RAX, IDNO ;Check the return value for "No"
je .DisplayMessageBox
add RSP, 32 ;Remove the 32 bytes
xor ECX, ECX
call ExitProcess