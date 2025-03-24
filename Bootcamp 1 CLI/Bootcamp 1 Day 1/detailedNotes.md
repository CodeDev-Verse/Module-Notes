## **CLI Bootcamp - Understanding CLI**  

## **1.1 What is CLI? Why Use It?**  

### **What is CLI?**  
- CLI (Command Line Interface) is a **text-based interface** where users type commands to interact with the computer.
- Unlike **Graphical User Interfaces (GUI)**, which rely on buttons and icons, CLI requires users to type commands into a terminal.

### **Why Use CLI?**  
1. **Efficiency & Speed**  
   - CLI operations are often **faster** than clicking through GUI menus.  
   - Example: Renaming multiple files using `mv file1.txt file2.txt` is **much quicker** than manually renaming them in a GUI.

2. **Automation & Scripting**  
   - You can automate repetitive tasks with **shell scripts**.  
   - Example: A script that backs up files every day instead of manually copying them.

3. **Remote Access & Server Management**  
   - Servers often **do not have a GUI**, so CLI is the only way to interact with them.  
   - Example: Connecting to a remote server using `ssh user@server-ip`.

4. **More Control & Customization**  
   - CLI allows **fine-grained control** over system settings that are **not accessible via GUI**.  
   - Example: Editing system files with `nano /etc/hosts`.

5. **Lower System Resource Usage**  
   - CLI consumes far **less memory & CPU** than a GUI.  
   - This is important when working on **older machines or remote servers**.

**Demo:**  
Run `echo "Hello, World!"` in the terminal and explain how the CLI executes it.  

---

## **1.2 CLI vs. GUI**  

| Feature          | CLI                           | GUI                           |
|-----------------|-----------------------------|------------------------------|
| **Ease of Use** | Requires learning commands  | User-friendly, easy to use  |
| **Speed**       | Fast for repetitive tasks   | Slower for complex tasks    |
| **Automation**  | Easily scriptable           | Limited automation          |
| **System Control** | Full control over the system | Limited settings available |
| **Resources**   | Lightweight, uses fewer resources | Uses more RAM & CPU |

### **When to Use CLI vs. GUI?**  
- **Use CLI when:**  
  - Automating tasks  
  - Working with servers  
  - Performing advanced system configurations  

- **Use GUI when:**  
  - Doing graphic-intensive tasks (e.g., Photoshop, video editing)  
  - Browsing the web or managing emails  

**Demo:**  
- Open a file via GUI and then open the same file using `nano filename.txt` to show the difference.  

---

## **1.3 Common Shells: Bash, Zsh, Fish, PowerShell**  

### **What is a Shell?**  
- A **shell** is a program that **interprets your commands** and executes them.  
- Different operating systems use different shells.  

### **Types of Shells**  

1. **Bash (Bourne Again Shell) [Default on Linux/macOS]**  
   - Most widely used  
   - Supports scripting (`.sh` files)  
   - Example command:  
     ```sh
     echo "Hello from Bash"
     ```

2. **Zsh (Z Shell) [Improved Bash]**  
   - Has **auto-suggestions & themes (Oh My Zsh)**  
   - Example command:  
     ```sh
     echo "Welcome to Zsh"
     ```

3. **Fish (Friendly Interactive Shell)**  
   - User-friendly, syntax highlighting, and auto-suggestions  
   - Example:  
     ```sh
     echo "Fish is cool!"
     ```

4. **PowerShell (Windows)**  
   - Used in Windows for system management  
   - Object-oriented (unlike Bash which works with text)  
   - Example command:  
     ```powershell
     Write-Output "Hello from PowerShell"
     ```

**Demo:**  
- Run `echo "This is Bash"` in Bash.  
- Run `Write-Output "This is PowerShell"` in PowerShell.  

---

## **1.4 How the CLI Processes Commands**  

### **Step-by-Step Execution of a CLI Command**  

1. **User Types a Command**  
   - Example: `ls -l`  

2. **Shell Interprets the Command**  
   - The shell **parses the command** and identifies `ls` as a **program** and `-l` as an **option**.

3. **The System Finds the Command**  
   - The shell looks for `ls` in **$PATH directories**.  
   - Run `echo $PATH` to see these directories.

4. **The Command is Executed**  
   - The program runs and displays output in the terminal.

