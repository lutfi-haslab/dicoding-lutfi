Rangkuman Kelas
Sebagai pengingat, silakan baca rangkuman kelas ini dengan saksama.



Rangkuman Pengenalan Back-End
Berikut adalah rangkuman dari modul Pengenalan ke Back-End.


Pengertian Back-End
Back-End merupakan bagian dari aplikasi yang bertanggung jawab pada proses data disimpan, diolah, serta ditransaksikan secara aman.

dos:cf1c1ad8ca2843b92cb460e1bd932e8520221014183225.jpeg

Web Server dan Web Service
Membuat dan menjalankan program agar dapat menentukan logika bisnis sesuai dengan kebutuhan. Untuk membuat sistem aplikasi, setidaknya ada dua hal yang perlu diperhatikan, yaitu Web Server dan Web Service.

dos:96e9fa75efb697e0c214ac23e6cc0c3720221014183225.jpeg



Komunikasi Client-Server
Ini adalah informasi yang terdapat pada request dengan mengandung poin-poin berikut.

dos:67d50293094c6dfff99cce634dfb771220221014183225.jpeg

Respons atau tanggapan yang dikirimkan dari server untuk client juga mengandung informasi. Berikut adalah informasi yang dilampirkan oleh respons.

dos:6dca7a86130afade21ceebd07ad49fc020221014183225.jpeg



REST Web Service
REST atau REpresentational State Transfer adalah salah satu gaya arsitektur yang dapat diadaptasi ketika membangun web service. Ini merupakan sifat-sifat yang menjadi kunci REST API.

Client-Server	Stateless	Cacheable	Layered
Server mampu merespons permintaan dari client, baik itu respons berhasil maupun gagal. Komunikasi client dan server dilakukan melalui protokol HTTP.

REST API tidak boleh menyimpan keadaan (state) apa pun terkait client. Seluruh state harus tetap disimpan di client. Artinya, tidak ada session di REST API. Permintaan yang dilakukan client harus mengandung informasi yang jelas.

Dapat merespons permintaan dengan cepat, sebaiknya REST API menerapkan prinsip cache sehingga setiap permintaan tidak melulu mengambil dari database.

Ketika REST API server memiliki arsitektur yang kompleks, client seharusnya tidak perlu tahu proses server melayaninya.


Rangkuman Dasar-Dasar Node.js untuk Back-End
Berikut adalah rangkuman dari modul Dasar-Dasar Node.js untuk Back-End.


Pengenalan Node.js
Dari dulu hingga kini, browser menjadi tempat satu-satunya yang dapat mengeksekusi kode JavaScript. Jadi, Web Developer perlu mempelajari bahasa pemrograman yang berbeda untuk mengembangkan aplikasi Front-End dan Back-End. Secanggih dan sekuat apa pun JavaScript berkembang, ia hanya akan digunakan di sisi Front-End saja.

Sebenarnya banyak developer yang mencoba membuat teknologi agar JavaScript dapat dijalankan di luar browser. Namun, belum ada yang berhasil. Akhirnya, pada tahun 2009 Ryan Dahl berhasil menciptakan Node.js, teknologi yang diharapkan oleh banyak web developer. Tak disangka, saat ini teknologi yang diciptakannya menuai popularitas tinggi. Node.js banyak digunakan oleh perusahaan besar sekelas Netflix, Uber, Paypal, dan eBay.

Node.js berhasil menjadi JavaScript Runtime yang dapat mengeksekusi kode JavaScript di luar browser.



Menjalankan JavaScript Menggunakan Node.js
Ada dua cara dalam menjalankan kode JavaScript menggunakan Node.js, yakni Node.js REPL dan berkas JavaScript.

Node.js REPL
Node.js memiliki fitur REPL atau Read-Eval-Print Loop. Sesuai namanya, fitur ini berfungsi untuk membaca kode JavaScript, mengevaluasi kode tersebut, kemudian mencetak hasil evaluasinya ke console. Nah, untuk loop, berarti proses tersebut selalu berulang.

Jika Anda mengeksekusi console.log(‘Hello NodeJS REPL’), selain pesan “Hello NodeJS REPL”, nilai undefined juga akan tercetak. Hal tersebut terjadi karena REPL selalu menampilkan nilai evaluasi pada console. Karena method console.log() tidak mengembalikan nilai, teks undefined-lah yang tercetak pada console.

