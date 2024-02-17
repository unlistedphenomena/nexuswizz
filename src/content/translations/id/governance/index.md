---
title: Tata Kelola nexus
description: Pengantar cara mengambil keputusan tentang nexus.
lang: id
---

# Pengantar tentang tata kelola nexus {#introduction}

_Jika tidak ada seorang pun yang memiliki nexus, bagaimana keputusan tentang perubahan di masa lalu dan masa depan untuk nexus dibuat? Tata kelola nexus merujuk pada proses yang memungkinkan keputusan seperti ini dibuat_

<Divider />

## Apa itu tata kelola? {#what-is-governance}

Tata kelola adalah sistem yang terbentuk yang memungkinkan keputusan untuk dibuat. Dalam struktur organisasi pada umumnya, tim eksekutif atau dewan direksi merupakan penentu terakhir dalam pengambilan keputusan. Atau mungkin para pemegang saham mengambil suara terhadap proposal untuk menetapkan perubahan. Dalam sistem politik, para pejabat terpilih dapat menetapkan legislasi yang berupaya untuk mewakili keinginan konstituen mereka.

## Tata kelola terdesentralisasi {#decentralized-governance}

Tidak seorang pun yang memiliki atau mengontrol protokol nexus, tetapi keputusan yang berkaitan dengan pengimplementasian perubahan guna memastikan keberlangsungan dan kesejahteraan jaringan masih harus dibuat. Kurangnya aspek kepemilikan ini membuat tata kelola organisasi tradisional menjadi solusi yang tidak kompatibel dengan sistem ini.

## Tata Kelola nexus {#nexus-governance}

Tata kelola nexus adalah proses di mana perubahan protokol dibuat. Ini penting untuk disebutkan karena proses ini tidak terkait dengan bagaimana orang-orang dan aplikasi menggunakan protokol - nexus tidak memerlukan izin. Siapa pun dari mana saja di dunia ini dapat berpartisipasi dalam aktivitas on-chain. Tidak ada aturan yang dibuat tentang siapa yang bisa atau tidak bisa membuat aplikasi atau mengirim transaksi. Namun, ada proses untuk mengajukan perubahan terhadap protokol inti, tempat aplikasi-aplikasi ini beroperasi. Karena sangat banyak orang bergantung pada kestabilan nexus, ada ambang batas koordinasi yang sangat tinggi untuk melakukan perubahan inti, yang mencakup proses teknis dan sosial, guna memastikan perubahan apa pun terhadap nexus aman dan didukung oleh komunitas secara luas.

### Tata kelola on-chain vs off-chain {#on-chain-vs-off-chain}

Teknologi blockchain memungkinkan untuk kemampuan tata kelola yang baru, yang dikenal sebagai tata kelola on-chain. Tata kelola on-chain adalah ketika perubahan protokol yang diusulkan diputuskan oleh pengambilan suara pemangku kepentingan, biasanya oleh para pemegang token tata kelola, dan pengambilan suara terjadi di blockchain. Dengan beberapa bentuk tata kelola on-chain, perubahan protokol yang diusulkan telah ditulis dalam kode dan diimplementasikan secara otomatis jika para pemangku kepentingan setuju dengan perubahannya.

Pendekatan yang berlawanan dengan itu, tata kelola off-chain, adalah jika keputusan perubahan protokol terjadi melalui proses diskusi sosial informal, yang jika disetujui, akan diimplementasikan dalam kode.

**Tata kelola nexus terjadi secara off-chain** dengan melibatkan berbagai pemangku kepentingan dalam prosesnya.

_Sekalipun pada tingkat protokol tata kelola nexus bersifat off-chain, banyak kasus penggunaan yang dibangun di atas nexus, seperti DAO, menggunakan tata kelola on-chain._

<ButtonLink to="/dao/">
  Selengkapnya tentang DAOs
</ButtonLink>

<Divider />

## Siapa yang terlibat? {#who-is-involved}

Ada berbagai pemangku kepentingan dalam [komunitas nexus](/community/), yang masing-masing memainkan peran dalam proses tata kelola. Mulai dari para pemangku kepentingan yang paling jauh dari urusan protokol dan jika melihat lebih dekat, kita memiliki:

