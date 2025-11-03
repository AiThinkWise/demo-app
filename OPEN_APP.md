# 🚀 Paano i-Open ang App - Step by Step

## EASY METHOD:

### Step 1: Open PowerShell
- Press `Windows Key + X`
- Click **"Windows PowerShell"** o **"Terminal"**

### Step 2: Copy and paste this command:
```powershell
cd "C:\Users\vanje\Desktop\devMode\devMode\Event Discovery & Scoring Automation Assistant\demo-app"
```

### Step 3: Run this command:
```powershell
npm run dev
```

### Step 4: Wait for this output:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: Open Browser
- Press `Ctrl + Click` on `http://localhost:5173` sa terminal, OR
- Manually open browser at pumunta sa: **http://localhost:5173**

---

## Alternative: Double-click Method

1. **Open File Explorer**
2. **Navigate to:** `C:\Users\vanje\Desktop\devMode\devMode\Event Discovery & Scoring Automation Assistant\demo-app`
3. **Double-click:** `start-dev.bat`
4. **Wait** for server to start
5. **Open browser** to `http://localhost:5173`

---

## Important Notes:

- ✅ **Don't close** the PowerShell window (kailangan naka-open para tumakbo ang server)
- ✅ **Keep terminal open** while using the app
- ✅ **Press Ctrl + C** sa terminal to stop the server
- ✅ The app will **automatically refresh** when you change code

---

## Kung Hindi Pa Rin Gumana:

1. **Check if may error sa terminal** - Screenshot mo yung error message
2. **Try different browser** - Chrome, Edge, o Firefox
3. **Check firewall** - Baka blocked ng Windows Firewall
4. **Try different port:**
   ```powershell
   npm run dev -- --port 3000
   ```
   Then access: `http://localhost:3000`

---

**Kung may error, sabihin mo sa akin yung exact error message para ma-troubleshoot natin!**

