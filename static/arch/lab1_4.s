;lab1_4.s
main:
li $v0,4
la $a0, greeting
syscall
li $v0, 10
syscall
.data
greeting: .asciiz "Hello, World! MIPS."
