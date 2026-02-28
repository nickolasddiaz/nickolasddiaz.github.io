;lab9_2.s
.data #variable used follow this line
prompt1: .asciiz "Enter a number: "
prompt2: .asciiz "\n The square of the number: "
.globl main
.text #program's code after this line
main:
li $v0,4 #System call code for print string
la $a0,prompt1 #Load address of the prompt1 string
syscall #call OS to Print prompt1
li $v0,5 #System call code for read integer
syscall #call OS to Read integer into $v0
move $t1,$v0 #Move the integer into $t1
mul $t1,$t1,$t1 #Multiply the contents of $t1 with itself
li $v0,4 #System call code for print string
la $a0,prompt2 #Load address of the prompt2 string
syscall #call OS to Print prompt2
move $a0,$t1 #Load $a0 with the value in $t1
li $v0,1 #System code to print integer
syscall #call OS to print the value in $v0
end:
li $v0,10 #System call code to Exit
syscall #call OS to Exit the program