Berkas JavaScript
Cara lain untuk mengeksekusi kode JavaScript menggunakan Node.js adalah melalui berkas berekstensi .js. Caranya mudah, tinggal buat berkas JavaScript pada proyek Node.js, tulis kode JavaScript di berkas tersebut, lalu eksekusi dengan perintah node namafile.js.



Node.js Global Object
Dilansir dari website Node.js, sebenarnya mereka hanya menambahkan beberapa objek saja. Objek tersebut dinamakan “true globals”. Berikut adalah daftarnya.

global: Global namespace. Member apa pun yang ada di dalam object ini dapat diakses pada cakupan global.
process: menyediakan interaksi dengan proses Node.js yang berjalan.
console: menyediakan berbagai fungsionalitas STDIO.
setTimeout, clearTimeout, setInterval, clearInterval: berkaitan dengan waktu.
Ada juga objek yang merupakan “pseudo-globals” atau objek global semu. Objek ini tidak terlihat bila dicetak menggunakan Object.getOwnPropertyName(global) sebab ia bukan member langsung dari objek global, melainkan diturunkan dari cakupan module. Karena pada Node.js semua berkas JavaScript adalah module [3], objek pseudo-globals dapat diakses layaknya objek global. Berikut adalah daftarnya.

module: digunakan untuk sistem modularisasi pada Node.js.
__filename: keyword untuk mendapatkan lokasi berkas JavaScript yang dieksekusi. Keyword ini tidak tersedia pada Node.js REPL.
__dirname: keyword untuk mendapatkan root directory dari berkas JavaScript yang dieksekusi.
require: digunakan untuk mengimpor module JavaScript.


Process Object
Pada Node.js, objek global process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.

Salah satu yang sering digunakan adalah properti process.env. Melalui properti ini, kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung. Contohnya, process.env memiliki properti process.env.PWD yang menyediakan informasi mengenai lokasi di mana proses dijalankan, properti process.env.USER menyimpan informasi nama user pada komputer Anda, dan masih banyak properti lainnya. Anda bisa lihat daftar lengkap properti yang ada pada halaman dokumentasi Node.js mengenai process.env.

Anda juga bisa secara manual menyimpan nilai dalam process.env. Hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin nilai variabel host berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat properti NODE_ENV pada process.env. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV.



Modularization
Makin kompleks program yang dikembangkan, makin kompleks pula kode yang dituliskan. Jika kode aplikasi hanya ditulis dalam satu berkas saja, tentu itu akan menyulitkan kita atau developer lain untuk membaca dan memelihara aplikasi. Idealnya, satu berkas JavaScript hanya memiliki satu tanggung jawab saja. Bila lebih dari satu, itu berarti Anda perlu berkenalan dengan modularization atau modularisasi.

Modularisasi dalam pemrograman merupakan teknik pemisahan kode menjadi modul-modul yang bersifat independen, tetapi bisa saling digunakan untuk membentuk suatu program yang kompleks. Pemisahan kode menjadi modul-modul terpisah inilah yang dapat membuat kode JavaScript lebih mudah dikelola.

Pada Node.js, setiap berkas JavaScript adalah module. Anda bisa membagikan nilai variabel, objek, class, atau apa pun antar module. Untuk melakukannya, Anda perlu mengekspor nilai pada module tersebut.

Untuk mengekspornya, simpanlah nilai tersebut pada properti module.exports.



Node Package Manager
Dalam pengembangan aplikasi saat ini, industri gencar memanfaatkan module atau package luar agar proses pengembangan dapat lebih cepat. Semakin kompleks aplikasi tersebut, semakin banyak pula module/package yang digunakan. Di sinilah kita memerlukan sebuah Package Manager.

Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/. NPM merupakan standard package manager yang disediakan oleh Node.js dan sudah otomatis terpasang ketika memasang Node.js pada komputer kita. NPM dapat dioperasikan melalui CMD atau Terminal, Anda pun sudah mencobanya ketika membuat proyek JavaScript.

Selain untuk membuat proyek JavaScript, NPM dapat digunakan untuk memasang atau menghapus third party module (modul pihak ketiga). Modul yang dipasang melalui NPM akan disimpan pada folder node_modules.

Ada dua tipe pemasangan module melalui NPM: global dan lokal. 

