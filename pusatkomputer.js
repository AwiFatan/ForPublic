
        var kode = "AKfycbyo7AP5XNbXtqmtKkiyTa-_cUW0DPyU5T3YWW4NUs-m87pCqJqjcyHlZWSihZqOTotDNg";
        var script_url = "https://script.google.com/macros/s/" + kode + "/exec";
        var url = script_url + "?action=read";
        $.getJSON(url, function (json) {

            var tabelawal = `<div class="table-responsive "><table class="table table-striped">`
            var tebeltutup = `</table></div>`
            // <th scope="col">Merk</th>
            var tabelhead = `
            <th scope="col">Tipe Merk</th>
            <th scope="col" style="width:15%" ></th>
            <th scope="col" style="width:30%" >Harga</th>
            `
            var tabelbody = ''
            str = '';
            var strProsessor = ''
            var strMotherboard = ''
            var strProsessorIntel = ''
            var strProsessorAMD = ''
            var strMotherboardMSI = ''
            var strMotherboardASROCK = ''
            var strMotherboardGIGABYTE = ''
            var strMotherboardASUS = ''
            var strMotherboardGALAX = ''

            for (i = 0; i < json.records.length; i++) {
                var tipe = json.records[i].tipe;
                var merk = json.records[i].merk;
                var tipemerk = json.records[i].tipemerk;
                var satuan = json.records[i].satuan;
                var hj = json.records[i].hargajual;
                y = i + 1;
                switch (tipe) {
                    case "Prosessor":
                        switch (merk) {
                            case "INTEL":
                                strProsessorIntel += `<tr>
                    <td scope="col" >` + tipemerk + `</td>
                    <td scope="col" >Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>
                    `
                                break;
                            case "AMD":
                                strProsessorAMD += `<tr>
                    <td scope="col">` + tipemerk + `</td>
                    <td scope="col">Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>`
                                break;
                        }
                        break;
                    case "Motherboard":
                        switch (merk) {
                            case "MSI":
                                strMotherboardMSI += `<tr>
                    <td scope="col">` + tipemerk + `</td>
                    <td scope="col">Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>`
                                break;

                                break;
                            case "ASROCK":
                                strMotherboardASROCK += `<tr>
                    <td scope="col">` + tipemerk + `</td>
                    <td scope="col">Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>`
                                break;
                                break;
                            case "GIGABYTE":
                                strMotherboardGIGABYTE += `<tr>
                    <td scope="col">` + tipemerk + `</td>
                    <td scope="col">Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>`
                                break;
                                break;
                            case "ASUS":
                                strMotherboardASUS += `<tr>
                    <td scope="col">` + tipemerk + `</td>
                    <td scope="col">Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>`
                                break;
                                break;
                            case "GALAX":
                                strMotherboardGALAX += `<tr>
                    <td scope="col">` + tipemerk + `</td>
                    <td scope="col">Rp.</td>
                    <td scope="col" class="text-end">` + numberWithPoint(hj) + `</td></tr>`
                                break;
                                break;
                        }
                        default:
                            // code block
                }



            }
            infoIntel = "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>Intel</b></center></td></tr>"
            infoAMD = "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>AMD</b></center></td></tr>"
            infoMSI = "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>MSI</b></center></td></tr>"
            infoASROCK = "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>ASROCK</b></center></td></tr>"
            infoGIGABYTE =
                "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>GIGABYTE</b></center></td></tr>"
            infoASUS = "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>ASUS</b></center></td></tr>"
            infoGALAX = "<tr class=\"bg-warning\"><td colspan=\"3\"><center><b>GALAX</b></center></td></tr>"

            judulprosesor ="<h2>Prosessor </h2>" 
            presessorstr1 = tabelawal + tabelhead + infoIntel + strProsessorIntel + tebeltutup;
            presessorstr2 = tabelawal + tabelhead + infoAMD + strProsessorAMD + tebeltutup;
            judulmotherboard = "<h2>Motherboard </h2>"
            motherboardstr1 = tabelawal + tabelhead + infoMSI + strMotherboardMSI +  tebeltutup;
            motherboardstr2 = tabelawal + tabelhead + infoASROCK + strMotherboardASROCK + tebeltutup;
            motherboardstr3 = tabelawal + tabelhead + infoGIGABYTE + strMotherboardGIGABYTE + tebeltutup;
            motherboardstr4 = tabelawal + tabelhead + infoASUS + strMotherboardASUS + tebeltutup;
            motherboardstr5 = tabelawal + tabelhead + infoGALAX + strMotherboardGALAX + tebeltutup;

            joinstr1=judulprosesor +`<div class="row"><div class="col-md-6">`+presessorstr1+`</div><div class="col-md-6">`+presessorstr2+`</div></div>`
            joinstr2=judulmotherboard +`<div class="row">
                <div class="col-md-6">`+motherboardstr1+`</div>
                <div class="col-md-6">`+motherboardstr2+`</div>
                <div class="col-md-6">`+motherboardstr3+`</div>
                <div class="col-md-6">`+motherboardstr4+`</div>
                <div class="col-md-6">`+motherboardstr5+`</div>
                </div>`

            // document.getElementById("output").innerHTML = presessorstr1 + presessorstr2 + motherboardstr1 +          motherboardstr2 + motherboardstr3 + motherboardstr4 + motherboardstr5
            document.getElementById("output").innerHTML = joinstr1+joinstr2

            function numberWithCommas(x) {
                x = x.toString();
                var pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(x))
                    x = x.replace(pattern, "$1,$2");
                return x;
            }
            function numberWithPoint(x) {
                x = x.toString();
                var pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(x))
                    x = x.replace(pattern, "$1.$2");
                return x;
            }

        });
