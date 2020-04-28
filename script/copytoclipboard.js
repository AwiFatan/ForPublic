 function klik() {
            var copyText = document.getElementById("af_pesan");
            copyText.select();
            document.execCommand("copy");
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
        }
