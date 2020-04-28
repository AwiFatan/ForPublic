 function klik() {
            var copyText = document.getElementById("af_pesan");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");

        }
