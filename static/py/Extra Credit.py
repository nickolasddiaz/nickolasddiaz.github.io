import tkinter
import tkinter.messagebox


class MyGUI:
    def __init__(self):
        self._main_window = tkinter.Tk()
        self._main_window.title('Pizza Shop')

        self._size_label = tkinter.Label(text='Size')
        self._size_label.grid(row=0, column=1, sticky=tkinter.NSEW)
        self._size_var = tkinter.IntVar()
        self._size1 = tkinter.Radiobutton(text="Small Pizza $10", variable=self._size_var, value=10, command=self.submit_callback)
        self._size2 = tkinter.Radiobutton(text="Medium Pizza $11.5", variable=self._size_var, value=11.5, command=self.submit_callback)
        self._size3 = tkinter.Radiobutton(text="Large Pizza $13", variable=self._size_var, value=13, command=self.submit_callback)
        self._size1.grid(row=1, column=0, sticky=tkinter.W)
        self._size2.grid(row=1, column=1, sticky=tkinter.W)
        self._size3.grid(row=1, column=2, sticky=tkinter.W)
        self._size_var.set(10)

        self._crust_label = tkinter.Label(text='Crust')
        self._crust_label.grid(row=2, column=1, sticky=tkinter.NSEW)
        self._crust_var = tkinter.IntVar()
        self._crust1 = tkinter.Radiobutton(text="Thin Crust -$1", variable=self._crust_var, value=-1, command=self.submit_callback)
        self._crust2 = tkinter.Radiobutton(text="Regular Crust", variable=self._crust_var, value=0, command=self.submit_callback)
        self._crust3 = tkinter.Radiobutton(text="Deep Fish +$1", variable=self._crust_var, value=1, command=self.submit_callback)
        self._crust1.grid(row=3, column=0, sticky=tkinter.NSEW)
        self._crust2.grid(row=3, column=1, sticky=tkinter.NSEW)
        self._crust3.grid(row=3, column=2, sticky=tkinter.NSEW)
        self._crust_var.set(0)

        self.sauce = tkinter.StringVar()
        self._sauce_label = tkinter.Label(text='Sauce')
        self._sauce_label.grid(row=4, column=1, sticky=tkinter.NSEW)
        self._sauce = tkinter.Listbox(self._main_window, width=15, height=3)
        self._sauce.insert(0, "Regular")
        self._sauce.insert(1, "BBQ")
        self._sauce.insert(2, "Alfredo")
        self._sauce.grid(row=5, column=1, sticky=tkinter.NSEW)
        self._sauce.configure(justify=tkinter.CENTER)
        self._sauce.bind('<<ListboxSelect>>',lambda event: self.sauce.set(self._sauce.get(self._sauce.curselection())))
        self._sauce.selection_set(0)

        self._topping_label = tkinter.Label(text='Toppings')
        self._topping_label.grid(row=6, column=1, sticky=tkinter.NSEW)
        self._topping_var1 = tkinter.IntVar()
        self._topping_var2 = tkinter.IntVar()
        self._topping_var3 = tkinter.IntVar()
        self._topping_var1.set(0)
        self._topping_var2.set(0)
        self._topping_var3.set(0)
        self._topping1 = tkinter.Checkbutton(text="Pepperoni $.5", variable=self._topping_var1, command=self.submit_callback)
        self._topping2 = tkinter.Checkbutton(text="Olives $.5", variable=self._topping_var2, command=self.submit_callback)
        self._topping3 = tkinter.Checkbutton(text="Mushroom $.5", variable=self._topping_var3, command=self.submit_callback)
        self._topping1.grid(row=7, column=0, sticky=tkinter.NSEW)
        self._topping2.grid(row=7, column=1, sticky=tkinter.NSEW)
        self._topping3.grid(row=7, column=2, sticky=tkinter.NSEW)

        self._Customer_label = tkinter.Label(text='Order Name')
        self._Customer_label.grid(row=8, column=0, sticky=tkinter.NSEW, padx=10, pady=10)

        self._Amount_label = tkinter.Label(text='Amount of Pizzas')
        self._Amount_label.grid(row=8, column=2, sticky=tkinter.NSEW, padx=10, pady=10)

        self.Customer = tkinter.Entry()
        self.Customer.grid(row=9, column=0, sticky=tkinter.NSEW)
        self.CustomerAmount = tkinter.Entry()
        self.CustomerAmount.grid(row=9, column=0, sticky=tkinter.NSEW)

        self._value2 = tkinter.StringVar()
        self._value2.set("1 * $10 pizza for")
        self._my_label2 = tkinter.Label(self._main_window, textvariable=self._value2)
        self._my_label2.grid(row=9, column=1, sticky=tkinter.NSEW, padx=10, pady=10)

        self.Amount = tkinter.Entry()
        self.Amount.grid(row=9, column=2, sticky=tkinter.NSEW)
        self.entryAmount = tkinter.Entry()
        self.entryAmount.grid(row=9, column=2, sticky=tkinter.NSEW)

        self._submit_label = tkinter.Label(text='Press to order')
        self._submit_label.grid(row=10, column=0, sticky=tkinter.NSEW, padx=10, pady=10)
        self._submit_button = tkinter.Button(self._main_window, text="Submit", command=self.submit_order)
        self._submit_button.grid(row=10, column=1, sticky=tkinter.NSEW, padx=10, pady=10)
        self._value = tkinter.StringVar()
        self._value = tkinter.StringVar()
        self._value.set("Amount $10")
        self._my_label = tkinter.Label(self._main_window, textvariable=self._value)
        self._my_label.grid(row=10, column=2, sticky=tkinter.NSEW, padx=10, pady=10)


        self._main_window.mainloop()

    def submit_order(self):
        try:
            amount = round(abs(int(self.entryAmount.get())))
        except:
            amount = 1
        if not amount:
            amount = 1
        name = self.CustomerAmount.get()
        if name == "":
            tkinter.messagebox.showwarning(title="Empty Name", message="Enter your name for your oder please")
            return

        toppings = ""
        if self._topping_var1.get() == 1:
            toppings += " pepperoni"
        if self._topping_var2.get() == 1:
            toppings += " olives"
        if self._topping_var3.get() == 1:
            toppings += " mushroom"
        if toppings == "":
            toppings = "no"

        crust = self._crust_var.get()
        crusts = ""
        if crust == -1:
            crusts = "thin"
        elif crust == 0:
            crusts = "regular"
        else:
            crusts = "deep dish"
        sizes = ""
        size = self._size_var.get()
        if(size == 10):
            sizes = "small"
        elif(size == 11.5):
            sizes ="medium"
        else:
            sizes == "Large"

        sauce = self.sauce.get()
        tkinter.messagebox.showinfo(title=f"order for {name}", message=f"Thank you for you order of {amount} {crusts} {sizes} pizzas with {sauce} sauce and {toppings} toppings")
    def submit_callback(self):
        try:
            amount = round(abs(int(self.entryAmount.get())))
        except:
            amount = 1
        if not amount:
            amount = 1
        name = self.CustomerAmount.get()
        size = self._size_var.get()
        crust = self._crust_var.get()
        toppings = 0
        if self._topping_var1.get() == 1:
            toppings += .5
        if self._topping_var2.get() == 1:
            toppings += .5
        if self._topping_var3.get() == 1:
            toppings += .5
        total = size + crust + toppings
        self._value.set(f"Amount ${total * amount}")
        self._value2.set(f"{amount} * ${total} pizzas for {name}")

my_gui = MyGUI()