5. **Exit Status is Returned**  
   - Run `echo $?` to see the last command's exit status (`0` means success, non-zero means failure).  

### **Example Walkthrough: `ls -l`**  
```sh
ls -l
```
- `ls`: List directory contents  
- `-l`: Long format (detailed file info)  

### **Command Execution Order**  
CLI checks in the following order when a command is entered:  
1. **Built-in shell commands** (e.g., `cd`, `echo`)  
2. **Aliases** (User-defined shortcuts)  
3. **External commands in `$PATH`** (e.g., `/bin/ls`)  

**Demo:**  
1. Run `which ls` to check where `ls` is located.  
2. Run `alias ll='ls -la'`, then `ll` to show alias usage.  

---
---
---

# **CLI Bootcamp - Navigating the File System**  

---

# **1.2 Navigating the File System**  

## **1. Checking the Current Directory: `pwd`**  

### **What is `pwd`?**  
- `pwd` stands for **Print Working Directory**.  
- It displays the **absolute path** of your current location in the filesystem.  
- Useful when navigating deeply nested directories to check **where you are**.  

### **Example Usage**  
```sh
pwd
```
**Output Example:**  
```sh
/home/user/Documents
```
**Explanation:**  
- This tells you that you're inside the `Documents` folder, which is inside `user`, which is inside `home`.  

### **Demo**  
1. Open a terminal and type `pwd`.  
2. Navigate to another directory using `cd` (explained later) and check `pwd` again.  

---

## **2. Listing Directory Contents: `ls`**  

### **Basic `ls` Command**  
- The `ls` command **lists files and folders** in the current directory.  
- Example usage:  
  ```sh
  ls
  ```
- **Default behavior**: Lists contents **without details**.  

### **Common `ls` Options**  

| Command | Description |
|---------|-------------|
| `ls -l` | Long format (file details: size, owner, permissions, etc.) |
| `ls -a` | Show hidden files (files starting with `.`) |
| `ls -lh` | Human-readable file sizes (e.g., KB, MB instead of bytes) |
| `ls -la` | Combination of `-l` and `-a` (detailed list including hidden files) |

### **Example Usages**  

1. **List files with details**  
   ```sh
   ls -l
   ```
   **Output Example:**  
   ```sh
   -rw-r--r--  1 user user 1024 Mar 21 10:30 file.txt
   drwxr-xr-x  2 user user 4096 Mar 20 15:00 folder
   ```
   - `d` at the start = Directory  
   - `rw-r--r--` = File permissions  
   - `user user` = Owner & group  
   - `1024` = File size in bytes  

2. **List all files including hidden ones**  
   ```sh
   ls -a
   ```
   **Output Example:**  
   ```sh
   .  ..  .bashrc  .git  Documents  Downloads
   ```
   - `.` represents the **current directory**.  
   - `..` represents the **parent directory**.  
   - Hidden files (like `.bashrc`) start with a `.`  

3. **List files in human-readable format**  
   ```sh
   ls -lh
   ```
   **Output Example:**  
   ```sh
   -rw-r--r--  1 user user 1K Mar 21 10:30 file.txt
   drwxr-xr-x  2 user user 4.0K Mar 20 15:00 folder
   ```
   - File sizes are **easier to read** (e.g., `1K` instead of `1024`).  

### **Demo**
1. Run `ls` in home directory.  
2. Run `ls -a` to show hidden files.  
3. Run `ls -lh` and explain the output.  

---

## **3. Changing Directories: `cd`**  

### **Basic `cd` Command**  
- `cd` (**Change Directory**) allows you to move between directories.  
- Example:  
  ```sh
  cd Documents
  ```
- Moves from **current directory** to the `Documents` directory.  

### **Common `cd` Commands**  

| Command | Description |
|---------|-------------|
| `cd dirname` | Move into a directory (`dirname`) |
| `cd ..` | Move up **one level** (parent directory) |
| `cd ../..` | Move up **two levels** |
| `cd /absolute/path` | Move to an **absolute path** |
| `cd ~` | Go to the **home directory** |
| `cd -` | Switch back to the **previous directory** |

### **Example Usages**  

1. **Move into a directory**  
   ```sh
   cd Downloads
   ```
   - Moves into the `Downloads` folder.  

