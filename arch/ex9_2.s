#ex9_2.s
#Student: Nickolas Diaz

main:
li $v0,4
la $a0, myname
syscall
li $v0,10


li $7, 37
li $8, 17
sub $9, $7, $8

addi $v0, $zero, 1
move $a0, $9
 syscall

.data
myname: .asciiz "A - B = "
