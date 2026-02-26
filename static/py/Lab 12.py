# Lab #12 by Nickolas Diaz
import tkinter
import tkinter.messagebox


class MyGUI:
    def __init__(self):
        self._main_window = tkinter.Tk()
        self._main_window.title('Get The Test Average')


        self._frame1 = tkinter.Frame(self._main_window)
        self._frame1.pack(padx=5, pady=5, ipadx=5, ipady=5)
        self._frame2 = tkinter.Frame(self._main_window)
        self._frame2.pack(padx=5, pady=5, ipadx=5, ipady=5)
        self._frame3 = tkinter.Frame(self._main_window)
        self._frame3.pack(padx=5, pady=5, ipadx=5, ipady=5)

        self._label1 = tkinter.Label(self._frame1, text='Score for test 1')
        self._label1.pack(side='left')
        self.entry1 = tkinter.Entry(self._frame1)
        self.entry1.pack(side='left')

        self._label2 = tkinter.Label(self._frame2, text='Score for test 2')
        self._label2.pack(side='left')
        self.entry2 = tkinter.Entry(self._frame2)
        self.entry2.pack(side='left')

        self._label3 = tkinter.Label(self._frame3, text='Score for test 3')
        self._label3.pack(side='left')
        self.entry3 = tkinter.Entry(self._frame3)
        self.entry3.pack(side='left')

        self._value = tkinter.StringVar()
        self._my_label = tkinter.Label(self._main_window, textvariable=self._value)
        self._my_label.pack()

        self._submit_button = tkinter.Button(self._main_window, text="Submit", command=self.submit_callback)
        self._submit_button.pack()

        self._main_window.mainloop()


    def submit_callback(self):
        try:
            text = self.entry1.get()
            text2 = self.entry2.get()
            text3 = self.entry2.get()
            calc = round((int(text) + int(text2) + int(text3)) / 3 , 2)
            self._value.set(f'{calc}')
        except ValueError:
            tkinter.messagebox.showerror("ValueError","Value should be an interger")
        except:
            tkinter.messagebox.showerror("Unknown Error")


my_gui = MyGUI()