Bila dipasang secara global, module akan bersifat layaknya core module dan dapat digunakan di mana pun. 
Bila dipasang secara lokal, module hanya dapat digunakan pada cakupan proyek Node.js saja.
Namun, saat ini kami sangat menyarankan Anda untuk memasang modul pihak ketiga secara lokal saja. Hindari pemasangan modul secara global karena akan menyebabkan banyak masalah. Sebaiknya gunakan npx bila Anda ingin menjalankan Node.js package di mana pun Anda inginkan.



Events
Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian. Apa maksudnya itu? Mari kita jelajahi lebih dalam lagi.

Dunia nyata penuh dengan kejadian. Alarm berbunyi, ponsel berdering, turun hujan, ataupun kejadian lainnya. Sebagai manusia, kita membuat keputusan, lantas bertindak berdasarkan kejadian yang ada. Ini contohnya.

Ketika berjalan dan tetiba turun hujan, kita bergegas menggunakan payung.
Ketika ponsel berdering, kita bereaksi dengan mengangkat panggilan.
Ketika merasa lapar, kita makan.
Inilah pola yang terjadi di kehidupan nyata, sudah sejak lama kita bertahan hidup seperti itu. Inilah yang dimaksud dengan pola event-driven.

Kita kembali ke dunia komputer. Tradisionalnya, programming dilakukan dengan cara yang imperatif. Agar komputer dapat melakukan sesuatu hal, kita perlu banyak menuliskan instruksi secara runtut beserta langkah-langkahnya. Komputer akan membaca kode dari atas ke bawah sesuai dengan urutan yang kita definisikan.

Dengan pola yang kaku seperti itu, kita akan sulit membangun program yang dapat menangani suatu kejadian. Karena kita saja tidak tahu kapan suatu kejadian akan terjadi, lantas bagaimana cara memberikan instruksi pada komputer? Lalu, bagaimana solusinya? Berkaca dari dunia nyata, program komputer juga harus bekerja dengan pola event-driven. Syukurlah, dengan Node.js, kita dapat menerapkan pola tersebut dengan mudah.

Node.js menyediakan EventEmitter class yang merupakan member dari events core module.



Filesystem
Ketahuilah bahwa seluruh data di komputer dikelola dan diakses melalui filesystem. Ketika kita menjalankan kode JavaScript pada browser, sangat penting untuk melimitasi JavaScript dalam mengakses filesystem. Teknik ini dinamakan dengan sandboxing. Sandboxing melindungi kita dari program jahat serta tindakan pencurian yang dapat merampas privasi penggunanya.

Bagaimana dengan JavaScript yang dijalankan di back-end? Limitasi tentu tetap ada, tetapi tidak seketat ketika JavaScript dieksekusi pada browser. Di back-end, justru filesystem menjadi fitur esensial karena dalam pengembangan back-end akan sering sekali mengakses atau menulis sebuah berkas di dalam komputer. 

Node.js menyediakan core modules fs yang dapat mempermudah kita dalam mengakses filesystem. Setiap method di module fs tersedia dalam dua versi, yakni versi asynchronous (default) dan versi synchronous. 

Tentu Anda sudah tahu apa itu asynchronous dan synchronous, 'kan? Jika belum, pelajari kedua hal tersebut pada kelas Belajar Dasar Pemrograman JavaScript.

Untuk mengakses berkas pada komputer, kita dapat menggunakan method fs.readFile(). Method ini menerima tiga argumen: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses.



Readable Stream
Fungsi readFile, baik versi asynchronous maupun synchronous, bekerja dengan membaca berkas hingga selesai sebelum mengembalikan data. Itu berarti, bila Anda menggunakannya untuk mengakses berkas yang besar, proses tersebut butuh waktu lama dan memori yang besar untuk mendapatkan hasilnya. Hal ini sungguh tidak efektif!

Lantas, bagaimana? Solusinya adalah dengan menggunakan teknik stream. Teknik ini tidak membaca berkas secara sekaligus, tetapi mengirim bagian demi bagian. Cara inilah yang digunakan oleh YouTube agar video dapat ditampilkan seketika kepada pengguna.

Teknik stream merupakan salah satu konsep fundamental yang mendukung aplikasi Node.js bekerja. Teknik ini dapat menangani kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apa pun agar dapat berjalan dengan lebih efisien. Sabar dulu, ya. Kasus yang disebutkan tadi terlalu kompleks untuk kita pelajari sekarang. Untuk memahami cara stream bekerja, kita gunakan kasus paling sederhana, yakni membaca teks pada berkas secara bagian-per-bagian.

