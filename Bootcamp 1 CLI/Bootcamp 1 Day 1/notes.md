Here's an expanded **4-hour CLI Bootcamp** covering essential topics in great detail:

---

# **CLI Bootcamp (4-Hour Session)**  
A complete hands-on guide to mastering the Command Line Interface (CLI).  

---

## **Hour 1: CLI Basics & File System Navigation**
### **1.1 Understanding CLI**
- What is CLI? Why use it?
- CLI vs. GUI
- Common Shells: Bash, Zsh, Fish, PowerShell
- How the CLI processes commands

### **1.2 Navigating the File System**
- **Checking the current directory:** `pwd`
- **Listing contents of a directory:** `ls`, `ls -l`, `ls -a`, `ls -lh`
- **Changing directories:** `cd dirname`, `cd ..`, `cd /absolute/path`, `cd ~`
- **Tab Autocomplete & Command History:** `Tab`, `history`, `!!`

### **1.3 Managing Files & Directories**
- **Creating files & directories:** `touch filename`, `mkdir dirname`
- **Copying files and directories:** `cp file1 file2`, `cp -r dir1 dir2`
- **Moving & renaming files:** `mv oldname newname`, `mv file1 directory/`
- **Deleting files and directories:** `rm filename`, `rm -r dirname`, `rmdir emptydir`

### **1.4 Viewing & Editing Files**
- **Reading files:** `cat`, `less`, `more`
- **Displaying first/last lines:** `head -n 10 file.txt`, `tail -n 10 file.txt`
- **Counting words, lines, and characters:** `wc -w file.txt`, `wc -l file.txt`
- **Editing files using CLI editors:** `nano`, `vim`, `vi`

---

## **Hour 2: File Permissions, Searching, and Process Management**
### **2.1 File Permissions & Ownership**
- **Understanding file permissions:** `ls -l`
- **Modifying permissions:**  
  - `chmod u+x file` (User can execute)  
  - `chmod 755 script.sh` (rwx for owner, rx for others)  
- **Changing ownership:** `chown user:group file.txt`

### **2.2 Searching for Files & Text**
- **Finding files & directories:**  
  - `find /path -name "file.txt"`  
  - `find /path -type d -name "dirName"`  
- **Searching within files:**  
  - `grep "text" filename`  
  - `grep -i "text" filename` (Case insensitive)  
  - `grep -r "error" /var/log/` (Recursive search)  

### **2.3 Managing Processes**
- **Listing running processes:** `ps aux`, `top`, `htop`
- **Killing processes:** `kill PID`, `pkill process_name`
- **Background & foreground processes:**  
  - Run in the background: `command &`  
  - Bring it to the foreground: `fg`  
  - Suspend process: `Ctrl + Z`, resume with `bg`  

---

## **Hour 3: Disk, Network, & System Monitoring**
### **3.1 Disk Usage & Storage**
- **Checking disk space:** `df -h`
- **Checking directory/file sizes:** `du -sh *`
- **Finding large files:** `find / -size +100M`

### **3.2 Network Commands**
- **Checking network connectivity:** `ping google.com`
- **Downloading files:** `wget URL`, `curl -O URL`
- **Checking open ports:** `netstat -tulnp`, `ss -tulnp`
- **Checking network interface details:** `ip a`, `ifconfig`

### **3.3 User & System Management**
- **Managing users:**  
  - `whoami`, `who`, `w`
  - `id user`, `groups user`
- **Switching users:** `su username`, `sudo command`
- **Creating & deleting users:**  
  - `useradd -m newuser`, `passwd newuser`
  - `userdel -r newuser`
- **Rebooting & shutting down the system:** `shutdown -h now`, `reboot`

---

## **Hour 4: Advanced CLI Techniques & Shell Scripting**
### **4.1 Piping & Redirection**
- **Piping commands:** `command1 | command2`
  - Example: `ls -l | grep "filename"`
- **Redirecting output:**  
  - `>` (overwrite), `>>` (append)  
  - Example: `echo "Hello" > file.txt`  
- **Redirecting errors:** `command 2> error.log`, `command 2>&1`

### **4.2 Environment Variables**
- **Viewing environment variables:** `env`
- **Setting temporary variables:** `export VAR_NAME=value`
- **Using variables in commands:** `$VAR_NAME`
- **Making variables permanent:** Add `export VAR_NAME=value` in `~/.bashrc` or `~/.zshrc`

### **4.3 Basic Shell Scripting**
- **Creating & running a script:**
  - Create a file: `nano script.sh`
  - Add `#!/bin/bash`
  - Write script logic
  - Save & exit
  - Give execute permission: `chmod +x script.sh`
  - Run it: `./script.sh`

- **Basic script examples:**
  - Print "Hello, World!"
  ```sh
  #!/bin/bash
  echo "Hello, World!"
  ```
  - Read user input:
  ```sh
  #!/bin/bash
  echo "Enter your name:"
  read name
  echo "Hello, $name!"
  ```

### **4.4 CLI Customization**
- **Using aliases:**  
  - `alias ll='ls -la'`  
  - `alias cls='clear'`  
- **Making aliases permanent:** Add them to `~/.bashrc` or `~/.zshrc`
- **Modifying the command prompt (PS1 variable):**  
  ```sh
  export PS1="\u@\h:\w$ "
  ```

---
---
---
