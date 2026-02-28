;lab9_5.s
.data
COUNT: .word 10
TEXT: .asciiz "The number is "
EOL: .asciiz "\n"
 .text
.globl main
main:
addiu $sp, $sp, -32 # Adjust stack
sw $ra, 24($sp)
sw $fp, 16($sp) # save old frame pointer
addiu $fp, $sp, 28 # load new frame pointer
la $t0, COUNT
lw $t1, 0($t0)
li $t0, 0 # init index to 0
loop:
sw $t0, 12($sp) # save caller saved registers
sw $t1, 8($sp) #
move $a0, $t0 # setup parameter for fn call
jal print_num # call subroutine
lw $t1, 8($sp) # restore caller saved values
lw $t0, 12($sp) #
addiu $t0, $t0, 1 # increment index;
blt $t0, $t1, loop #
lw $fp, 16($sp) # restore frame pointer
lw $ra, 24($sp) # restore return address
addiu $sp, $sp, 32 # restore stack pointer
jr $ra
print_num:
addiu $sp, $sp, -32
sw $fp, 16($sp)
sw $s0, 12($sp)
addiu $fp, $sp, 28
move $s0, $a0 # store argument in temp variable
li $v0, 4
la $a0, TEXT # point to "This number is "
syscall # call print_string
li $v0, 1
move $a0, $s0 # restore argument $a0
syscall # call print_int
li $v0, 4
la $a0, EOL # point to "\n"
syscall # call print_string
lw $s0, 12($sp)
lw $fp, 16($sp)
addiu $sp, $sp, 32
jr $ra # jump to return address