Kita dapat membuat readable stream dengan menggunakan method createReadStream() dari core module fs.



Writable Stream
Apakah Anda tahu bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut writable stream. Untuk membuat writable stream dalam menulis berkas, gunakan method createWriteStream() dari core module fs.

Fungsi ini menerima satu argumen, yakni alamat berkas untuk menyimpan hasil data yang dituliskan. Berkas output akan dibuat secara otomatis jika tidak ada. Namun, bila berkas tersebut sudah ada, data sebelumnya akan tertimpa.

Rangkuman Membangun Web Service Menggunakan Node.js
Berikut adalah rangkuman dari modul Membangun Web Service Menggunakan Node.js.



Membuat HTTP Server secara Native
Pengembangan back-end adalah hal prioritas untuk Node.js. Ia andal dalam membangun aplikasi back-end, salah satunya web server alias sebuah komputer yang dapat menangani dan menanggapi permintaan dari client. Node.js menyediakan core modules http untuk membangun web server.

HTTP module memiliki banyak member seperti objek, properti, atau method yang berguna untuk melakukan hal-hal terkait protokol HTTP. Salah satu member yang penting untuk kita ketahui sekarang adalah method http.createServer().

Sesuai namanya, method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server. Method ini menerima satu parameter custom callback yang digunakan sebagai request listener. Di dalam request listener inilah logika untuk menangani dan menanggapi sebuah request dituliskan.

Request listener memiliki 2 parameter, yakni request dan response. Request merupakan objek yang menyimpan informasi terkait permintaan yang dikirimkan oleh client. Di dalam objek ini kita bisa melihat alamat yang diminta, data yang dikirim, ataupun HTTP metode yang digunakan oleh client.

Sementara itu, response merupakan objek yang digunakan untuk menanggapi permintaan. Melalui objek ini kita bisa menentukan data yang diberikan, format dokumen yang digunakan, kode status, atau informasi response lainnya.

Setiap instance dari http.server juga memiliki method listen(). Method inilah yang membuat http.server selalu standby untuk menangani permintaan yang masuk dari client. Setiap kali ada permintaan yang masuk, request listener akan tereksekusi.

Method listen() dapat menerima 4 parameter, berikut detailnya:

port (number): jalur yang digunakan untuk mengakses HTTP server.
hostname (string): nama domain yang digunakan oleh HTTP server.
backlog (number): maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (function): callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).

Namun, keempat parameter di atas bersifat opsional. Kita bisa memberikan nilai port saja atau kombinasi apa pun dari keempatnya. Hal itu tergantung terhadap kebutuhan Anda. Lazimnya, ketika memanggil method listen(), kita memberikan nilai port, hostname, dan listeningListener. 



Web Framework
Web Framework adalah sebuah kerangka yang dapat membantu mempermudah pengembangan web, termasuk dalam membuat web server. Dengan menggunakan framework, penulisan kode akan lebih terstruktur, mudah dipelihara, dan gampang dikembangkan.  

Web Framework menyediakan sekumpulan tools dan library yang dapat menyederhanakan hal-hal yang sering dilakukan dalam pengembangan web, seperti pembuatan server, routing, menangani permintaan, interaksi dengan database, otorisasi, hingga meningkatkan ketahanan web dari serangan luar.



Web Framework di Node.js
Di kelas ini kita menggunakan Hapi framework. Framework seperti Hapi menyediakan environment yang lengkap untuk mengembangkan web server yang kompleks. Bila menggunakan Hapi, kita tak perlu tools lain untuk menerapkan layer authentication, tokenize, cors, dan lain sebagainya. 

Kelemahan Hapi adalah abstraksinya yang terlalu jauh dari Node.js native. Kita perlu belajar secara dalam untuk menguasai framework ini.

Penggunaan framework menjadi pilihan personal. Salah satu faktornya adalah kasus yang hendak Anda hadapi. Bila Anda ingin membangun web server yang kompleks tanpa membutuhkan effort yang besar, Hapi adalah pilihan yang tepat.

Kita akan membangun web server dengan arsitektur REST yang kompleks ke depannya. Agar Anda selalu “Hapi” ketika mengikuti alur belajar, kita akan gunakan framework Hapi dalam membangun web server.

