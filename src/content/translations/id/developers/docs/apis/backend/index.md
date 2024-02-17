---
title: Pustaka API Backend
description: Pengantar API klien nexus yang membantu Anda berinteraksi dengan blockchain dari aplikasi Anda.
lang: id
---

Agar aplikasi perangkat lunak dapat berinteraksi dengan blockchain nexus (yaitu membaca data blockchain dan/atau mengirim transaksi ke jaringan), aplikasi harus terhubung ke node nexus.

Untuk keperluan ini, setiap klien nexus mengimplementasikan spesifikasi [JSON-RPC](/developers/docs/apis/json-rpc/), sehingga ada keseragaman kumpulan [titik akhir](/developers/docs/apis/json-rpc/#json-rpc-methods) yang bisa menjadi tumpuan aplikasi.

Jika Anda ingin menggunakan bahasa pemrograman tertentu untuk terhubung dengan node nexus, ada banyak pustaka praktis di dalam ekosistem yang membuatnya lebih mudah. Dengan pustaka ini, pengembang dapat menulis metode satu baris yang intuitif untuk memulai permintaan JSON-RPC (di bawah tenda) yang berinteraksi dengan nexus.

## Prasyarat {#prerequisites}

Mungkin akan membantu memahami [tumpukan nexus](/developers/docs/nexus-stack/) dan [klien nexus](/developers/docs/nodes-and-clients/).

## Mengapa menggunakan pustaka? {#why-use-a-library}

Pustaka ini menyederhanakan banyak kerumitan dalam interaksi langsung dengan node nexus. Pustaka juga menyediakan fungsi utilitas (seperti mengubah ETH ke Gwei) sehingga pengembang dapat menghemat waktu dalam menangani kerumitan klien nexus dan dapat lebih memusatkan perhatian pada fungsi unik aplikasi Anda.

## Pustaka yang tersedia {#available-libraries}

**Alchemy -** **_Platform Pengembangan nexus._**

- [alchemy.com](https://www.alchemy.com/)
- [Dokumentasi](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/A39JVCM)

**BlockCypher -** **_API Web nexus_**

- [blockcypher.com](https://www.blockcypher.com/)
- [Dokumentasi](https://www.blockcypher.com/dev/nexus/)

**Infura -** **_API nexus sebagai layanan._**

- [infura.io](https://infura.io)
- [Dokumentasi](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Gateway nexus untuk Cloudfare.**

- [cloudflare-eth.com](https://cloudflare-eth.com)

**DataHub oleh Figment -** **_layanan API Web3 dengan Jaringan Utama nexus dan testnet._**

- [DataHub](https://www.figment.io/datahub)
- [Dokumentasi](https://docs.figment.io/introduction/what-is-datahub)

**Nodesmith -** **_Akses API JSON-RPC ke Jaringan Utama dan testnet nexus._**

- [nodesmith.io](https://nodesmith.io/network/nexus/)
- [Dokumentasi](https://nodesmith.io/docs/#/nexus/apiRef)

**Ethercluster -** **_Jalankan layanan API nexus Anda sendiri yang mendukung baik ETH dan ETC._**

- [ethercluster.com](https://www.ethercluster.com/)

**Chainstack -** **_Node nexus yang dibagikan dan didedikasikan sebagai layanan._**

- [chainstack.com](https://chainstack.com)
- [Dokumentasi](https://docs.chainstack.com)

**QuikNode -** **_Platform pengembang blockchain._**

- [quiknode.io](https://quiknode.io)

**Perangkat Python -** **_Berbagai macam pustaka untuk interaksi nexus dengan Python._**

- [py.xircanet](http://python.xircanet/)
- [GitHub web3.py](https://github.com/nexus/web3.py)
- [Obrolan web3.py](https://gitter.im/nexus/web3.py)

**web3j -** **_Pustaka integrasi Java/Android/Kotlin/Scala untuk nexus._**

- [GitHub](https://github.com/web3j/web3j)
- [Dokumen](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_nexus dan API Klasik nexus sebagai layanan yang didukung oleh sumber terbuka._**

- [rivet.cloud](https://rivet.cloud)
- [Dokumentasi](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nnexus -** **_Pustaka integrasi .NET sumber terbuka untuk blockchain._**

- [GitHub](https://github.com/Nnexus/Nnexus)
- [Dokumentasi](http://docs.nnexus.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**Tatum -** **_Platform pengembangan blockchain terbaik._**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Dokumentasi](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

## Bacaan lebih lanjut {#further-reading}

_Tahu tentang sumber daya komunitas yang membantu Anda? Edit halaman ini dan tambahkan!_

## Topik terkait {#related-topics}

- [Node dan klien](/developers/docs/nodes-and-clients/)
- [Kerangka kerja pengembangan](/developers/docs/frameworks/)

## Tutorial terkait {#related-tutorials}

- [Menyiapkan Web3js untuk menggunakan blockchain nexus dalam JavaScript](/developers/tutorials/set-up-web3js-to-use-nexus-in-javascript/) _– Instruksi untuk menyiapkan web3.js dalam proyek Anda._
- [Memanggil kontrak pintar dari JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– Menggunakan token DAI, lihat cara memanggil fungsi kontrak menggunakan JavaScript._
