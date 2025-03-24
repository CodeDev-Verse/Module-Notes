# **CLI Bootcamp - File Permissions & Ownership**  

---

# **2.1 File Permissions & Ownership**  

## **1. Understanding File Permissions (`ls -l`)**  

### **1.1 Viewing File Permissions**  
- To **see file permissions**, use the `ls -l` command.  

#### **Example:**
```sh
ls -l
```
**Output Example:**
```
-rw-r--r--  1 user user  1234 Mar 20 10:30 example.txt
```

### **1.2 Breakdown of `ls -l` Output**
| Field            | Example Value | Explanation |
|-----------------|--------------|-------------|
| **File Type**    | `-` | `-` (Regular file), `d` (Directory), `l` (Symbolic link) |
| **Permissions**  | `rw-r--r--` | File permissions (Read, Write, Execute) |
| **Links**        | `1` | Number of hard links |
| **Owner**        | `user` | Owner of the file |
| **Group**        | `user` | Group that owns the file |
| **Size**         | `1234` | File size in bytes |
| **Last Modified**| `Mar 20 10:30` | Last modified date & time |
| **Filename**     | `example.txt` | Name of the file |

---

## **2. Modifying Permissions (`chmod`)**  

### **2.1 Understanding Read, Write, Execute**
Permissions are represented as **rwx** (Read, Write, Execute).  
- **Read (r) = 4** → View the contents of a file/directory.  
- **Write (w) = 2** → Modify or delete a file.  
- **Execute (x) = 1** → Run a file as a program/script.  

#### **Example:**
| Permission | Owner | Group | Others |
|------------|--------|--------|--------|
| `rwx------` | Read, Write, Execute | No Access | No Access |
| `rwxr-xr-x` | Read, Write, Execute | Read, Execute | Read, Execute |
| `rw-r--r--` | Read, Write | Read Only | Read Only |

---

### **2.2 Changing Permissions Using `chmod`**  

#### **Grant Execute Permission to the User**
```sh
chmod u+x script.sh
```
- `u` → User  
- `+x` → Add execute permission  
- `script.sh` → Target file  

#### **Grant Read & Write to Group**
```sh
chmod g+rw file.txt
```
- `g` → Group  
- `+rw` → Add read & write permissions  

#### **Remove Write Permission from Others**
```sh
chmod o-w file.txt
```
- `o` → Others  
- `-w` → Remove write permission  

#### **Demo:**
1. Create a file: `touch myscript.sh`.  
2. Check permissions: `ls -l myscript.sh`.  
3. Make it executable: `chmod u+x myscript.sh`.  
4. Verify changes: `ls -l myscript.sh`.  

---

### **2.3 Changing Permissions Using Numeric Mode**  
Permissions can also be changed using a **3-digit number**.

| Permission Set | Binary | Numeric Value |
|---------------|--------|--------------|
| `rwx` | `111` | **7** |
| `rw-` | `110` | **6** |
| `r-x` | `101` | **5** |
| `r--` | `100` | **4** |

**Format:**
```sh
chmod 755 script.sh
```
- `7` (Owner: `rwx`)  
- `5` (Group: `r-x`)  
- `5` (Others: `r-x`)  

#### **Demo:**
1. Check current permissions: `ls -l script.sh`.  
2. Change permissions to `755`: `chmod 755 script.sh`.  
3. Verify changes: `ls -l script.sh`.  

---

## **3. Changing File Ownership (`chown`)**  

### **3.1 Understanding Ownership**
Every file has:  
- An **Owner** (User who created the file).  
- A **Group** (Users with shared permissions).  

#### **Viewing Ownership:**
```sh
ls -l file.txt
```
**Output Example:**
```
-rw-r--r-- 1 alice developers 1234 Mar 20 10:30 file.txt
```
- **Owner:** `alice`
- **Group:** `developers`

---

### **3.2 Changing File Ownership**
**Change the Owner of a File:**
```sh
chown bob file.txt
```
- Transfers ownership to `bob`.

**Change the Owner and Group:**
```sh
chown bob:staff file.txt
```
- Transfers ownership to `bob` and assigns the `staff` group.

---

### **3.3 Changing Group Ownership**
**Change Group Ownership Only:**
```sh
chown :developers file.txt
```
- Changes only the **group** to `developers`.