2. **Move up one level**  
   ```sh
   cd ..
   ```
   - If you are in `/home/user/Downloads`, this takes you to `/home/user`.  

3. **Move to an absolute path**  
   ```sh
   cd /etc
   ```
   - Takes you directly to `/etc`, regardless of your current location.  

4. **Go back to the previous directory**  
   ```sh
   cd -
   ```
   - If you moved from `/home/user` to `/etc`, this brings you **back** to `/home/user`.  

5. **Go to home directory**  
   ```sh
   cd ~
   ```
   - Shortcut to return to **home directory**.  

### **Demo**
1. Run `cd Downloads` → Run `pwd` to confirm location.  
2. Run `cd ..` → Run `pwd` to show it moved up.  
3. Run `cd /etc` → Show absolute path navigation.  
4. Run `cd -` → Demonstrate switching between directories.  

---

## **4. Tab Autocomplete & Command History**  

### **Tab Autocomplete (`Tab` Key)**  
- Saves time by **autocompleting commands and file names**.  
- Example:  
  ```sh
  cd Doc<TAB>
  ```
  - Automatically completes to `cd Documents` (if it exists).  
- If multiple matches exist, press `Tab` twice to see options.  

### **Demo**
1. Type `cd Doc<TAB>` and show auto-completion.  
2. Type `ls -l<TAB><TAB>` to show multiple options.  

---

### **Command History (`history`, `!!`, and `!n`)**  

#### **`history` Command**
- Displays **previously executed commands**.  
- Example:  
  ```sh
  history
  ```
  - Outputs a numbered list of past commands.  

#### **Repeat Last Command: `!!`**
- Runs **the last executed command**.  
- Example:  
  ```sh
  !!  
  ```
  - If the last command was `ls -l`, it will execute `ls -l` again.  

#### **Run a Specific Command from History: `!n`**
- Runs command **number `n`** from history.  
- Example:  
  ```sh
  !25
  ```
  - Runs the **25th command** from history.  

### **Demo**
1. Run `history` and show command list.  
2. Run `!!` to repeat the last command.  
3. Run `!5` to execute the **5th command** from history.  

---
---
---

# **CLI Bootcamp - Managing Files & Directories**  

---

# **1.3 Managing Files & Directories**  

## **1. Creating Files & Directories**  

### **1.1 Creating Files: `touch`**  
- The `touch` command **creates an empty file** if it does not exist.  
- It can also **update the timestamp** of an existing file.  

#### **Basic Usage:**  
```sh
touch filename.txt
```
- Creates an empty file named `filename.txt`.  

#### **Creating Multiple Files:**  
```sh
touch file1.txt file2.txt file3.txt
```
- Creates three empty text files at once.  

#### **Updating File Timestamps:**  
```sh
touch existingfile.txt
```
- Updates the **last modified time** of `existingfile.txt`.  

#### **Demo:**  
1. Run `touch myfile.txt` and check with `ls -l`.  
2. Modify the file using `echo "Hello" > myfile.txt`.  
3. Run `touch myfile.txt` again and check the updated timestamp with `ls -l`.  

---

### **1.2 Creating Directories: `mkdir`**  
- The `mkdir` command creates **new directories (folders)**.  

#### **Basic Usage:**  
```sh
mkdir myfolder
```
- Creates a directory named `myfolder`.  

#### **Creating Multiple Directories:**  
```sh
mkdir dir1 dir2 dir3
```
- Creates three directories at once.  

#### **Creating Nested Directories (`-p` flag):**  
```sh
mkdir -p parent/child/grandchild
```
- Creates **parent, child, and grandchild directories** in one command.  

#### **Demo:**  
1. Run `mkdir testfolder` and check with `ls -l`.  
2. Run `mkdir -p projects/javascript/files` and verify with `tree projects`.  

---

## **2. Copying Files & Directories**  

### **2.1 Copying Files: `cp`**  
- The `cp` command **copies files** from one location to another.  

#### **Basic Usage:**  
```sh
cp source.txt destination.txt
```
- Copies `source.txt` to `destination.txt`.  

#### **Copying to a Directory:**  
```sh
cp file.txt myfolder/
```
- Copies `file.txt` **into** `myfolder/`.  

