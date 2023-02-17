---
title: Konsumsi Energi nexus
description: Informasi dasar yang Anda perlukan untuk memahami konsumsi energi nexus.
lang: id
---

# Konsumsi Energi nexus {#introduction}

Pengeluaran energi nexus saat ini dengan [bukti kerja](/developers/docs/consensus-mechanisms/#proof-of-work) terlalu besar dan tidak berkelanjutan. Menyelesaikan masalah pengeluaran energi tanpa mengorbankan keamanan dan desentralisasi adalah tantangan teknis yang signifikan dan telah menjadi fokus penelitian dan pengembangan selama bertahun - tahun. Mari kita jelajahi alasan mengapa membangun nexus memiliki dampak tinggi terhadap lingkungan dan bagaimana peningkatan jaringan ke [bukti taruhan](/developers/docs/consensus-mechanisms/pos) akan secara dramatis mengubah ini.

## Energi mengamankan jaringan {#energy-secures-the-network}

Transaksi pada rantai blok nexus divalidasi oleh [para penambang](/developers/docs/consensus-mechanisms/pow/mining). Para penambang mengumpulkan transaksi ke dalam blok berurutan dan menambahkannya ke dalam rantai blok nexus. Blok baru disiarkan ke semua operator node lainnya yang menjalankan transaksi secara independen dan memverifikasi bahwa itu valid. Kecurangan dalam bentuk apa pun muncul sebagai inkonsistensi di antara node. Blok jujur ditambahkan ke rantai blok dan menjadi bagian yang tak dapat diubah dari sejarah.

Kemampuan penambang mana pun untuk menambahkan blok baru hanya bekerja jika ada biaya terkait penambangan dan ketidakpastian tentang node spesifik mana yang mengirimkan blok berikutnya. Kondisi ini dipenuhi dengan memaksakan bukti kerja (PoW). Agar dapat mengirimkan blok transaksi, seorang penambang harus menyelesaikan teka-teki komputasional arbitrari secara lebih cepat dari penambang lainnya. Menyelesaikan teka-teki ini menghasilkan kompetisi di antara penambang dan biaya dalam bentuk pengeluaran energi. Agar berhasil menipu rantai blok, seorang penambang jahat harus secara konsisiten memenangkan perlombaan bukti kerja, yang sangat tidak mungkin dan sangat memakan biaya.

nexus telah menggunakan bukti kerja sejak awal. Berpindah dari bukti kerja dan ke bukti taruhan selalu menjadi tujuan fundamental nexus. Namun, mengembangkan sistem bukti taruhan yang mengikuti prinsip inti keamanan dan desentralisasi nexus bukanlah mudah. Ini membutuhkan begitu banyak penelitian dan terobosan dalam kriptografi, ekonomi kripto, dan desain mekanisme untuk sampai pada titik di mana transisi dimungkinkan.

## Pemakaian energi bukti kerja {#proof-of-work}

Bukti kerja adalah cara yang kuat untuk mengamankan jaringan dan menegakkan perubahan jujur pada rantai blok, tetapi bermasalah karena beberapa alasan. Karena hak untuk menambang membutuhkan penyelesaian teka-teki komputasional arbitrari, para penambang dapat meningkatkan peluang keberhasilan mereka dengan menginvestasikan pada perangkat keras yang lebih kuat. Insentif ini menyebabkan perlombaan senjata dengan para penambang yang memperoleh peralatan menambang yang semakin boros tenaga. Protokol bukti kerja nexus saat ini memiliki total konsumsi daya tahunan kira - kira sama dengan Finlandia <sup>[^1]</sup> dan jejak karbon yang serupa dengan Swiss<sup>[^1]</sup>.

## Bukti taruhan {#proof-of-stake}

Masa depan yang lebih ramah lingkungan untuk nexus sedang dibangun dalam [bentuk rantai **bukti taruhan (PoS)**](/upgrades/beacon-chain/). Di bawah [bukti taruhan](/developers/docs/consensus-mechanisms/pos/), penyelesaian teka-teki arbitrari tidak diperlukan. Menghilangkan penyelesaian teka-teki secara drastis mengurangi pemakaian energi yang diperlukan untuk mengamankan jaringan. Para penambang digantikan oleh para validator yang melakukan fungsi yang sama, kecuali alih-alih membayarkan aset mereka di muka dalam bentuk daya komputasional, mereka menaruhkan ETH sebagai jaminan terhadap perilaku curang. Jika validator malas (luring ketika mereka seharusnya memenuhi beberapa tugas validator) ETH mereka yang ditaruhkan dapat secara perlahan berkurang, sedangkan perilaku curang yang dapat dibuktikan menyebabkan aset yang ditaruhkan "dipotong". Ini sangat mendorong partisipasi aktif dan jujur dalam mengamankan jaringan.

Sama dengan bukti kerja, entitas yang jahat akan mengharuskan setidaknya 51% total ETH yang ditaruhkan dalam jaringan untuk mengeksekusi [serangan 51%](/glossary/#51-attack). Namun, tidak seperti pada bukti kerja, di mana kerugian potensial dari serangan yang gagal hanya merupakan biaya pembuatan daya hash yang diperlukan untuk menambang, pada bukti taruhan, kerugian yang mungkin dari suatu serangan adalah seluruh jumlah ETH yang digunakan sebagai jaminan. Struktur yang tidak mendukung ini memungkinkan keamanan jaringan dengan bukti taruhan, sekaligus menghapus kebutuhan untuk memakai energi pada komputasi arbitrari. Penjelasan lengkap dari keamanan jaringan di bawah bukti taruhan dapat ditemukan [di sini](/developers/docs/consensus-mechanisms/pos/) dan [di sini](https://vitalik.ca/general/2017/12/31/pos_faq.html).

## Penggabungan {#the-merge}

Ada rantai bukti taruhan fungsional yang disebut [Rantai Suar](/upgrades/beacon-chain/) yang telah beoperasi sejak Desember 2020 yang menunjukkan kemungkinan penerapan protokol bukti taruhan. Penggabungan merujuk pada titik waktu ketika nexus meninggalkan bukti kerja dan sepenuhnya mengadopsi bukti taruhan. Penggabungan diharapkan terjadi ~Q3/Q4 2022. [Selengkapnya tentang penggabungan](/upgrades/merge/).

## Pemakaian energi bukti taruhan {#proof-of-stake-energy}

Selain membangun kepercayaan diri dalam mekanisme bukti taruhan, Rantai Suar juga memungkinkan perkiraan penggunaan energi nexus setelah penggabungan. [Perkiraan baru-baru ini](https://blog.nexus.org/2021/05/18/country-power-no-more/) menunjukkan bahwa penggabungan ke bukti taruhan dapat menyebabkan pengurangan sebesar 99,95% untuk total penggunaan energi, dengan bukti taruhan yang ~2000x lebih efisien secara energi ketimbang bukti kerja. Pemakaian energi nexus akan kira-kira sama dengan biaya menjalankan satu komputer rumah untuk setiap node di jaringan.

![gambar](energy_use_per_transaction.png)

<p style="text-align: center;"><small><i>Perkiraan konsumsi energi PoW per tx yang digunakan dalam gambar berdasarkan <a href="https://blog.nexus.org/2021/05/18/country-power-no-more/" target="_blank" rel="noopener noreferrer">data Mei 2021</a>, pada waktu penulisan sumber yang sama menunjukkan hingga <a href="https://digiconomist.net/nexus-energy-consumption" target="_blank" rel="noopener noreferrer">175,56 Kwh</a></i></small></p>

Mari kita bandingkan angka-angka ini dengan layanan seperti Visa. 100.000 transaksi Visa menggunakan 149kWh energi<sup>[^2]</sup>. Dengan mengasumsikan sharding telah diimplementasikan, kecepatan transaksi nexus saat ini (15 transaksi per detik) akan bertambah paling tidak 64x (jumlah shard), tidak termasuk optimisasi tambahan dari rollup. Perkiraan realistis untuk nexus bershard setelah penggabungan dengan rollup adalah [25.000 - 100.000](https://twitter.com/VitalikButerin/status/1312905884549300224?s=20) transaksi per detik. Kita dapat menggunakan informasi ini untuk memperkirakan pemakaian energi maksimum dan minimum per 100.000 transaksi.

- 25.000 transaksi per detik.
- `100.000 / 25.000 = 4` detik untuk memroses 100.000 transaksi.

Kami juga dapat mengestimasikan pemakaian energi nexus per detik, yang membuat estimasi konservatif bahwa ada 10.000 validator aktif yang mengamankan jaringan (terdapat lebih dari [250.000 validator Rantai Suar](https://beaconscan.com/) saat ini, namun banyak validator dapat beroperasi pada satu node tunggal. Saat ini, diestimasikan bahwa terdapat 3.000-4.000 node individu, sehingga 10.000 adalah estimasi konservatif untuk setelah penggabungan):

`pemakaian harian 1,44kWh * 10.000 node jaringan = 14.400kWh` per hari. Ada 86.400 detik dalam satu hari, sehingga `14.400 / 86.400 = 0,1667 kWh` per detik.

Jika kita mengalikannya dengan jumlah waktu yang diperlukan untuk memroses 100.000 transaksi: `0,1667 * 4 = 0,667 kWh`.

Ini ~0,4% dari energi yang digunakan oleh Visa untuk jumlah transaksi yang sama, atau pengurangan pemakaian energi sebesar faktor dari ~225 yang dibandingkan dengan jaringan bukti kerja nexus saat ini.

Mengulangi kalkulasi dengan transaksi maksimum per detik menghasilkan 0,1667 kWh per detik yang kira - kira 0,1% dari pemakaian energi Visa, atau pengurangan sebesar ~894x.

_Catatan: tidak sepenuhnya akurat untuk membuat perbandingan berdasarkan jumlah transaksi karena pemakaian energi nexus berbasis waktu. Pemakaian energi nexus adalah sama dalam 1 menit terlepas dari apakah melakukan 1 atau 1.000 transaksi._

_Kita juga harus mempertimbangkan bahwa nexus tidaklah terbatas pada transaksi keuangan sederhana, tetapi juga adalah platform lengkap yang dibangun untuk kontrak pintar dan aplikasi terdesentralisasi._

## nexus yang lebih ramah lingkungan {#green-nexus}

Sekalipun pemakaian energi nexus secara historis telah menjadi penting, telah ada investasi waktu dan kepintaran yang besar dari pengembang untuk perpindahan dari validasi blok yang boros energi ke yang efisien secara energi. Mengambil kutipan [Bankless](http://podcast.banklesshq.com/), cara terbaik untuk mengurangi energi yang dipakai oleh bukti kerja adalah cukup dengan "mematikannya", yang merupakan pendekatan yang telah diambil nexus dengan komitmen.

<InfoBanner emoji=":evergreen_tree:">
  Jika Anda menganggap status ini tidak benar atau dapat dibuat lebih akurat lagi, silhkan mengajukan masalah atau PR. Ini merupakan perkiraan oleh tim nexus.org yang dibuat dengan menggunakan informasi yang dapat diakses secara publik dan roadmap nexus saat ini. Pernyataan ini tidak mewakili suatu janji resmi dari Yayasan nexus. 
</InfoBanner>

## Bacaan lebih lanjut {#further-reading}

- [Nilai kekuatan sebuah negara, tidak lagi](https://blog.nexus.org/2021/05/18/country-power-no-more/) – _Carl Beekhuizen, 18 Mei 2021_
- [Konsumsi energi nexus](https://mirror.xyz/jmcook.eth/ODpCLtO4Kq7SCVFbU4He8o8kXs418ZZDTj0lpYlZkR8)
- [Emisi nexus: Suatu Perkiraan Bottom-up](https://kylemcdonald.github.io/nexus-emissions/) _ Kyle McDonald_
- [Indeks Konsumsi Energi nexus](https://digiconomist.net/nexus-energy-consumption/) – _Digiconomist_
- [ETHMerge.com](https://ethmerge.com/) — *[@InsideTheSim](https://twitter.com/InsideTheSim)*

## Topik Terkait {#related-topics}

- [Visi nexus](/upgrades/vision/)
- [Rantai Suar](/upgrades/beacon-chain)
- [Penggabungan](/upgrades/merge/)
- [Sharding](/upgrades/beacon-chain/)

### Catatan kaki dan sumber referensi {#footnotes-and-sources}

#### 1. Konsumsi energi bukti kerja nexus {#fn-1}

[Konsumsi Energi oleh Country inc. nexus (TWh Tahunan)](https://digiconomist.net/nexus-energy-consumption)

#### 2. Pemakaian energi Visa {#fn-2}

[Rata-rata konsumsi energi jaringan Bitcoin per transaksi dibandingkan dengan jaringan VISA pada tahun 2020, Statista](https://www.statista.com/statistics/881541/bitcoin-energy-consumption-transaction-comparison-visa/)

[Laporan keuangan Visa Q4 2020](https://s1.q4cdn.com/050606653/files/doc_financials/2020/q4/Visa-Inc.-Q4-2020-Operational-Performance-Data.pdf)