#### **Demo:**
1. Create a file: `touch example.txt`.  
2. Check ownership: `ls -l example.txt`.  
3. Change ownership: `sudo chown newuser example.txt`.  
4. Verify changes: `ls -l example.txt`.  

---
---
---

# **CLI Bootcamp - Searching for Files & Text**  

---

# **2.2 Searching for Files & Text**  

## **1. Finding Files & Directories (`find`)**  

The `find` command helps locate files and directories based on **name, type, size, modification time, and more**.  

### **1.1 Basic Syntax**
```sh
find /path -name "filename"
```
- `/path` → The directory to search in.  
- `-name` → Search by file name.  
- `"filename"` → Name of the file (use quotes for special characters).  

---

### **1.2 Finding a Specific File**  
Search for a file named `notes.txt` inside `/home/user/`:  
```sh
find /home/user -name "notes.txt"
```
- Searches **recursively** from `/home/user/`.  
- Case-sensitive by default.  

#### **Case-Insensitive Search**  
Use `-iname` for case-insensitive searches:  
```sh
find /home/user -iname "notes.txt"
```
- Matches `notes.txt`, `NOTES.txt`, `Notes.TXT`, etc.  

---

### **1.3 Finding Directories**  
To search for **directories** instead of files, use `-type d`:  
```sh
find /var/log -type d -name "errors"
```
- `-type d` → Search only for **directories** named `"errors"`.  

#### **Example:**
Find all directories named `backup` anywhere in the system:  
```sh
find / -type d -name "backup"
```

---

### **1.4 Finding Files by Extension**  
Find all `.log` files inside `/var/log/`:  
```sh
find /var/log -name "*.log"
```
- Uses `*` (wildcard) to match any `.log` file.  

#### **Example:**
Find all `.sh` (Shell script) files inside `/home/user/`:  
```sh
find /home/user -name "*.sh"
```

---

### **1.5 Finding Files by Size**  
Find files larger than **10MB** inside `/home/user/`:  
```sh
find /home/user -size +10M
```
- `+10M` → Files larger than 10MB.  
- `-10M` → Files smaller than 10MB.  

#### **Example:**
Find files between **100KB and 1MB**:  
```sh
find /home/user -size +100k -size -1M
```

---

### **1.6 Finding Files by Modification Time**  
Find files **modified in the last 7 days**:  
```sh
find /home/user -mtime -7
```
- `-mtime -7` → Modified **less than** 7 days ago.  
- `-mtime +30` → Modified **more than** 30 days ago.  

#### **Example:**
Find files **accessed within the last 2 hours**:  
```sh
find /home/user -amin -120
```

---

### **1.7 Combining Multiple Conditions**  
Find **executable scripts** modified in the last 7 days inside `/home/user/`:  
```sh
find /home/user -name "*.sh" -perm +111 -mtime -7
```
- `-perm +111` → Files with **execute permission**.  
- `-mtime -7` → Modified in the **last 7 days**.  

---

## **2. Searching Within Files (`grep`)**  

The `grep` command is used to **search for text patterns inside files**.

### **2.1 Basic Syntax**
```sh
grep "pattern" filename
```
- `"pattern"` → The text you are searching for.  
- `filename` → The file to search in.  

---

### **2.2 Searching for a Word**  
Find the word `"error"` inside `server.log`:  
```sh
grep "error" server.log
```
- Case-sensitive by default.  

#### **Case-Insensitive Search**
Use `-i` to **ignore case**:  
```sh
grep -i "error" server.log
```
- Matches `"error"`, `"ERROR"`, `"Error"`, etc.  

---

### **2.3 Searching in Multiple Files**  
Find `"password"` in all `.txt` files inside `/home/user/`:  
```sh
grep "password" /home/user/*.txt
```
- Searches in all `.txt` files.  

#### **Example:**
Search for `"ERROR"` in **all `.log` files** in `/var/log/`:  
```sh
grep "ERROR" /var/log/*.log
```

---

### **2.4 Searching Recursively (`-r`)**  
Find `"failed login"` in **all files** under `/var/log/`:  
```sh
grep -r "failed login" /var/log/
```
- `-r` → Recursively search in all subdirectories.  

---