#### **Copying Multiple Files:**  
```sh
cp file1.txt file2.txt myfolder/
```
- Copies `file1.txt` and `file2.txt` into `myfolder/`.  

---

### **2.2 Copying Directories: `cp -r`**  
- To copy a **directory**, use the `-r` (recursive) flag.  

#### **Basic Usage:**  
```sh
cp -r sourcedir destinationdir
```
- Copies `sourcedir` and all its contents to `destinationdir`.  

#### **Demo:**  
1. Create a file using `touch file1.txt`.  
2. Run `cp file1.txt filecopy.txt` and check with `ls -l`.  
3. Create a directory using `mkdir testdir`.  
4. Run `cp -r testdir testdir_copy` and check with `ls -l`.  

---

## **3. Moving & Renaming Files**  

### **3.1 Moving Files: `mv`**  
- The `mv` command moves files from one location to another.  

#### **Basic Usage:**  
```sh
mv file.txt myfolder/
```
- Moves `file.txt` into `myfolder/`.  

#### **Moving Multiple Files:**  
```sh
mv file1.txt file2.txt myfolder/
```
- Moves `file1.txt` and `file2.txt` into `myfolder/`.  

---

### **3.2 Renaming Files**  
- The `mv` command is also used for **renaming files**.  

#### **Renaming a File:**  
```sh
mv oldname.txt newname.txt
```
- Renames `oldname.txt` to `newname.txt`.  

#### **Renaming a Directory:**  
```sh
mv oldfolder newfolder
```
- Renames `oldfolder` to `newfolder`.  

#### **Demo:**  
1. Create a file using `touch testfile.txt`.  
2. Rename it using `mv testfile.txt renamedfile.txt`.  
3. Create a directory using `mkdir olddir`.  
4. Rename it using `mv olddir newdir`.  

---

## **4. Deleting Files & Directories**  

### **4.1 Deleting Files: `rm`**  
- The `rm` command **removes (deletes) files** permanently.  

#### **Basic Usage:**  
```sh
rm myfile.txt
```
- Deletes `myfile.txt`.  

#### **Deleting Multiple Files:**  
```sh
rm file1.txt file2.txt
```
- Deletes `file1.txt` and `file2.txt`.  

---

### **4.2 Deleting Directories**  

#### **Removing Empty Directories: `rmdir`**  
```sh
rmdir emptydir
```
- Deletes `emptydir` (must be empty).  

#### **Removing Non-Empty Directories: `rm -r`**  
```sh
rm -r myfolder
```
- Deletes `myfolder` and **all its contents**.  

#### **Force Deleting Files & Directories (`-f` flag)**  
```sh
rm -rf myfolder
```
- **Forces deletion** of `myfolder` **without confirmation**.  
- **Warning:** Use with caution! This **cannot be undone**.  

#### **Demo:**  
1. Create files using `touch delete1.txt delete2.txt`.  
2. Delete them using `rm delete1.txt delete2.txt`.  
3. Create a directory using `mkdir mydir`.  
4. Try deleting it with `rmdir mydir`.  
5. Create a file inside it using `touch mydir/file.txt`.  
6. Now delete it using `rm -r mydir`.  

---
---
---

# **CLI Bootcamp - Viewing & Editing Files**  

## **1. Viewing Files**  

### **1.1 Reading Files with `cat`**  
- The `cat` command is used to **display the entire content** of a file.  
- Best for **small files** but not ideal for large ones.  

#### **Basic Usage:**  
```sh
cat filename.txt
```
- Displays the content of `filename.txt`.  

#### **Displaying Multiple Files:**  
```sh
cat file1.txt file2.txt
```
- Concatenates and displays the contents of `file1.txt` and `file2.txt`.  

#### **Numbering Lines in Output (`-n` option):**  
```sh
cat -n filename.txt
```
- Displays `filename.txt` with **line numbers**.  

#### **Demo:**  
1. Create a file using `echo "Hello CLI" > test.txt`.  
2. Run `cat test.txt` to view its contents.  
3. Add more lines using `echo "New Line" >> test.txt`.  
4. Run `cat -n test.txt` to see numbered lines.  

---

### **1.2 Viewing Large Files with `less` & `more`**  
- When files are **too large** to fit on the screen, use `less` or `more`.  

