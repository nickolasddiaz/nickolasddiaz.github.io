;lab7_5.asm
;declare some external functions
extern _printf
section .data
val: db "%f", 10, 0
section .bss
nstr resb 48
section .text
global _main
_main:
 mov eax, 80000000h
 cpuid
 cmp eax, 80000004h
 jb exit ; not supported
 mov edi, nstr ; need 48 bytes to store it
 mov eax, 80000002h
 cpuid
 call savestr
 mov eax, 80000003h
 cpuid
 call savestr
 mov eax, 80000004h
 cpuid
 call savestr
 ;print it
 mov ecx, nstr
 mov edx, 48
 add esp, 48 ;reserve stack for a double in stack
 mov dword [nstr], 15
 fild dword [nstr]
 fstp qword [esp] ;store double
 ;push eax
 push val
 call _printf
exit:
 mov eax, 1
 int 80h
savestr:
 stosd
 mov eax, ebx
 stosd
 mov eax, ecx
 stosd
 mov eax, edx
 stosd
ret