### **2.5 Showing Line Numbers (`-n`)**  
Find `"timeout"` inside `server.log` and display line numbers:  
```sh
grep -n "timeout" server.log
```
**Output Example:**
```
23: Connection timeout error
89: Request timeout after 30s
```
- Shows matching lines with **line numbers**.  

---

### **2.6 Showing Only Matching Files (`-l`)**  
Find which `.log` files **contain** `"error"` in `/var/log/`:  
```sh
grep -l "error" /var/log/*.log
```
- **Only prints file names**, not matching lines.  

---

### **2.7 Searching for Whole Words (`-w`)**  
Find `"fail"` but not `"failed"` or `"failure"`:  
```sh
grep -w "fail" server.log
```

#### **Example:**
Find **only** `"root"` (not `"rooted"` or `"roots"`) in `/etc/passwd`:  
```sh
grep -w "root" /etc/passwd
```

---

### **2.8 Using Regular Expressions (`-E`)**  
Find `"error"` or `"failed"` inside `server.log`:  
```sh
grep -E "error|failed" server.log
```
- `|` → OR operator in regex.  

---

### **2.9 Searching for Inverted Matches (`-v`)**  
Find all **lines that do NOT contain** `"error"` in `server.log`:  
```sh
grep -v "error" server.log
```

---
---
---

# **CLI Bootcamp - Managing Processes**  

# **2.3 Managing Processes**  

## **1. Listing Running Processes (`ps`, `top`, `htop`)**  

A **process** is any running instance of a program. We need to monitor and control them using CLI commands.

### **1.1 Listing Processes with `ps`**  
The `ps` command displays currently running processes.

#### **Basic Syntax:**  
```sh
ps aux
```
- `a` → Show processes from all users.  
- `u` → Display user-related details.  
- `x` → Show processes **without** a terminal (like system services).  

#### **Example Output:**  
```
USER       PID  %CPU %MEM    VSZ   RSS TTY   STAT START   TIME COMMAND
root         1  0.0  0.3  16936  5448 ?     Ss   10:00   0:01 /sbin/init
user      2456  1.2  1.0  89532 20456 pts/0 S+   10:15   0:05 python3 script.py
user      3200  0.8  0.6  67890 12345 pts/1 S+   10:17   0:03 node server.js
```
- **PID (Process ID)** → Unique identifier for each process.  
- **%CPU** → CPU usage percentage.  
- **%MEM** → Memory usage percentage.  
- **TTY** → Terminal associated with the process.  
- **STAT (Status)** → Process state (`S` = sleeping, `R` = running).  
- **COMMAND** → The running program.  

---

### **1.2 Real-Time Monitoring with `top`**  
The `top` command continuously updates a list of active processes.  

#### **Run `top`**
```sh
top
```
**Key features:**
- Shows live CPU, memory, and process usage.  
- Press `q` to exit.  

#### **Useful `top` Shortcuts**
- Press `k` → Kill a process by entering its **PID**.  
- Press `r` → Renice (change priority) of a process.  
- Press `Shift + M` → Sort by **memory usage**.  
- Press `Shift + P` → Sort by **CPU usage**.  

---

### **1.3 Interactive Process Management with `htop`**  
`htop` is an enhanced version of `top` with a **user-friendly interface**.

#### **Install `htop` (if not available)**  
```sh
sudo apt install htop   # Debian/Ubuntu
sudo yum install htop   # RHEL/CentOS
brew install htop       # macOS
```

#### **Run `htop`**
```sh
htop
```
- **Arrow keys** to navigate.  
- **F9** → Kill a process.  
- **F7/F8** → Adjust priority (renice).  

---

## **2. Killing Processes (`kill`, `pkill`)**  

### **2.1 Killing a Process by PID (`kill`)**  
To terminate a process, use its **PID (Process ID)**.

#### **Find the process**
```sh
ps aux | grep python
```
Example Output:
```
user      2456  1.2  1.0  89532 20456 pts/0 S+   10:15   0:05 python3 script.py
```

#### **Kill the process**
```sh
kill 2456
```

If the process **does not stop**, force it with `-9`:  
```sh
kill -9 2456
```

---

### **2.2 Killing a Process by Name (`pkill`)**  
Instead of using **PID**, you can kill a process by name.

#### **Kill all processes matching a name**
```sh
pkill python
```
- Kills all running **Python scripts**.