Ketahuilah bahwa Hapi memiliki environment yang cukup luas. Kelas ini tidak akan mengajarkan secara dalam tentang API yang ada di Hapi, melainkan hanya fitur-fitur yang menjadi dasar pembuatan REST API. Jadi, bila Anda ingin mendalami terkait framework Hapi, sempatkan waktu untuk eksplorasi di dokumentasi Hapi yang disediakan ya. 



Membuat HTTP Server Menggunakan Hapi
Untuk membuat HTTP server menggunakan Hapi, kita tidak lagi menggunakan core module http secara langsung. Kita akan membuat server melalui modul pihak ketiga @hapi/hapi. Untuk menggunakan modul tersebut, kita perlu memasang terlebih dahulu melalui NPM.

HTTP server sendiri dibuat melalui method Hapi.server(). Method ini menerima satu parameter, yakni ServerOptions. ServerOptions merupakan objek yang menampung konfigurasi dari server yang hendak dibuat, salah satunya kita bisa menetapkan properti port dan host.

Proses menjalankan server (server.start()) dilakukan secara asynchronous. Karena itu, kita perlu menjalankannya di dalam fungsi async dan memanggil server.start() menggunakan await.

Setelah server berhasil berjalan, Anda bisa melihat alamat lengkap dan port di mana server dijalankan melalui properti server.info.uri.



ESLint
ESLint adalah tools yang dapat membantu atau membimbing Anda untuk selalu menuliskan kode JavaScript dengan gaya yang konsisten. Seperti yang Anda tahu, JavaScript tidak memiliki aturan yang baku untuk gaya penulisan kode, bahkan penggunaan semicolon. Karena itu, terkadang kita jadi tidak konsisten dalam menuliskannya.

ESLint dapat mengevaluasi kode yang dituliskan berdasarkan aturan yang Anda terapkan. Anda bisa menuliskan aturannya secara mandiri atau menggunakan gaya penulisan yang sudah ada seperti AirBnb JavaScript Code Style, Google JavaScript Code Style, dan StandardJS Code Style. Kami sarankan Anda untuk mengikuti salah satu code style yang ada. Mengapa begitu? Jawabannya karena code style tersebut sudah banyak digunakan oleh JavaScript Developer di luar sana.



Same-Origin Policy
Server dapat menampung sebuah website, aplikasi, gambar, video, dan masih banyak lagi. Ketika server menampung website, mungkin beberapa data gambar, video, stylesheet biasanya diambil dari alamat server lain atau origin yang berbeda. Contohnya, stylesheet yang diambil dari Bootstrap CDN ataupun gambar yang diperoleh dari server Unsplash. Hal ini wajar dan biasa dilakukan.

Namun, apakah Anda tahu bahwa tidak semua data bisa diambil dari origin yang berbeda? Contohnya, data JSON yang didapatkan melalui teknik XMLHTTPRequest atau fetch. Jika website meminta sesuatu menggunakan teknik tersebut dari luar origin-nya, permintaan tersebut akan ditolak. Itu disebabkan oleh kebijakan same-origin. Kasus ini terjadi pada aplikasi client dan web server yang kita buat.

Origin terdiri dari tiga hal: protokol, host, dan port number.

Selama aplikasi client mengakses data dari origin yang sama, hal itu dapat dilakukan. Namun, bila ada salah satu saja yang berbeda (misal port 8001), permintaan itu akan ditolak.

Lantas, apa solusi agar keduanya dapat berinteraksi? Tenang, untungnya ada mekanisme yang dapat membuat mereka saling berinteraksi. Mekanisme tersebut disebut Cross-Origin Resource Sharing (CORS).

Rangkuman Deploy Web Service
Berikut adalah rangkuman dari modul Deploy Web Service.



Cloudeka
Cloudeka merupakan penyedia layanan cloud di Indonesia yang memahami kondisi kebutuhan pasar lokal untuk memberikan solusi terbaik dalam meningkatkan dan membantu perusahaan di Indonesia.

Cloudeka Service Portal merupakan platform layanan cloud computing (cloud provider) yang menyediakan berbagai macam layanan, misalnya,  computing, storage, networking, dan masih banyak lagi. Deka Flexi (FX2) merupakan salah satu pilihan layanan public cloud dari rangkaian Lintasarta Cloudeka. Dengan menerapkan mesin virtual sederhana dari teknologi Red Hat OpenStack dan mekanisme pay-per-use, Deka Flexi (FX2) juga menawarkan fleksibilitas yang memungkinkan perusahaan memilih layanan yang sesuai dengan kebutuhan dan skala bisnis mereka.

