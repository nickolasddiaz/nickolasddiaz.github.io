;lab9_3.s
.data
Number1: .asciiz "\nPlease Enter the First Number, N1: "
Number2: .asciiz "\nPlease Enter the Second Number, N2: "
Result: .asciiz "\nThe Result of the Product is: "
High: .asciiz "\nContents of Register HI: "
Low: .asciiz "\nContents of Register LO: "
.text
.globl main
main:
 li $v0, 4
 la $a0, Number1
 syscall
 li $v0, 5
 syscall
 add $t0, $v0, $zero
 li $v0, 4
 la $a0, Number2
 syscall
 li $v0, 5
 syscall
 add $t1, $v0, $zero
 mult $t0, $t1
 li $v0, 4
 la $a0, Result
 syscall
 li $v0, 4
 la $a0, High
 syscall
 li $v0, 1
 mfhi $a0
 syscall
 li $v0, 4
 la $a0, Low
 syscall
 li $v0, 1
 mflo $a0
 syscall
End_Prog:
 li $v0, 10
syscall