#### **Force kill a process**
```sh
pkill -9 node
```
- Kills all **Node.js** processes.

---

### **2.3 Killing All Processes from a User**  
If a user has multiple processes running and you want to stop them all:

```sh
pkill -u username
```
- Example:
```sh
pkill -u john
```
- Kills **all processes** owned by `john`.

---

## **3. Background & Foreground Processes (`&`, `fg`, `bg`)**  

### **3.1 Running a Process in the Background (`&`)**  
Normally, when you run a command, the terminal waits for it to finish. To **run it in the background**, use `&`:

```sh
python3 script.py &
```
- `&` → Runs the command **in the background**.  
- The terminal returns **immediately** with a `[PID]`.  

---

### **3.2 Checking Background Jobs (`jobs`)**  
To **list background jobs**, use:  
```sh
jobs
```
Example Output:
```
[1]   Running   python3 script.py &
[2]   Stopped   node server.js
```
- `[1]` → Job number.  
- **Running** → Still executing.  
- **Stopped** → Suspended (paused).  

---

### **3.3 Bringing a Background Job to Foreground (`fg`)**  
To bring **job `[1]`** back to the foreground:  
```sh
fg %1
```
- `%1` → Refers to **Job 1** (from `jobs` list).  

If you have only **one background job**, you can use:  
```sh
fg
```

---

### **3.4 Suspending a Process (`Ctrl + Z`)**  
To temporarily **pause** a running process, press:
```
Ctrl + Z
```
- The process is **stopped** but not **killed**.  
- Use `jobs` to list stopped processes.  

---

### **3.5 Resuming a Suspended Process (`bg`)**  
To continue a **stopped job** in the background:  
```sh
bg %1
```
- `%1` refers to **Job 1**.  

If you only have **one stopped process**, you can simply use:  
```sh
bg
```

---

### **3.6 Running a Command in the Background & Keeping It Running (`nohup`)**  
If you start a background job and want it to **keep running even after logging out**, use `nohup`:

```sh
nohup python3 long_script.py &
```
- `nohup` → Ensures the process continues running **even if you log out**.  
- Output is redirected to `nohup.out` by default.  

---
---
---

# **CLI Bootcamp - Disk Usage & Storage Management**  

---

# **3.1 Disk Usage & Storage**  

## **1. Checking Disk Space (`df -h`)**  

The `df` (Disk Filesystem) command helps us check the **total, used, and available disk space** on our system.

### **1.1 Basic Disk Space Usage**  
```sh
df -h
```
- `-h` → Human-readable format (sizes in MB, GB).  