Deka Flexi (FX2) Compute adalah komponen infrastruktur layanan Cloudeka yang memungkinkan Anda membuat dan menjalankan mesin virtual di infrastruktur Cloudeka dengan berbagai jenis sistem operasi, seperti Linux dan Windows Server, Anda juga dapat menjalankan mesin virtual dengan CPU dan memori sesuai kebutuhan.



Tipe Mesin Deka Flexi: Compute
Deka Flexi Compute juga menyediakan berbagai jenis Virtual Machines (VM) yang telah diklasifikasikan berdasarkan jenis: Memory, Storage, dan Compute. Jika ingin membuat mesin virtual di Deka Flexi, harus terlebih dahulu memeriksa aplikasi dan sistem beban kerja. Kemudian, nantinya dapat memilih mesin VM berdasarkan jenis mesin yang tersedia, yaitu General, Compute Optimized, Memory Optimized, dan Shared.



Mengunggah Proyek Web Server ke Github
Sebelum bermain dengan instance yang sudah dibuat, kita perlu mengunggah proyek web server ke internet agar nantinya dapat diunduh dan dijalankan oleh instance.

Dalam proses tersebut, kita memanfaatkan teknologi git dan GitHub. Banyak developer yang sudah familier dengan dua hal ini. Namun, bila Anda baru mendengarnya, jangan khawatir karena kita akan mulai dari awal.

Git merupakan sebuah sistem yang membantu developer dalam melakukan versioning atau source code management terhadap aplikasi yang dikembangkan. Melalui git, kita dapat menelusuri perubahan kode, siapa yang melakukan perubahannya, hingga mengelola code versioning (branching). Tools ini kerap digunakan sebagai tools berkolaborasi antar-developer. Git bisa dipasang di Windows, Linux, dan juga macOS.

Tenang, jangan terlalu pusing mendalami tentang git sekarang. Kita tidak akan menggunakan seluruh fungsi yang ada di git, melainkan fokus mengunggah proyek (atau repository dalam istilah git) kita ke internet.

Ketahuilah bahwa sistem git ini hanya berjalan di lokal komputer Anda saja. Agar repositori git dapat diakses di mana saja, oleh siapa saja, dan komputer mana saja (termasuk Deka Flexi), kita perlu menyimpan repositorinya di internet. Nah, di sinilah peran dari GitHub. Ia merupakan salah satu vendor yang bergerak di bidang source code hosting menggunakan teknologi git.



Menginisialisasi Local Repository pada Proyek Web Server
Git akan memantau setiap perubahan pada berkas yang ada. Namun, sebenarnya tidak semua berkas dalam proyek harus dipantau oleh git. Contohnya, berkas node_modules.

Berkas dalam node_modules tidak perlu dipantau perubahannya karena berkas tersebut memiliki ukuran yang sangat besar. Selain itu, berkas node_modules bisa kita peroleh kembali dengan cara menjalankan perintah npm install pada Terminal proyek. Jadi, kita tidak membutuhkan node.modules pada repositori.

Agar git tidak memproses berkas tersebut, buatlah berkas konfigurasi git dengan nama .gitignore.

Setelah menulis di .gitignore, kemudian kita jalankan perintah berikut.

git add .

git commit -m "initial commit"

Berikut adalah fungsi dari kedua perintah tersebut.

git add . digunakan untuk memasukkan semua berkas ke stash, terkecuali berkas node_modules.
git commit -m “initial commit” digunakan untuk menyimpan perubahan pada local repository.
Setiap perubahan pada sistem git dapat ditelusuri berdasarkan commit history.



Memasang Node.js dan Menjalankan Web Server dengan Cloudeka
Untuk menjalankan web server yang kita buat membutuhkan Node.js, tentu kita perlu memasang Node.js pada Deka Flexi Instance juga.

Sebelum Anda mulai memasang Node.js, pastikan versi yang digunakan Node.js di komputer Anda sama dengan Node.js yang akan dipasang di instance. Ini berguna untuk mencegah terjadinya bugs yang ditimbulkan oleh perbedaan versi Node.js, apalagi bila perbedaan versi tersebut cukup jauh. Untuk itu, kita cek dulu, yuk, versi Node.js apa saja yang digunakan pada komputer kita.

