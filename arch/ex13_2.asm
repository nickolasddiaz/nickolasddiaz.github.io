;ex13_2.asm
;Student: Nickolas Diaz
bits 16
org 0x7c00
; Set background and foreground color
mov ah, 0x06 ; Clear / scroll screen up function
xor al, al ; Number of lines by which to scroll up (00h = clear entire window)
xor cx, cx ; Row,column of window's upper left corner
mov dx, 0x184f ; Row,column of window's lower right corner
mov bh, 0x51 ; Background/foreground color.
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

banner: db " _   _  _        _           _               ____   _",13,10,"| \ | |(_)  ___ | | __ ___  | |  __ _  ___  |  _ \ (_) __ _  ____",13,10,"|  \| || | / __|| |/ // _ \ | | / _` |/ __| | | | || | / _` ||_  /",13,10,"| |\  || || (__ |   <| (_) || || (_| |\__ \ | |_| || || (_| | / /",13,10," |_| \_||_| \___||_|\_\\___/ |_| \__,_||___/ |____/ |_| \__,_|/___|",13,10,13,10,"Nickolas Diaz", 0


times 510 - ($-$$) db 0
dw 0xaa55 