;lab6_1.asm
global _WinMain@16
extern _MessageBoxA@16
[section .data]
title db "Message",0
message db "Welcome to CSCI242!",0
[section .code]
_WinMain@16:
 push 0
 push title
 push message
 push 0
 call _MessageBoxA@16
 ret