Silakan buka Terminal/CMD/PowerShell pada komputer Anda, lalu jalankan perintah node -v.

Agar mudah mengatur versi Node.js yang digunakan pada instance, kita akan menggunakan tool yang bernama nvm. Melalui nvm, kita bisa dengan mudah mengubah versi Node.js yang ingin digunakan. Tool ini sangat membantu proses upgrade atau downgrade Node.js secara mudah.

Setelah proses instalasi nvm, pasang seluruh module/package dependencies yang digunakan pada proyek kita dengan mengeksekusi perintah npm install.



Process Manager
Saat ini web server kita sudah bisa diakses secara publik melalui internet. Selama web server sedang digunakan, pastikan juga proses node pada instance selalu tetap berjalan, ya.

Bila proses node tersebut terhenti, itu bisa karena Anda tak sengaja menghentikannya atau session SSH berakhir sehingga web server pun terhenti. Bila web server terhenti, otomatis aplikasi client tidak dapat digunakan.

Bayangkan bila ini terjadi pada implementasi di dunia nyata? Tentu akan merepotkan bisnis Anda. Supaya server dapat berjalan kembali, kita perlu masuk ke SSH dan menjalankan kembali perintah npm run start-prod. Sungguh tahapan yang tidak praktis. Kita tidak ingin menghabiskan waktu dan tenaga untuk melakukan hal itu berulang kali.

Bila Anda tidak bersedia untuk menjaga server tetap hidup, berarti sebagai gantinya kita harus mencari seseorang (atau sesuatu) yang mau melakukannya. Pertanyaannya, siapa yang mau? Ada kok, terlebih lagi ia mau bekerja tanpa bayaran. Perkenalkan, Process Manager.

Process Manager dapat menangani permasalahan di atas. Dengan Process Manager, Anda tidak perlu khawatir bila aplikasi Node.js terhenti disebabkan oleh crash. Ia akan menjalankan ulang prosesnya secara otomatis hampir tanpa downtime. Selain itu, Process Manager dapat membantu menyeimbangkan muatan proses pada CPU yang tersedia di server atau biasa disebut sebagai load balancing. Dengan begitu, aplikasi server dapat diakses secara lebih cepat dibandingkan bila dijalankan menggunakan node process secara berlangsung.

Rangkuman Mengonsumsi dan Menguji RESTful API Menggunakan Postman
Berikut adalah rangkuman dari modul Mengonsumsi dan Menguji RESTful API Menggunakan Postman.



Postman
Postman merupakan tools yang sangat cocok untuk menguji sebuah API karena memiliki fungsi yang relatif lengkap sebagai API caller dalam melakukan HTTP Request. Bahkan untuk pengembangan API yang sudah kompleks, pengujian Postman dapat diintegrasikan ke dalam alur CI/CD.

Postman merupakan tools yang sangat powerful dan mudah untuk digunakan. Ia memiliki graphical user interface (GUI) sehingga dapat digunakan dan dipahami oleh kalangan pemula sekalipun. Sebab, kita tak lagi berhadapan dengan kode yang rumit hanya untuk membuat HTTP request seperti cURL.

Postman mendukung seluruh method yang ada di HTTP. Postman tersedia secara gratis dan dapat berjalan pada sistem operasi Windows, Linux, ataupun macOS.

Postman memiliki global object pm. Untuk membuat testing, gunakan method pm.test(). Method tersebut menerima dua parameter, yang pertama nama test dan yang kedua adalah spec function. Method test() mirip seperti method it() pada Jest (Anda sudah mempelajarinya di kelas Belajar Dasar Pemrograman JavaScript).



Komponen UI Postman
dos:09e198f4e050069343e3e4aac35ce6f020221018102727.jpeg

Selamat datang di Postman! Untuk membuat HTTP Request baru, Anda bisa klik tombol “+” (New Tab).

dos:77b7ee0bc2900054cdfbb37f1b6359de20221018095402.jpeg

Kemudian, Anda akan melihat halaman berikut:

dos:f41c855d3f711e7cb8577257685eb42620221018095402.jpeg

Di halaman inilah kita akan melakukan panggilan ke API. Sebelum itu, mari kita breakdown beberapa komponen yang penting untuk Anda ketahui saat ini. 