#### **Using `less`:**  
```sh
less largefile.txt
```
- Opens `largefile.txt` in a scrollable view.  
- **Navigation:**  
  - `Up` / `Down` arrows → Scroll line by line.  
  - `Spacebar` → Scroll down a page.  
  - `b` → Scroll up a page.  
  - `q` → Exit.  

#### **Using `more`:**  
```sh
more largefile.txt
```
- Similar to `less`, but only scrolls **forward**.  

#### **Demo:**  
1. Download a large file using `curl -O http://example.com/largefile.txt`.  
2. Run `less largefile.txt` and navigate.  
3. Run `more largefile.txt` and observe the difference.  

---

## **2. Displaying First/Last Lines of Files**  

### **2.1 Viewing the First `n` Lines with `head`**  
- The `head` command **displays the first few lines** of a file.  

#### **Basic Usage:**  
```sh
head filename.txt
```
- Shows the first **10 lines** by default.  

#### **Viewing a Specific Number of Lines:**  
```sh
head -n 5 filename.txt
```
- Displays the first **5 lines** of `filename.txt`.  

---

### **2.2 Viewing the Last `n` Lines with `tail`**  
- The `tail` command **displays the last few lines** of a file.  

#### **Basic Usage:**  
```sh
tail filename.txt
```
- Shows the last **10 lines** by default.  

#### **Viewing a Specific Number of Lines:**  
```sh
tail -n 5 filename.txt
```
- Displays the last **5 lines** of `filename.txt`.  

#### **Real-time Monitoring with `tail -f`**  
```sh
tail -f logfile.txt
```
- Continuously **monitors a file for updates** (useful for logs).  

#### **Demo:**  
1. Create a file using `seq 1 20 > numbers.txt`.  
2. Run `head numbers.txt` and `tail numbers.txt`.  
3. Run `tail -f /var/log/syslog` (Linux/macOS) to monitor system logs.  

---

## **3. Counting Words, Lines, and Characters**  

### **3.1 Using `wc` (Word Count)**  
- The `wc` command counts **words, lines, and characters** in a file.  

#### **Counting Lines in a File (`-l` option):**  
```sh
wc -l filename.txt
```
- Displays the **number of lines** in `filename.txt`.  

#### **Counting Words in a File (`-w` option):**  
```sh
wc -w filename.txt
```
- Displays the **number of words** in `filename.txt`.  

#### **Counting Characters in a File (`-c` option):**  
```sh
wc -c filename.txt
```
- Displays the **number of characters (bytes)** in `filename.txt`.  

#### **Demo:**  
1. Create a file using `echo "Hello World, this is a test file." > test.txt`.  
2. Run `wc test.txt` to see the total count of lines, words, and characters.  
3. Try `wc -l test.txt`, `wc -w test.txt`, and `wc -c test.txt`.  

---

## **4. Editing Files using CLI Editors**  

### **4.1 Editing with `nano` (Beginner-Friendly)**  
- `nano` is a simple text editor available on most UNIX-based systems.  

#### **Opening a File in `nano`:**  
```sh
nano filename.txt
```
- Opens `filename.txt` for editing.  

#### **Basic Commands in `nano`**  
- Type text to edit the file.  
- `Ctrl + O` → Save the file.  
- `Ctrl + X` → Exit `nano`.  
- `Ctrl + K` → Cut a line.  
- `Ctrl + U` → Paste a line.  

#### **Demo:**  
1. Run `nano myfile.txt` and type some text.  
2. Save using `Ctrl + O` and exit using `Ctrl + X`.  

---

### **4.2 Editing with `vim` (Advanced Users)**  
- `vim` is a powerful text editor but has a learning curve.  

#### **Opening a File in `vim`:**  
```sh
vim filename.txt
```
- Opens `filename.txt` for editing.  

#### **Basic `vim` Commands:**  
- `i` → Enter **insert mode** (start typing).  
- `Esc` → Exit insert mode.  
- `:w` → Save file.  
- `:q` → Exit vim.  
- `:wq` → Save and exit.  
- `dd` → Delete a line.  

#### **Demo:**  
1. Run `vim myfile.txt`.  
2. Press `i` to enter insert mode and type text.  
3. Press `Esc`, type `:wq`, and press `Enter` to save and exit.  

---
---
---