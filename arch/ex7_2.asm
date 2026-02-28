;ex7_2.asm
;Student: Nickolas Diaz
global _main
extern _GetStdHandle@4
extern _WriteFile@20
extern _ExitProcess@4
section .text
_main:
mov ebp, esp
sub esp, 4
push -11
call _GetStdHandle@4
mov ebx, eax
push 0
lea eax, [ebp-4]
push eax
push (message_end - message)
push message
push ebx
call _WriteFile@20
push 0
call _ExitProcess@4
hlt
message:
db 'My full name is Nickolas Diaz', 10
message_end:
