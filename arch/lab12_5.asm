;lab12_5.asm
[BITS 64]
default rel
extern printf
extern _getch
extern _findfirst64
extern _findnext64
extern _findclose
extern fopen
extern fread
extern feof
extern fclose
buflen equ 2000000 ; File input buffer size
struc finddata64_t
 attrib: resq 1
 time_create: resq 1
 time_access: resq 1
 time_write: resq 1
 size: resq 1
 name: resb 260
endstruc
section .data
wci db "*.asm",0 ; Wild-card will find all .txt files
ipmods db "rb",0 ; Modes for file binary read
align 16
filpoi dq 0 ; FILE pointer
hfile dq 0 ; Handle from findfirst
fileinfo db 'File name "%s',0x0d,0x0a,0
bytesmes db '%2.2x ',0
bmafter db 0x0d,0x0a, 0x0d,0x0a, 0x07,0 ; The 7 is a proper beep
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
 cmp rax,-1
 je goout ; --> No file of that kind found
 mov [hfile],rax ; Save the file "handle"
; Display the file's name and size
filope:
mov rcx,fileinfo
mov rdx,finddata64+name ; Address of the file name
xor r9,r9
call printf
; Open the file for reading in binary mode
mov rcx,finddata64+name ; Address of the file name
mov rdx,ipmods ; Mode string - important - must be zero-terminated!
xor r8,r8
xor r9,r9
call fopen
; It will return either a FILE * or null
or rax,rax
mov qword [filpoi],rax ; Save the FILE pointer
; Test whether end of file has been reached
mov rcx,rax ; The FILE pointer
xor rdx,rdx
xor r8,r8
xor r9,r9
call feof
or rax,rax
jnz goteof ; --> Yes it has
; Read the first twenty bytes of the file
mov rcx,buffer ; Destination
mov rdx,1 ; unit or item
mov r8,20 ; Read 20 bytes
mov r9,qword [filpoi] ; FILE *
call fread
or rax,rax
jz goteof ; --> No readable bytes
; Display those 20 bytes in hexadecimal. Note that printf will
; preserve registers r13 and r14
mov r13,buffer ; First byte to be displayed
mov r14,buffer+20
disbak:
mov rcx,bytesmes
xor rdx,rdx
mov dl,[r13]
xor r8,r8
xor r9,r9
call printf
inc r13
cmp r13,r14
jne disbak
mov rcx,bmafter
xor rdx,rdx
xor r8,r8
xor r9,r9
call printf
; Close the file
goteof:
mov rcx,[filpoi]
xor rdx,rdx
xor r8,r8
xor r9,r9
call fclose
; Wait for a key-press - if the user types "x" we exit right away
xor rcx,rcx
call _getch
cmp al,'x'
je goout
; Otherwise we go on to find the next file, if there is one
mov rcx,[hfile] ; The findfirst handle again
mov rdx,finddata64
xor r8,r8
xor r9,r9
call _findnext64
or rax,rax
jz filope ; --> Found one, so go back and open it
jmp goout ; --> No more files found
; Normal exit
; Call _findclose if necessary to terminate the directory loop
goout:
mov rcx,[hfile]
or rcx,rcx
xor rdx,rdx
xor r8,r8
xor r9,r9
call _findclose
RET
; An instance of the structure finddata64_t. The initializations (the lines
; beginning with "at") are not always necessary.
finddata64:
 istruc finddata64_t
 at attrib, dq 0
 at time_create, dq 0
 at time_access, dq 0
 at time_write, dq 0
 at size, dq 0
 at name, db 0
iend
