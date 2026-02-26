;lab12_2.asm
[BITS 64]
default rel
extern printf
extern _findfirst64
extern fopen
buflen equ 2000000 ; File input buffer size
; Structure definition used by findfirst64 and findnext64:
struc finddata64_t
 attrib: resq 1
 time_create: resq 1
 time_access: resq 1
 time_write: resq 1
 size: resq 1
 name: resb 260
endstruc
section .data
align 16
wci db "*.txt",0 ; Wild-card will find all .txt files
ipmods db "rb",0 ; Modes for file binary read
fileinfo db 'File name: "%s," file size %lld',0x0d,0x0a,0
section .bss
alignb 16
buffer: resb buflen
section .code
global main
main:
 mov [rsp + 8],rcx
 push r15
 push r14
 push r13
 sub rsp,128 ; Stack space
; List a selection of files in the current directory
 mov rcx,wci ; The mask *.txt will select all text files
 mov rdx,finddata64 ; Address of the result structure
 xor r8,r8
 xor r9,r9
 call _findfirst64
; Display the file's name and size
filope:
mov rcx,fileinfo
mov rdx,finddata64+name ; Address of the file name
mov r8,[finddata64+size] ; File size - a quadword here (%lld)
xor r9,r9
call printf
RET
finddata64:
 istruc finddata64_t
 at attrib, dq 0
 at size, dq 0
 at name, db 0
iend
