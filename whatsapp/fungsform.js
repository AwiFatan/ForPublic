function susunpesan(nama, phone, email, namabarang, kotaasal, kotatujuan, pengiriman, pertanyaan) {
            var WA1 = "6281230255067";
            var WA2 = "6281333133107";
            var WA3 = "6281230255067";
            var WA4 = "6281333133107";
            var pembuka = "Pembuka "
            var penutup = "Penutup "
            var pesan = pembuka + "\n" +
                "Nama : " + nama + "\n" +
                "Telpon : " + phone + "\n" +
                "eMail : " + email + "\n" +
                "Nama Barang : " + namabarang + "\n" +
                "Kota & Negara Asal : " + kotaasal + "\n" +
                "Kota Tujuan : " + kotatujuan + "\n" +
                "Pengiriman : " + pengiriman + "\n" +
                "Pertanyaan : " + pertanyaan + "\n" +
                penutup;

            sendWA(WA1, WA2, WA3, WA4, pesan)


        }
