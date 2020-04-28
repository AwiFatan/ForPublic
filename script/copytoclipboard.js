 function klik() {
var copyText = document.getElementById("af_pesan");
              copyText.select();
copyText.addEventListener("click", clickHandler, false);

           
        }
function clickHandler(e) {
  document.exeCommand('copy');
}
 
