TodosApp - React Native Expo & Firebase Firestore (CRUD)

Aplikasi To-Do List berbasis mobile yang dibangun menggunakan React Native, Expo, 
dan Firebase Firestore untuk mengimplementasikan fitur CRUD (Create, Read, Update, Delete) 
secara real-time.

📌 Fitur UtamaRead (Tampil Data): 

      -Read(Tampil Data)   : Menampilkan daftar todos secara real-time dari Firebase Firestore yang diurutkan berdasarkan waktu pembuatan terbaru.
      -Create (Tambah Data): Menambahkan item todo baru ke dalam Firestore.
      -Update (Edit Data)  : Mengubah judul atau teks item todo yang dipilih melalui layar detail.
      -Delete (Hapus Data) : Menghapus item todo dari Firestore melalui tombol ikon hapus.
  
🛠️ Teknologi & Pustaka yang Digunakan

      -React Native (v0.76+)
      -Expo Framework
      -Firebase Web SDK (firebase/compat)
      -React Navigation (Stack Navigator)
      -Expo Vector Icons (FontAwesome)
      -React Native Safe Area Context
      
📁 Struktur Direktori Proyek

       Tugass4/
          ├── config/
          │   └── config.js          # Konfigurasi koneksi & inisialisasi Firebase
          ├── Screens/
          │   ├── Home.js            # Tampilan utama (Read, Create, Delete todos)
          │   └── Detail.js          # Tampilan detail/edit (Update todo)
          ├── App.js                 # Navigasi utama (Stack Navigation)
          ├── package.json           # Dependensi proyek
          └── README.md              # Dokumentasi proyek

🚀 Panduan Memulai (Quick Start)

      1. Prasyarat
         Pastikan laptop Anda sudah terinstal:
           -Node.js (LTS)
           -Expo Go (di-install di HP Android/iOS) atau Emulator Android.        
      2. Instalasi Dependensi
         Buka terminal VS Code di folder proyek Tugass4, lalu jalankan perintah berikut:
           # Instalasi pustaka navigasi
           npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler
           # Instalasi Firebase compat SDK
           npm install firebase
           # Instalasi Ikon Expo
           npm install @expo/vector-icons
      3. Konfigurasi Firebase
         Pastikan file config/config.js sudah diisi dengan kunci Firebase milik proyek Anda:
           import firebase from 'firebase/compat/app';
           import 'firebase/compat/firestore';
      
           const firebaseConfig = {
             apiKey: "YOUR_API_KEY",
             authDomain: "YOUR_AUTH_DOMAIN",
             projectId: "YOUR_PROJECT_ID",
             storageBucket: "YOUR_STORAGE_BUCKET",
             messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
             appId: "YOUR_APP_ID"
           };
      
           if (!firebase.apps.length) {
              firebase.initializeApp(firebaseConfig);
           }
      
          export { firebase };
      4. Menjalankan Aplikasi
         Jalankan server pengembangan Expo:
           npx expo start -c
         -Pindai (scan) QR Code yang muncul di terminal menggunakan aplikasi Expo Go di smartphone Anda.
         -Atau tekan w untuk membuka aplikasi di browser web PC.

📷 Antarmuka Aplikasi
<img width="1080" height="2400" alt="hasil1" src="https://github.com/user-attachments/assets/0c27e7d7-d2cd-4ec7-996a-a4608992f148" />
<img width="1080" height="2400" alt="hasil2" src="https://github.com/user-attachments/assets/94dc40da-fb79-432b-bc18-204af7a0484d" />
<img width="1080" height="2400" alt="hasil3" src="https://github.com/user-attachments/assets/848ddc22-4d53-407e-86b1-b1b529933428" />
<img width="1080" height="2400" alt="hasil4" src="https://github.com/user-attachments/assets/dda95dc0-1838-4c77-ad9d-f7d068361e96" />




    
📄 Lisensi & Referensi Tugas
    Dibuat untuk memenuhi Tugas Pemrograman Mobile / React Native.
    Referensi Kode: Based on Expo Snack & Firebase Firestore TodosApp Architecture.
