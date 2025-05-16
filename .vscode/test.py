import tkinter as tk
from tkinter import filedialog, messagebox
import itertools
import string
import pyautogui
import threading
import time

class CodeGeneratorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Code Auto Typer to Browser")
        self.root.geometry("600x500")

        self.batch_size = 100
        self.current_codes = []
        self.letters = list(string.ascii_uppercase)
        self.digits = [str(i) for i in range(1, 10)]
        self.typing_active = False
        self.typing_thread = None
        self.code_format = "RI-XXX1-X1X1-1X1X-XXXX"

        pyautogui.FAILSAFE = True

        # UI
        tk.Label(root, text=f"Code format: {self.code_format}").pack(pady=10)
        self.text_area = tk.Text(root, height=15, width=50)
        self.text_area.pack(pady=10)

        tk.Button(root, text="Generate Batch", command=self.generate_batch).pack(pady=5)
        tk.Button(root, text="Save Current Batch", command=self.save_codes).pack(pady=5)
        tk.Button(root, text="Clear Display", command=self.clear_text).pack(pady=5)

        self.auto_button = tk.Button(root, text="🧪 Start Typing Into Browser", command=self.start_typing)
        self.auto_button.pack(pady=20)

        self.stop_button = tk.Button(root, text="🛑 Stop Typing", command=self.stop_typing, state=tk.DISABLED)
        self.stop_button.pack(pady=5)

        self.status_label = tk.Label(root, text="Idle", fg="blue")
        self.status_label.pack(pady=10)

        self.reset_iterator()

    def reset_iterator(self):
        self.code_iterator = itertools.product(
            self.letters, self.letters, self.letters, self.digits,
            self.letters, self.digits, self.letters, self.digits,
            self.digits, self.letters, self.digits, self.letters,
            self.letters, self.letters, self.letters, self.letters
        )

    def generate_batch(self):
        self.current_codes = []
        self.text_area.delete(1.0, tk.END)
        for _ in range(self.batch_size):
            combo = next(self.code_iterator, None)
            if combo is None:
                messagebox.showerror("Error", "Code combinations exhausted!")
                self.reset_iterator()
                return
            code = (f"RI-"
                    f"{combo[0]}{combo[1]}{combo[2]}{combo[3]}-"
                    f"{combo[4]}{combo[5]}{combo[6]}{combo[7]}-"
                    f"{combo[8]}{combo[9]}{combo[10]}{combo[11]}-"
                    f"{combo[12]}{combo[13]}{combo[14]}{combo[15]}")
            self.current_codes.append(code)
            self.text_area.insert(tk.END, code + "\n")

    def save_codes(self):
        if not self.current_codes:
            messagebox.showwarning("No Codes", "Generate a batch first.")
            return
        file_path = filedialog.asksaveasfilename(
            defaultextension=".txt",
            filetypes=[("Text files", "*.txt")]
        )
        if file_path:
            with open(file_path, 'w') as f:
                for code in self.current_codes:
                    f.write(code + "\n")
            messagebox.showinfo("Saved", "Codes saved successfully!")

    def clear_text(self):
        self.text_area.delete(1.0, tk.END)
        self.current_codes = []

    def start_typing(self):
        if not self.current_codes:
            messagebox.showwarning("No Codes", "Generate a batch first.")
            return
        if self.typing_active:
            messagebox.showinfo("Already Typing", "Typing is already in progress.")
            return
        self.typing_active = True
        self.auto_button.config(state=tk.DISABLED)
        self.stop_button.config(state=tk.NORMAL)
        self.status_label.config(text="Starting in 5 seconds...", fg="orange")
        self.typing_thread = threading.Thread(target=self.auto_type_to_browser, daemon=True)
        self.typing_thread.start()

    def stop_typing(self):
        self.typing_active = False
        self.status_label.config(text="Typing stopped", fg="red")
        self.auto_button.config(state=tk.NORMAL)
        self.stop_button.config(state=tk.DISABLED)

    def auto_type_to_browser(self):
        time.sleep(5)
        self.root.after(0, lambda: self.status_label.config(text="Typing...", fg="green"))

        for code in self.current_codes:
            if not self.typing_active:
                break
            pyautogui.typewrite(code)
            pyautogui.press('enter')
            time.sleep(5)
            pyautogui.hotkey('ctrl', 'a')
            pyautogui.press('backspace')

        self.typing_active = False
        self.root.after(0, lambda: self.status_label.config(text="Idle", fg="blue"))
        self.root.after(0, lambda: self.auto_button.config(state=tk.NORMAL))
        self.root.after(0, lambda: self.stop_button.config(state=tk.DISABLED))

if __name__ == "__main__":
    root = tk.Tk()
    app = CodeGeneratorApp(root)
    root.mainloop()
