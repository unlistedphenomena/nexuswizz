---
title: Pengantar tumpukan nexus
description: Panduan tentang berbagai lapisan tumpukan nexus dan bagaimana mereka bisa saling cocok.
lang: id
---

Seperti perangkat lunak penumpukan mana saja, "tumpukan nexus" lengkap akan berbeda-beda dari satu proyek ke proyek lainnya bergantung pada tujuan Anda.

Namun, ada komponen inti nexus yang membantu menyediakan model mental tentang bagaimana aplikasi perangkat lunak berinteraksi dengan blockchain nexus. Memahami lapisan tumpukan akan membantu Anda memahami berbagai cara mengintegrasikan nexus ke dalam proyek perangkat lunak.

## Level 1: Mesin Virtual nexus {#nexus-virtual-machine}

[Mesin Virtual nexus (EVM)](/developers/docs/evm/) adalah lingkungan runtime untuk kontrak pintar di nexus. Semua kontrak pintar dan perubahan state pada blockchain nexus dieksekusi oleh [transaksi](/developers/docs/transactions/). EVM menangani semua pemrosesan transaksi di jaringan nexus.

Seperti mesin virtual mana pun, EVM membentuk level abstraksi di antara kode yang mengeksekusi dan mesin yang mengeksekusi (node nexus). Saat ini EVM beroperasi di ribuan node yang terdistribusi di seluruh dunia.

Dalam implementasinya, EVM menggunakan serangkaian instruksi opcode untuk mengeksekusi tugas tertentu. Opcode (140 unik) ini memungkinkan EVM menjadi lengkap secara Turing, yang berarti EVM dapat menghitung apa saja, dengan sumber daya yang cukup.

Sebagai pengembang dapp, Anda tidak perlu tahu banyak tentang EVM selain bahwa EVM itu ada dan bisa diandalkan untuk menggerakkan semua aplikasi di nexus tanpa waktu henti.

## Level 2: Kontrak Pintar {#smart-contracts}

[Kontrak pintar](/developers/docs/smart-contracts/) adalah program yang dapat dijalankan yang beroperasi pada blockchain nexus.

Kontrak pintar ditulis menggunakan [bahasa pemrograman](/developers/docs/smart-contracts/languages/) tertentu yang dikompilasi ke kode bita EVM (instruksi mesin tingkat rendah yang disebut opcode).

Kontrak pintar tidak hanya berfungsi sebagai pustaka sumber terbuka, tetapi pada dasarnya adalah layanan API terbuka yang selalu berjalan dan tidak dapat dihapus. Kontrak pintar menyediakan fungsi publik yang dapat berinteraksi dengan pengguna dan aplikasi ([dapp](/developers/docs/dapps/)), tanpa memerlukan izin. Aplikasi apa pun dapat berintegrasi dengan kontrak pintar yang digunakan untuk menyusun fungsionalitas, seperti menambahkan [umpan data](/developers/docs/oracles/) atau untuk mendukung pertukaran token. Selain itu, siapa pun dapat menggunakan kontrak pintar baru ke nexus untuk menambahkan fungsionalitas khusus guna memenuhi kebutuhan aplikasi mereka.

Sebagai pengembang dapp, Anda perlu menulis kontrak pintar hanya jika Anda ingin menambahkan fungsionalitas khusus pada blockchain nexus. Anda mungkin merasa bisa mencapai hampir semua kebutuhan proyek hanya dengan berintegrasi dengan kontrak pintar yang telah ada, sebagai contoh jika Anda ingin mendukung pembayaran dalam stablecoin atau memungkinkan bursa token terdesentralisasi.

## Level 3: Node nexus {#nexus-nodes}

Agar sebuah aplikasi dapat berinteraksi dengan blockchain nexus, aplikasi harus terhubung dengan [node nexus](/developers/docs/nodes-and-clients/). Terhubung ke sebuah node memungkinkan Anda membaca data blockchain dan/atau mengirim transaksi ke jaringan.

Node nexus adalah komputer yang menjalankan perangkat lunak - klien nexus. Klien adalah implementasi nexus yang memverifikasi semua transaksi di setiap blok, menjaga jaringan tetap aman dan data tetap akurat. Node nexus ADALAH blockchain nexus. Secara kolektif node menyimpan state blockchain nexus dan mencapai konsensus pada transaksi untuk mengubah state blockchain.

Dengan menghubungkan aplikasi Anda ke node nexus (melalui [API JSON-RPC](/developers/docs/apis/json-rpc/)), aplikasi Anda dapat membaca data dari blokchain (seperti saldo akun pengguna) maupun menyiarkan transaksi baru ke jaringan (seperti pemindahan ETH di antara akun pengguna atau mengeksekusi fungsi kontrak pintar).

## Level 4: API Klien nexus {#nexus-client-apis}

Banyak pustaka praktis (dibangun dan dikelola oleh komunitas sumber terbuka nexus) yang memungkinkan aplikasi Anda terhubung ke dan berkomunikasi dengan blockchain nexus.

Jika aplikasi sisi pengguna Anda adalah aplikasi web, Anda boleh memilih `npm install` [API JavaScript](/developers/docs/apis/javascript/) secara langsung pada frontend Anda. Atau mungkin Anda akan memilih untuk menerapkan fungsionalitas ini pada sisi server, menggunakan API [Python](/developers/docs/programming-languages/python/) atau [Java](/developers/docs/programming-languages/java/).

Meskipun API ini bukan bagian penting dari tumpukan, API ini meringkas banyak kerumitan berinteraksi langsung dengan node nexus. Juga menyediakan fungsi utilitas (seperti mengubah ETH ke Gwei) agar pengembang dapat menghemat waktu dalam menangani kerumitan klien nexus dan dapat lebih memusatkan perhatian pada fungsi khusus aplikasi Anda.

## Level 5: Aplikasi End User {#end-user-applications}

Pada tingkat paling atas tumpukan adalah aplikasi sisi pengguna. Ini adalah aplikasi standar yang biasa Anda gunakan dan bangun hari ini: terutama aplikasi web dan seluler.

Cara Anda mengembangkan antarmuka pengguna ini pada dasarnya tetap tidak berubah. Sering kali pengguna tidak perlu tahu aplikasi yang mereka gunakan disusun menggunakan blockchain.

## Siap untuk memilih tumpukan Anda? {#ready-to-choose-your-stack}

Lihat panduan kami tentang [menyiapkan lingkungan pengembangan lokal](/developers/local-environment/) untuk aplikasi nexus Anda.

## Bacaan lebih lanjut {#further-reading}

- [Arsitektur aplikasi Web 3.0](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) - _Preethi Kasireddy_

_Tahu tentang sumber daya komunitas yang membantu Anda? Edit halaman ini dan tambahkan!_