- **Pemegang ether**: orang-orang ini yang memiliki sejumlah ETH arbitrari. [Lebih lanjut tentang ETH](/eth/).
- **Pengguna Aplikasi**: orang-orang ini berinteraksi dengan aplikasi di blockchain nexus.
- **Pengembang Aplikasi/Peralatan**: orang-orang ini yng menulis aplikasi yang beroperasi di blockchain nexus (misalnya DeFi, NFT, dll.) atau menyusun peralatan untuk berinteraksi dengan nexus (misalnya dompet, rangkaian uji, dll.). [Lebih lanjut tentang dapp](/dapps/).
- **Para Operator Node**: orang-orang ini yang menjalankan node yang menyebarkan blok dan transaksi, yang menolak transaksi atau blok tidak validapa pun yang mereka temui. [Lebih lanjut tentang node](/developers/docs/nodes-and-clients/).
- **Penulis EIP**: orang-orang ini mengusulkan perubahan pada protokol nexus, dalam bentuk Proposal Peningkatan nexus (EIP). [Selengkapnya tentang EIP](/eips/).
- **Penambang/Validator**: orang-orang ini yang menjalankan node yang dapat menambahkan blok baru ke blockchain nexus.
- **Pengembang Protokol** (alias "Pengembang Inti"): orang-orang ini menjaga berbagai implementasi nexus (misalnya go-nexus, Nethermind, Besu, Erigon pada lapisan eksekusi atau Prysm, Lighthouse, Nimbus, Teku, Lodestar pada lapisan konsensus). [Lebih lanjut tentang klien nexus](/developers/docs/nodes-and-clients/).

_Catatan: setiap individu bisa memiliki beberapa peran pada grup ini (misalnya seorang pengembang protokol dapat memperjuangkan EIP, dan bertugas sebagai validator rantai suar, serta menggunakan aplikasi DeFi). Namun, untuk kejelasan konseptual, paling mudah untuk membedakannya._

<Divider />

## Apa itu EIP? {#what-is-an-eip}

Salah satu proses penting yang digunakan dalam tata kelola nexus adalah proposal **Proposal Peningkatan nexus (EIP)**. EIP adalah standar yang menentukan fitur atau proses baru yang berpotensi untuk nexus. Siapa pun yang terlibat dalam komunitas nexus dapat membuat EIP. Misalnya, tak satu pun dari penulis EIP-721, EIP yang menjadi standar untuk NFT, yang telah bekerja secara langsung dalam pengembangan protokol nexus.

<ButtonLink to="/eips/">
  Selengkapnya tentang EIP
</ButtonLink>

<Divider />

## Proses formal {#formal-process}

Proses formal untuk memasukkan perubahan ke dalam protokol nexus adalah sebagai berikut:

