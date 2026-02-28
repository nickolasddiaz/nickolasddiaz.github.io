;lab13_4.asm
bits 16
org 0x7c00
; Set background and foreground color
mov ah, 0x06 ; Clear / scroll screen up function
xor al, al ; Number of lines by which to scroll up (00h = clear entire window)
xor cx, cx ; Row,column of window's upper left corner
mov dx, 0x184f ; Row,column of window's lower right corner
mov bh, 0x3e ; Background/foreground color.
int 0x10 ; Issue BIOS video services interrupt with function 0x06
mov si, banner
mov ah, 0x0e
loop:
 lodsb ; Load byte at address si to al
 test al, al ; Check if al==0
 jz end ; If al==0, jump to end

 int 0x10 ; Issue a BIOS interrupt 0x10 for video services
 jmp loop ; Repeat
end:
 hlt ; Halt the program until the next interrupt
banner: db " _____ _____ _____ _____ ___ _ _ ___",13,10," / ____|/ ____|/ ____|_ _|__ \| || |__ \",13,10," | | | (___ | | | | ) | || |_ ) |",13,10," | | \___ \| | | | / /|__ _/ /",13,10," | |____ ____) | |____ _| |_ / /_ | |/ /_",13,10," \_____|_____/ \_____|_____|____| |_|____|",13,10,13,10,"CSCI242 Computer Architecture & Organization", 0
times 510 - ($-$$) db 0
dw 0xaa55