Di bagian atas aplikasi Postman, Anda bisa melihat komponen seperti gambar di bawah ini.

dos:fa2286280155c2f261346e7dff92c3cc20221018095401.jpeg

Komponen ini merupakan tab dari halaman request. Seperti browser, ketika Anda hendak membuka halaman browser baru, Anda bisa membuka tab baru. Begitu juga dengan Postman, bila Anda ingin membuat request baru, Anda bisa membuka tab baru.

Lanjut, di bagian bawahnya kita bisa melihat komponen berikut ini:

dos:0a707a5d8c11608351f0e917288f06df20221018095402.jpeg

Di sini kita menentukan method dan path dari request yang akan dilakukan. Tombol Send digunakan untuk mengirim permintaan pada path dan method yang sudah ditentukan. 

Postman mendukung seluruh method yang ada di HTTP. Secara mudah Anda bisa mengubah method yang digunakan dengan menekan opsi dropdown yang tersedia.

dos:7a4b974ec41dda0400072f9c5e991f1820221018095402.jpeg

Kita beralih ke komponen di bawahnya.

dos:5fef8d20bb63c8d884fa198031a129e520221018095402.jpeg

Komponen ini digunakan untuk menyisipkan data dalam bentuk params URL, authorization, Headers, Body, dan lainnya. Anda dapat secara mudah menyisipkan data pada request melalui komponen ini.

Kita lanjut ke komponen di bawahnya.

dos:40114afbda7f8bf9c9d534874606bb2f20221018095402.jpeg

Ketika Anda mengirimkan request, response body akan tampak di sini. Response dari server akan ditampilkan secara terformat sesuai dengan Content-Type yang diberikan server. Jika responsnya HTML, ia akan di-render layaknya pada browser. Jika JSON, ia akan diformat dengan struktur JSON.



Pengujian Otomatis Menggunakan Postman
Ketahuilah bahwa dengan Postman Anda juga bisa melakukan pengujian secara otomatis sehingga tak perlu lagi melihat respons dari server secara manual untuk memastikan responsnya sesuai dengan harapan. Pengujian otomatis di Postman menggunakan kode JavaScript, serupa dengan unit dan integration testing yang sudah Anda pelajari di kelas Belajar Dasar Pemrograman JavaScript.

Melalui testing otomatis ini kita bisa menguji nilai dari status code, properti header, hingga body respons. Pengujian otomatis akan “pass” (berhasil) ketika semua variabel yang diuji sesuai ekspektasi. Bila ada salah satu yang tidak sesuai, pengujian akan “failed” (gagal).



Postman Collection
Postman collection merupakan tempat menyimpan kumpulan request. Kita bisa menganggap collection adalah sebuah folder yang menyimpan berkas, tetapi berkas itu adalah request.

Setiap request yang Anda kirim di Postman sebenarnya akan tampak pada tab History di sidebar.

Dalam penggunaan yang ringan, memilih dan menggunakan kembali request melalui History merupakan pengalaman yang cukup nyaman. Namun, bila Anda banyak melakukan request, history request akan menumpuk tak karuan. Dengan begitu, Anda akan membutuhkan waktu yang lama untuk memilah dan memilih request yang ingin digunakan kembali.

Dengan adanya collection, request bisa Anda kelompokkan sehingga lebih mudah untuk diakses. Melalui collection, Anda bisa menjalankan seluruh request yang ada di dalamnya sekaligus dengan urutan yang dapat disesuaikan.



Postman Environment
Environment merupakan kumpulan dari variabel yang dapat digunakan pada request di Postman. Ketika melakukan pengujian otomatis, terkadang kita perlu menyimpan nilai pada sebuah variabel. Contohnya, ketika melakukan request menambah catatan, kita akan mendapatkan id catatan tersebut dari server. Id tersebut perlu disimpan pada variabel agar dapat digunakan oleh request selanjutnya.

Variabel tak hanya digunakan untuk kasus tersebut saja, melainkan juga dapat untuk menyimpan nilai token, auth-key, atau nilai lainnya yang dipakai selama proses pengujian.

Environment dapat digunakan pada collection atau spesifik request. Untuk menggunakan variabel environment pada request, tuliskan nama variabelnya yang dibungkus dengan kurung kurawal ganda.

 Sebelumnya