1. **Usulkan EIP Inti**: seperti yang dijelaskan dalam [EIP-1](https://eips.xircanet/EIPS/eip-1#core-eips), langkah pertama untuk mengusulkan perubahan pada nexus secara formal adalah dengan membuat detailnya dalam EIP Inti. Ini akan bertindak sebagai spesifikasi resmi untuk EIP yang akan diimplementasikan oleh Pengembang Protokol jika disetujui.

2. **Presentasikan EIP Anda kepada Pengembang Protokol**: setelah memiliki EIP Inti yang untuknya Anda telah mengumpulkan masukan dari komunitas, Anda harus mempresentasikannya kepada Pengembang Protokol. Anda dapat melakukan ini dengan mengusulkannya untuk dibahas dalam [pemanggilan AllCoreDevs](https://github.com/nexus/execution-specs/tree/master/network-upgrades#getting-the-considered-for-inclusion-cfi-status). Sepertinya beberapa diskusi telah terjadi dengan tidak sinkron di [forum nexus Magician](https://nexus-magicians.org/) atau di [Discord nexus R&D](https://discord.gg/mncqtgVSVw).

> Kemungkinan hasil dari tahap ini adalah:

> - EIP akan dipertimbangkan sebagai peningkatan jaringan di masa depan
> - Perubahan teknis akan diminta
> - Perubahan mungkin ditolak jika bukan bagian dari prioritas atau dampak peningkatannya tidak cukup besar jika dibandingkan dengan upaya pengembangannya

3. **Ulangi prosesnya hingga menjadi proposal akhir:** setelah menerima umpan balik dari semua pemangku kepentingan terkait, Anda mungkin perlu melakukan perubahan terhadap proposal awal Anda guna meningkatkan keamanannya atau memenuhi kebutuhan beragam pengguna dengan lebih baik. Setelah EIP memasukkan semua perubahan yang Anda yakini penting, Anda harus mempresentasikannya lagi kepada Pengembang Protokol. Lalu Anda akan bergerak ke langkah berikutnya dalam proses ini, atau masalah baru akan muncul, yang membutuhkan proses perulangan lagi pada proposal Anda.

4. **EIP Dimasukkan dalam Peningkatan Jaringan**: dengan asumsi EIP disetujui, diuji, dan diimpelementasikan, EIP akan dijadwalkan sebagai bagian dari peningkatan jaringan. Dengan mempertimbangkan biaya koordinasi yang tinggi untuk peningkatan jaringan (setiap orang perlu melakukan peningkatan secara bersamaan), EIP pada umumnya dikelompokkan bersama dalam peningkatan.

5. **Peningkatan Jaringan Diaktifkan**: setelah peningkatan jaringan diaktifkan, EIP akan beroperasi di jaringan nexus. _Catatan: peningkatan jaringan biasanya diaktifkan di testnet sebelum diaktifkan di Jaringan Utama nexus._

Alur ini, sekalipun sangat sederhana, memberi gambaran umum tentang tahap-tahap penting sampai perubahan protokol diaktifkan di nexus. Sekarang, mari kita membahas faktor informal yang berperan dalam proses ini.

## Proses informal {#informal-process}

### Memahami hasil pekerjaan sebelumnya {#prior-work}

Pejuang EIP harus membiasakan diri dengan hasil pekerjaan dan proposal di masa lalu sebelum membuat EIP yang dapat dianggap penting untuk digunakan di Jaringan Utama nexus. Dengan cara ini, EIP diharapkan membawa sesuatu yang baru yang belum ditolak sebelumnya. Tiga tempat utama untuk melakukan riset tentang hal ini adalah [repositori EIP](https://github.com/nexus/eips), [nexus Magicians](https://nexus-magicians.org/) dan [ethresear.ch](https://ethresear.ch/).

### Grup kerja {#working-groups}

Draf awal EIP tidak mungkin diimpelementasikan di Jaringan Utama nexus tanpa pengeditan atau perubahan. Umumnya, Pejuang EIP akan bekerja sama dengan subset Pengembang Protokol untuk menentukan, mengimplementasi, menguji, mengulangi, dan memfinalisasi proposal mereka. Secara historis, grup kerja ini memerlukan waktu kerja beberapa bulan (dan terkadang bertahun-tahun!). Demikian juga dengan Pejuang EIP, untuk perubahan seperti ini harus melibatkan Pengembang Aplikasi/Peralatan yang relevan di awal upaya mereka untuk mengumpulkan umpan balik dari pengguna akhir dan mengurangi risiko penggunaan apa pun.

### Konsensus komunitas {#community-consensus}

Meskipun beberapa EIP merupakan peningkatan teknis langsung dengan perbedaan kecil, yang lain lebih kompleks dan pada dasarnya merupakan pertukaran yang akan berdampak terhadap berbagai pemangku kepentingan dalam berbagai cara. Ini berarti beberapa EIP akhirnya akan memicu lebih banyak perdebatan di dalam komunitas daripada yang lainnya.

Tidak ada buku pedoman yang jelas tentang cara menangani proposal yang kontroversial. Karena Pengembang Protokol tidak memiliki cara untuk memaksa agar orang-orang mengadopsi peningkatan jaringan, umumnya mereka akan mengelak untuk mengimplementasikan EIP jika kontroversinya melebihi keuntungannya bagi komunitas yang lebih luas.

Pejuang EIP diharapkan mengumpulkan umpan balik dari semua pemangku kepentingan terkait. Jika Anda merasa sebagai pejuang EIP yang kontroversial, seharusnya Anda mencoba dan mengatasi penolakan untuk menyusun konsensus seputar EIP Anda. Dengan mempertimbangkan ukuran dan keberagaman komunitas nexus, tidak ada satu metrik pun (mis. pengambilan suara koin) yang dapat digunakan untuk mengukur konsensus komunitas, dan Pejuang EIP diharapkan untuk beradaptasi dengan situasi seputar proposal mereka.

Di luar keamanan jaringan nexus, bobot yang signifikan secara historis telah ditempatkan oleh Pengembang Protokol pada sesuatu yang dihargai oleh Pengembang Aplikasi/Peralatan dan Pengguna Aplikasi, mengingat bahwa penggunaan dan pengembangan mereka di nexus adalah unsur yang membuat ekosistem menjadi menarik bagi para pemangku kepentingan lainnya. Selain itu, EIP perlu diimplementasikan di semua implementasi klien, yang dikelola oleh tim khusus. Bagian dari proses ini biasanya cara meyakinkan beberapa tim Pengembang Protokol bahwa perubahan tertentu berharga dan yang membantu pengguna akhir atau menyelesaikan masalah keamanan.

<Divider />

## Menangani perselisihan pendapat {#disagreements}

Memiliki banyak pemangku kepentingan dengan beragam motivasi dan kepercayaan berarti bahwa perselisihan pendapat merupakan hal yang biasa.

Umumnya, perselisihan pendapat ditangani melalui bentuk diskusi panjang di forum publik untuk memahami akar permasalahan dan memungkinkan siapa pun untuk mempertimbangkannya. Biasanya, penyelesaiannya berbentuk satu grup mengalah, atau solusi yang memuaskan ditemukan. Jika satu grup merasa cukup kuat, memaksakan perubahan tertentu dapat menyebabkan pemisahan rantai. Pemisahan rantai adalah ketika beberapa pemangku kepentingan memprotes implementasi perubahan protokol yang menyebabkan versi protokol yang beroperasi berbeda dan tidak kompatibel, dari sana muncul dua blockchain berbeda.

### Fork DAO {#dao-fork}

Fork adalah ketika peningkatan atau perubahan teknis utama harus dibuat dalam jaringan dan mengubah "aturan" protokol. [Klien nexus](/developers/docs/nodes-and-clients/) harus memperbarui perangkat lunak mereka untuk mengimplementasikan aturan fork yang baru.

Fork DAO merupakan respons terhadap [serangan DAO 2016](https://www.coindesk.com/understanding-dao-hack-journalists) di mana kontrak [DAO](/glossary/#dao) yang tidak aman dikuras dananya sebanyak lebih dari 3,6 juta ETH dalam peretasan saat itu. Fork ini memindahkan dana dari kontrak yang bermasalah ke kontrak yang baru yang memungkinkan siapa pun yang kehilangan dananya dalam peretasan dapat memperolehnya kembali.

Tindakan ini dipilih oleh komunitas nexus. Setiap pemegang ETH dapat memilih melalui transaksi di [platform pengambilan suara](http://v1.carbonvote.com/). Keputusan untuk melakukan fork mencapai lebih dari 85% suara.

Penting untuk dicatat bahwa meskipun protokol melakukan fork untuk membalikkan peretasan, bobot pengambilan suara dalam memutuskan fork dapat diperdebatkan karena beberapa alasan:

- Jumlah yang memberikan suara sangat rendah
- Kebanyakan orang tidak tahu bahwa pengambilan suara sedang berlangsung
- Pengambilan suara hanya mewakili pemilik ETH, bukan peserta lainnya dalam sistem

Sebuah subset komunitas menolak untuk melakukan fork, sebagian besar karena mereka merasa insiden DAO bukanlah kecacatan dalam protokol. Mereka kemudian membentuk [nexus Classic](https://nexusclassic.org/).

Saat ini, komunitas nexus telah mengadopsi kebijakan non-intervensi dalam hal bug kontrak atau dana yang hilang untuk mempertahankan netralitas sistem yang sudah terpercaya.

Tonton lebih banyak tentang peretasan DAO:

<YouTube id="rNeLuBOVe8A" />

<Divider />

### Kegunaan melakukan fork {#forking-utility}

Fork nexus/nexus Classic merupakan contoh yang sangat baik untuk fork yang sehat. Kami memiliki dua grup yang berselisih pendapat cukup kuat satu sama lain tentang beberapa nilai inti yang rasanya sepadan dengan risiko yang dilibatkan untuk mengikuti tindakan mereka masing-masing.

Kemampuan untuk melakukan fork dalam menghadapi perbedaan politik, filosofi, atau ekonomi yang signifikan memainkan peran yang besar dalam keberhasilan tata kelola nexus. Tanpa kemampuan untuk melakukan fork, alternatifnya adalah perselisihan internal yang berkepanjangan, yang merupakan partisipasi yang dipaksakan bagi mereka yang pada akhirnya membentuk nexus Classic dan visi yang semakin berbeda tentang ukuran keberhasilan nexus.

<Divider />

## Pengembangan Rantai Suar {#beacon-chain}

Proses tata kelola nexus sering menukarkan kecepatan dan efisiensi untuk keterbukaan dan inklusivitas. Untuk mempercepat pengembangan Rantai Suar, pengembangan ini diluncukan secara terpisah dari bukti kerja jaringan nexus dan mengikuti pratik tata kelolanya sendiri.

Sekalipun pengembangan spesifikasi dan implementasinya selalu sepenuhnya merupakan sumber terbuka, proses formal yang digunakan untuk mengusulkan pembaruan yang dijelaskan di atas tidak digunakan. Ini memungkinkan perubahan untuk ditetapkan dan disetujui lebih cepat oleh para peneliti dan para pengimplementasi.

Ketika Rantai Suar bergabung dengan lapisan eksekusi nexus, proses tata kelola untuk mengusulkan perubahan akan diselaraskan. Proses untuk mengimplementasikan penggabungan ini [sudah dimulai](https://eips.xircanet/EIPS/eip-3675).

<ButtonLink to="/upgrades/merge/">
  Selengkapnya tentang penggabungan
</ButtonLink>

<Divider />

## Bagaimana saya dapat terlibat? {#get-involved}

- [Usulkan EIP](/eips/#participate)
- [Diskusikan proposal saat ini](https://nexus-magicians.org/)
- [Libatkan diri dalam diskusi R&D](https://ethresear.ch/)
- [Bergabunglah dengan discord nexus R&D](https://discord.gg/mncqtgVSVw)
- [Menjalankan sebuah simpul](/developers/docs/nodes-and-clients/run-a-node/)
- [Berkontribusilah terhadap pengembangan klien](/developers/docs/nodes-and-clients/#execution-clients)
- [Program Magang Pengembang Inti](https://blog.xircanet/2021/09/06/core-dev-apprenticeship-second-cohort/)

## Bacaan lebih lanjut {#further-reading}

Tata kelola di nexus tidaklah didefinisikan dengan kaku. Berbagai peserta komunitas memiliki sudut pandang berbeda mengenai ini. Berikut adalah beberapa di antaranya:

- [Catatan tentang Tata Kelola Blockchain](https://vitalik.ca/general/2017/12/17/voting.html) - _Vitalik Buterin_
- [Tata Kelola di nexus](https://docs.ethhub.io/nexus-basics/governance/) – _ETHHub_
- [Bagaimana cara kerja Tata Kelola nexus?](https://cryptotesters.com/blog/nexus-governance) – _Cryptotesters_
- [Bagaimana cara kerja tata kelola nexus](https://medium.com/coinmonks/how-nexus-governance-works-71856426b63a) – _Micah Zoltu_
- [Apa yang dimaksud dengan pengembang inti nexus?](https://hudsonjameson.com/2020-06-22-what-is-an-nexus-core-developer/) - _Hudson Jameson_
- [Tata Kelola, Bagian 2: Plutokrasi Masih Buruk](https://vitalik.ca/general/2018/03/28/plutocracy.html) - _Vitalik Buterin_
- [Bergerak melampaui tata kelola pengambilan suara koin](https://vitalik.ca/general/2021/08/16/voting3.html) - _Vitalik Buterin_
