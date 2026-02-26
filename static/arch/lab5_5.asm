;lab5_5.asm
extern _printf
section .data
val: db "%d", 10, 0
section .text
global _main
_main:
 ;1st associative property
 mov eax, 1011b ;assign value of x
 mov ebx, 1010b ;assign value of y
 mov ecx, 101b ;assign value of z
 ;(y.z)
 and ebx, ecx
 ;x.(y.z)
 and eax, ebx
 push eax
 push val ;display value
 call _printf
 ;reset values
 mov eax, 1011b ;assign value of x
 mov ebx, 1010b ;assign value of y
 mov ecx, 101b ;assign value of z
 ;(x.y)
 and eax, ebx
 ;(x.y).z
 and eax, ecx
 push eax
 push val ;display value
call _printf
 ;2nd associative propery
 mov eax, 1011b ;assign value of x
 mov ebx, 1010b ;assign value of y
 mov ecx, 101b ;assign value of z
 ;(y+z)
 or ebx, ecx
 ;x+(y+z)
 or eax, ebx
 push eax
 push val ;display value
 call _printf
 ;reset values
 mov eax, 1011b ;assign value of x
 mov ebx, 1010b ;assign value of y
 mov ecx, 101b ;assign value of z
 ;(x+y)
 or eax, ebx
 ;(x+y)+z
 or eax, ecx
 push eax
 push val ;display value
 call _printf
 ret