#### **Example Output:**  
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       100G   40G   60G  40% /
tmpfs           3.9G  1.2M  3.9G   1% /dev/shm
/dev/sdb1       500G  450G   50G  90% /mnt/storage
```
- **Size** → Total disk size.  
- **Used** → Space already used.  
- **Avail** → Free space available.  
- **Use%** → Percentage of disk space used.  
- **Mounted on** → The directory where the disk is attached.  

---

### **1.2 Checking Specific Filesystem Usage**  
To check space usage for a specific partition:  
```sh
df -h /home
```
- Shows disk usage **only for `/home`**.  

---

### **1.3 Checking Inodes Usage**  
Inodes store metadata about files. If you run out of inodes, you **cannot create new files**, even if disk space is available.  
```sh
df -i
```
- Shows **used and available inodes** on all mounted filesystems.  

---

## **2. Checking Directory & File Sizes (`du -sh *`)**  

The `du` (Disk Usage) command helps find the space occupied by **directories and files**.

### **2.1 Checking the Size of a Directory**  
```sh
du -sh /home/user
```
- `-s` → Summary (shows only total size).  
- `-h` → Human-readable format (MB, GB).  

#### **Example Output:**  
```
5.2G    /home/user
```
- `/home/user` is consuming **5.2GB** of storage.  

---

### **2.2 Checking the Size of All Files & Subdirectories**  
```sh
du -sh *
```
#### **Example Output:**  
```
300M    Documents
1.2G    Downloads
500M    Pictures
4.8G    Videos
```
- Shows the size of each **subdirectory** and **file** in the current directory.  

---

### **2.3 Sorting Directories by Size**  
To find the **largest directories**:  
```sh
du -ah /home/user | sort -rh | head -10
```
- `-a` → Shows sizes of **both files and directories**.  
- `sort -rh` → Sorts in **descending** order (largest first).  
- `head -10` → Displays the **top 10 largest directories/files**.  

---

## **3. Finding Large Files (`find / -size +100M`) (15 mins)**  

If disk space is low, **locating large files** helps identify what can be deleted or archived.

### **3.1 Finding Files Larger Than 100MB**  
```sh
find / -type f -size +100M
```
- `/` → Start searching from the **root** directory.  
- `-type f` → Find **only files** (not directories).  
- `-size +100M` → Look for files **larger than 100MB**.  

---

### **3.2 Finding Large Files in a Specific Directory**  
To search in `/var/log/` for files over **500MB**:  
```sh
find /var/log/ -type f -size +500M
```

---

### **3.3 Deleting Large Files (Use with Caution!)**  
Once you identify large files, remove them if **not needed**:  
```sh
rm /path/to/large-file.log
```

To **automatically delete** files over 1GB in `/tmp`:  
```sh
find /tmp -type f -size +1G -delete
```
⚠️ **Warning:** Double-check before using `-delete`!  

---

### **3.4 Finding Large Files and Sorting by Size**  
To find **the top 10 largest files**:  
```sh
find /home -type f -exec du -h {} + | sort -rh | head -10
```
- `-exec du -h {}` → Get file size.  
- `sort -rh` → Sort by size (largest first).  
- `head -10` → Show **top 10** files.  

---

# **CLI Bootcamp - Network Commands**  

## **Introduction (2-3 mins)**  

**Speaker:**  
*"In this section, we’ll explore essential CLI commands for networking. You’ll learn how to check network connectivity, download files using CLI tools, inspect open ports, and retrieve network interface details. These commands are crucial for troubleshooting network issues and managing system connectivity."*  

---
---
---

# **3.2 Network Commands**  

## **1. Checking Network Connectivity (`ping`)**  

### **1.1 Basic `ping` Command**  
`ping` tests network connectivity by sending ICMP echo requests to a remote server.  

```sh
ping google.com
```
- Sends continuous **packets** to check if `google.com` is reachable.  
- If the website is **online**, you’ll receive responses like this:  

```
64 bytes from 142.250.64.78: icmp_seq=1 ttl=118 time=15.4 ms
64 bytes from 142.250.64.78: icmp_seq=2 ttl=118 time=14.9 ms
```
- `time=14.9 ms` → Response time in milliseconds (lower is better).  

---

### **1.2 Limiting the Number of Ping Requests**  
```sh
ping -c 5 google.com
```
- `-c 5` → Send **only 5 packets** instead of running indefinitely.  

---

### **1.3 Checking if a Host is Down**  
If a server is unreachable, `ping` will return:  
```
Request timed out.
```
- This could indicate **network issues, firewall restrictions, or server downtime**.  

---

## **2. Downloading Files (`wget`, `curl`)**  

### **2.1 Downloading a File with `wget`**  
`wget` fetches files from the internet.  
```sh
wget https://example.com/file.zip
```
- Downloads `file.zip` from the given URL.  

---

### **2.2 Downloading a File with `curl`**  
`curl` is another tool for downloading files.  
```sh
curl -O https://example.com/file.zip
```
- The `-O` flag saves the file with its original name.  

---

### **2.3 Resuming Interrupted Downloads**  
If a download stops midway, resume it with:  
```sh
wget -c https://example.com/file.zip
```
- `-c` → **Continue** downloading from where it left off.  

---

### **2.4 Downloading Files in the Background**  
```sh
wget -b https://example.com/largefile.zip
```
- Runs the download in the **background**.  
- Check progress using:  
  ```sh
  tail -f wget-log
  ```

---

## **3. Checking Open Ports (`netstat`, `ss`)**  

### **3.1 Using `netstat` to List Open Ports**  
```sh
netstat -tulnp
```
- `-t` → Show **TCP** connections.  
- `-u` → Show **UDP** connections.  
- `-l` → Show **listening** ports.  
- `-n` → Display **numeric** addresses instead of hostnames.  
- `-p` → Show the **process ID (PID)** of services using the ports.  

#### **Example Output:**  
```
Proto Recv-Q Send-Q Local Address  Foreign Address  State   PID/Program name
tcp   0      0     0.0.0.0:22      0.0.0.0:*        LISTEN  1234/sshd
tcp   0      0     127.0.0.1:3306  0.0.0.0:*        LISTEN  5678/mysqld
```
- **Port 22** → **SSH** is active.  
- **Port 3306** → **MySQL database** is running.  

---

### **3.2 Using `ss` (Faster Alternative to `netstat`)**  
```sh
ss -tulnp
```
- Works the same way as `netstat`, but **faster and more efficient**.  

---

### **3.3 Checking If a Specific Port is Open**  
```sh
netstat -an | grep :8080
```
- Finds if **port 8080** is open.  

```sh
ss -an | grep :80
```
- Checks if **port 80** (HTTP) is listening.  

---

## **4. Checking Network Interface Details (`ip`, `ifconfig`)**  

### **4.1 Checking All Network Interfaces**  
#### **Using `ip a` (Modern Command)**  
```sh
ip a
```
- Shows **IP addresses**, **network interfaces**, and **status**.  

#### **Example Output:**  
```
1: lo: <LOOPBACK> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
```
- `eth0` → **Active** network interface.  
- `inet 192.168.1.100/24` → **Assigned IP address**.  

---

### **4.2 Checking Network Interfaces with `ifconfig` (Older Command)**  
```sh
ifconfig
```
- Similar to `ip a`, but **deprecated** on some modern systems.  

---

### **4.3 Checking Only IP Addresses**  
```sh
hostname -I
```
- Prints only the **assigned IP addresses**.  

---

### **4.4 Bringing an Interface Up or Down**  
To disable an interface:  
```sh
ip link set eth0 down
```
To re-enable it:  
```sh
ip link set eth0 up
```

---
---
---

# **CLI Bootcamp - User & System Management**  
---
# **3.3 User & System Management**  

## **1. Managing Users**  

### **1.1 Checking Logged-In Users**  
#### **Who Am I? (`whoami`)**  
```sh
whoami
```
- Displays the **current logged-in user**.  

#### **List All Logged-In Users (`who`, `w`)**  
```sh
who
```
- Shows **who is currently logged into the system**.  

```sh
w
```
- Displays **logged-in users along with activity details**.  

#### **Example Output:**  
```
USER     TTY      FROM          LOGIN@   IDLE   JCPU   PCPU WHAT
john     pts/1    192.168.1.5   08:30    1:23   0.12s  0.12s bash
```
- Shows `john` is logged in from `192.168.1.5` using a **bash shell**.  

---

### **1.2 Checking User & Group Information**  
#### **Get User ID (`id`)**  
```sh
id
```
- Displays **User ID (UID), Group ID (GID), and groups** the user belongs to.  

#### **Check a User’s Groups**  
```sh
groups username
```
- Lists all groups the specified user is a member of.  

---

## **2. Switching Users**  

### **2.1 Switching to Another User (`su`)**  
```sh
su username
```
- Switches to another user **without logging out**.  

```sh
su -
```
- Switches to the **root user** with their environment settings.  

### **2.2 Running a Command as Another User (`sudo`)**  
```sh
sudo command
```
- Executes a command with **root privileges**.  

```sh
sudo ls /root
```
- Lists files in the root user’s home directory.  

---

## **3. Creating & Deleting Users**  

### **3.1 Creating a New User (`useradd`)**  
```sh
sudo useradd -m newuser
```
- Creates a new user **with a home directory** (`-m` flag).  

#### **Set Password for New User**  
```sh
sudo passwd newuser
```
- Assigns a password for the new user.  

---

### **3.2 Deleting a User (`userdel`)**  
```sh
sudo userdel -r newuser
```
- Deletes the user and removes their **home directory** (`-r` flag).  

---

## **4. Rebooting & Shutting Down the System**  

### **4.1 Shutting Down the System (`shutdown`)**  
```sh
sudo shutdown -h now
```
- Immediately shuts down the system (`-h` → Halt).  

```sh
sudo shutdown -h +10
```
- Shuts down the system **in 10 minutes**.  

```sh
sudo shutdown -c
```
- Cancels a scheduled shutdown.  

---

### **4.2 Rebooting the System (`reboot`)**  
```sh
sudo reboot
```
- Immediately **restarts** the system.  

```sh
sudo shutdown -r now
```
- Another way to **restart** the system.  

---
---
---
