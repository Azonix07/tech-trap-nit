# Tech Trap NIT - Escape Room Event Website

A synchronized, real-time escape room web application for college events with 5 rooms, 10-minute timers, and coding challenges.

## 🎯 Features

- **5 Escape Rooms** with coding questions (5 questions per room)
- **Synchronized Timer** - All devices run at the same time (10 minutes per room)
- **Admin Dashboard** - Control event start/stop and monitor participants
- **Real-time Updates** - WebSocket-based synchronization across all devices
- **Local Network** - Runs on local server for data protection
- **Secure Admin Access** - Password-protected admin panel

## 📋 Prerequisites

Before running this application, you need to install:

1. **Node.js** (v14 or higher) - Download from [nodejs.org](https://nodejs.org/)
2. **npm** (comes with Node.js)

## 🚀 Installation & Setup

### Step 1: Install Node.js

1. Download Node.js from https://nodejs.org/
2. Run the installer and follow the instructions
3. Verify installation by opening a terminal and running:
   ```
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This will install Express and Socket.io.

### Step 3: Start the Server

Run the following command:

```bash
npm start
```

or

```bash
node server.js
```

You should see:
```
===========================================
Tech Trap NIT Escape Room Server
===========================================
Server running on port 3000
Participant URL: http://localhost:3000
Admin URL: http://localhost:3000/admin
Admin Password: admin123
===========================================
```

## 🌐 Accessing the Application

### For Participants (on local network):

1. Find your computer's IP address:
   - Windows: Open Command Prompt and run `ipconfig`
   - Look for "IPv4 Address" (e.g., 192.168.1.100)

2. Participants can access from any device on the same network:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

### For Admin:

1. Open a browser and go to:
   ```
   http://localhost:3000/admin
   ```
   or
   ```
   http://YOUR_IP_ADDRESS:3000/admin
   ```

2. Enter the admin password: **admin123**

## 🎮 How to Use

### Admin Steps:

1. Open the admin dashboard at `http://localhost:3000/admin`
2. Login with password: `admin123`
3. Wait for participants to join
4. Click **"▶ Start Event"** when ready
5. Monitor participants' progress in real-time
6. The event will automatically progress through all 5 rooms (10 minutes each)
7. Use **"⏹ Stop Event"** to end early if needed
8. Use **"🔄 Reset Event"** to start over

### Participant Steps:

1. Open `http://YOUR_IP_ADDRESS:3000` on any device
2. Enter your name and email
3. Click **"Join Event"**
4. Wait for the admin to start the event
5. Answer the 5 coding questions in each room
6. Progress automatically to the next room when time is up
7. Complete all 5 rooms to finish the event

## ⏱️ Event Flow

- **Total Duration**: 50 minutes (5 rooms × 10 minutes each)
- **Room 1**: Starts when admin clicks "Start Event"
- **Room 2-5**: Automatically start after previous room's 10 minutes
- **Synchronization**: All participants see the same timer and move to rooms together

## 🔐 Security

- Admin panel is password-protected (default: `admin123`)
- All data is stored locally on the server
- No external database required
- Change the admin password in `server.js` (line 13)

## 📝 Coding Questions

The application includes 25 coding questions across 5 rooms covering:
- Python basics
- JavaScript fundamentals
- Data structures
- Web development (HTML, CSS)
- Algorithms and complexity
- Git and version control
- Databases (SQL, NoSQL)
- APIs and HTTP methods

Questions can be modified in `public/questions.js`

## 🛠️ Customization

### Change Room Duration:
Edit `server.js` line 18:
```javascript
roomDuration: 600000, // 10 minutes in milliseconds (600000 ms = 10 min)
```

### Change Admin Password:
Edit `server.js` line 13:
```javascript
const ADMIN_PASSWORD = 'your_new_password';
```

### Change Number of Rooms:
Edit `server.js` line 17 and add/remove rooms in `public/questions.js`

### Add/Edit Questions:
Edit `public/questions.js` and modify the `codingQuestions` object

## 📁 Project Structure

```
tech-trap-nit/
├── server.js              # Node.js server with WebSocket
├── package.json           # Project dependencies
├── README.md             # This file
└── public/
    ├── index.html        # Participant interface
    ├── admin.html        # Admin dashboard
    └── questions.js      # Coding questions
```

## 🐛 Troubleshooting

### Server won't start:
- Make sure Node.js is installed: `node --version`
- Run `npm install` to install dependencies
- Check if port 3000 is already in use

### Participants can't connect:
- Make sure all devices are on the same network
- Check your firewall settings
- Verify the IP address is correct

### Timer not syncing:
- Refresh the page
- Check internet/network connection
- Make sure the server is running

## 📄 License

ISC

## 👨‍💻 Author

Azonix07

---

**Note**: Make sure to change the admin password before running the event!
