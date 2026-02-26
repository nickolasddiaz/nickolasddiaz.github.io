#ex9_1.s
#Student: Nickolas Diaz

main:
li $v0,4
la $a0, myname
syscall
li $v0,10
syscall
.data
myname: .asciiz "My name is Nickolas Diaz"
