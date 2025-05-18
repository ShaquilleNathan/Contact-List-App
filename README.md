# 📱 React-Native Contact List App

A simple and experimental contact list app built using **React Native** and **Realm DB**. This app allows users to add and delete contact entries (name and phone number). All data is stored locally using Realm.

> ⚠️ **WARNING**:  
> This project is **experimental** and intended for learning purposes. You are encouraged to explore, modify, and improve it further as needed. It is still in **debug mode** and has not been configured for production/release builds.

---

## 🚀 Features

- Add new contact with name and phone number
- View all saved contacts in a scrollable list
- Delete individual contacts
- Persistent local storage using Realm Database

<div align="center">
  <img src="https://i.postimg.cc/rsD0f83F/Whats-App-Image-2025-05-18-at-00-39-14.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/BZz1XKP8/Whats-App-Image-2025-05-18-at-00-39-15.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/3w9k74Hx/Whats-App-Image-2025-05-18-at-00-39-15-1.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/w3KvFDD0/Whats-App-Image-2025-05-18-at-00-39-15-2.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
</div>

---

## 🛠️ Built With

- **React Native** (JavaScript)
- **Realm** as the local database
- **Metro bundler** for development
- Tested on both Android emulator and physical device via USB debugging

---

## 📖 How to Run the App (Step-by-Step)

> Make sure you have **Node.js**, **React Native CLI**, **Android Studio (or Xcode for iOS)** installed beforehand.

---

### ✅ Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### ✅ Step 2: Install Required Dependencies
Run the following command to install all packages listed in ```package.json```:

```bash
npm install
```
Make sure react-native, realm, and other necessary packages are installed properly.

Example key dependencies:
```bash
npm install realm react-native-uuid
```
For iOS users (Mac), don't forget:
```bash
cd ios && pod install && cd ..
```

### ✅ Step 3: Start Metro Bundler
Run this command in the root folder:
```bash
npx react-native start
```
This will start the Metro Bundler, which is responsible for serving your app code to the emulator/device.

### ✅ Step 4: Run the App on Emulator or Device
For Android:
Make sure your emulator is running, or your device is connected via USB (with USB debugging enabled), then run:

```bash
npx react-native run-android
```
For iOS (on macOS only):
```bash
npx react-native run-ios
```

### ✅ Optional: Creating New Project (for fresh setup)
If you're starting from scratch, you can initialize a new project with this command:
```bash
npx react-native@0.68.5 init (your project name) --version (your react-native version)
```
Then follow Steps 2–4 above.

---

### 💡 Development Notes
- This app uses Realm for data persistence. Make sure your installed Realm version is compatible with your React Native version.

- The app is currently in debug mode, and it hasn’t been optimized for production builds or release APKs.

- State management is kept simple using React hooks (useState, useEffect).

- Data schema is defined in a separate ContactSchema.js file under /realm.


