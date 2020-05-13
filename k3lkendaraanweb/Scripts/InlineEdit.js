function addCommas(nStr) {
    var val = nStr;
    val = val.replace(/[^0-9\.]/g, '');

    if (val != "") {
        valArr = val.split('.');
        valArr[0] = (parseInt(valArr[0], 10)).toLocaleString();
        val = valArr.join('.');
    }

    this.value = val;
    return val;
}
function doubledot(val) {
    var regex = /\d{2}/g;
    var val1 = val;
    if (val1.match(regex) && !val1.match(/:/)) {
        val1 += ':';
    }
    return val1;
}
function pilih(isi, isi2, objecta, objectb) {
    $('.col-sm-6').css('display', 'none');
    document.getElementById(objecta).value = isi;
    if (objectb != 'undefined') {
        if (document.getElementById(objectb) != null) {
            document.getElementById(objectb).value = isi2;
        }

    } 

    iDiv.remove();
    if (document.getElementById(objecta).className == 'change1') {
        $(".change1").trigger('change');
    }

}
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
function showmodal(URL, object1, object2) {
    $.ajax(
        {
            type: "POST",
            data: {},
            url: URL,
            contentType: "application/json",
            dataType: "json",
            success: function (response) {

                if (object1.constructor === Array) {
                    for (var i = 0; i < object1.length; i++) {
                        var head = object1[i].split('_');
                    }
                }
                else {
                    var head = object1.split('_');
                }
                if (object2.constructor === Array) {
                    for (var j = 0; j < object2.length; j++) {
                        if (object2[j] != 'undefined') {
                            var head2 = object2[j].split('_');
                        }
                    }
                }
                else {
                    var head2 = object2.split('_');
                }

                var isi = '';
                var isi2 = '';
                iDiv = document.createElement("div");
                iDiv.id = 'mpopupBox';
                iDiv.className = 'mpopup';
                var iDivsub1 = document.createElement("div");
                iDivsub1.className = 'mpopup-content';
                var iDivsub3 = document.createElement("div");
                iDivsub3.className = 'mpopup-head';
                var iDivsub2 = document.createElement("div");
                iDivsub2.className = 'mpopup-main';

                var iDivsub4 = document.createElement("div");
                iDivsub4.className = 'table-responsive';

                var iDivsub5 = document.createElement("div");
                iDivsub5.className = 'ibox-content';

                var span = document.createElement("span");
                span.className = 'close';
                span.innerHTML = 'X';

                table1 = document.createElement("table");
                table1.id = 'table1';
                table1.className = 'table table-striped table-bordered table-hover dataTables-example';
                var tbody = document.createElement("tbody");
                var thead = document.createElement("thead");
                var trhead = document.createElement("tr");

                var th = document.createElement("th");
                var th2 = document.createElement("th");
                var th3 = document.createElement("th");

                trhead.appendChild(th);
                th.innerHTML += head[0];

                if (object2 != 'undefined') {
                    trhead.appendChild(th2);
                    th2.innerHTML += head2[0];
                }
                trhead.appendChild(th3);
                th3.innerHTML += '';

                thead.appendChild(trhead);

                for (var i = 0; i < response.d.length; i++) {
                    var tr = document.createElement("tr");
                    var td2 = document.createElement("td");
                    var td = document.createElement("td");
                    var td3 = document.createElement("td");
                    isi = response.d[i].kode;
                    isi2 = response.d[i].desc;
                    td.innerHTML = response.d[i].kode;
                    if (response.d[i].desc != '') {
                        td3.innerHTML = response.d[i].desc;
                    }
                    td2.innerHTML += '<input type="submit" value="pilih" onclick="pilih(\'' + isi + '\',\'' + isi2 + '\',\'' + object1 + '\',\'' + object2 + '\')"/>';
                    tr.appendChild(td);

                    if (response.d[i].desc != '') {
                        tr.appendChild(td3);
                    }
                    tr.appendChild(td2);
                    tbody.appendChild(tr);
                }

                table1.appendChild(thead);
                table1.appendChild(tbody)
                iDivsub3.appendChild(span);
                iDivsub1.appendChild(iDivsub3);
                iDivsub1.appendChild(iDivsub2);
                iDivsub4.appendChild(table1);
                iDivsub5.appendChild(iDivsub4);
                iDivsub2.appendChild(iDivsub5);

                iDiv.appendChild(iDivsub1)

                document.body.appendChild(iDiv);
                iDiv.style.display = 'block';
                var table = $('#table1').DataTable();
                table.draw();
                span.onclick = function () {
                    // iDiv.style.display = "none";
                    iDiv.remove();
                }

            },
            error: function (response) {
                alert("error");
            }
        });

}
function showpopupForm(object1, object2,URL) {
    $.ajax(
        {
            type: "POST",
            data: {},
            url: URL,
            contentType: "application/json",
            dataType: "json",
            success: function (response) {
               
                if (object1.constructor === Array) {
                    for (var i = 0; i < object1.length; i++) {
                        var head = object1[i].split('_');
                    }
                }
                else {
                    var head = object1.split('_');
                }
                if (object2.constructor === Array) {
                    for (var j = 0; j < object2.length; j++) {
                        if (object2[j] != 'undefined') {
                            var head2 = object2[j].split('_');
                        }
                    }
                }
                else {
                    var head2 = object2.split('_');
                }

                var isi = '';
                var isi2 = '';
                iDiv = document.createElement("div");
                iDiv.id = 'mpopupBox';
                iDiv.className = 'mpopup';
                var iDivsub1 = document.createElement("div");
                iDivsub1.className = 'mpopup-content';
                var iDivsub3 = document.createElement("div");
                iDivsub3.className = 'mpopup-head';
                var iDivsub2 = document.createElement("div");
                iDivsub2.className = 'mpopup-main';

                var iDivsub4 = document.createElement("div");
                iDivsub4.className = 'table-responsive';

                var iDivsub5 = document.createElement("div");
                iDivsub5.className = 'ibox-content';

                var span = document.createElement("span");
                span.className = 'close';
                span.innerHTML = 'X';

                table1 = document.createElement("table");
                table1.id = 'table1';
                table1.className = 'table table-striped table-bordered table-hover dataTables-example';
                var tbody = document.createElement("tbody");
                var thead = document.createElement("thead");
                var trhead = document.createElement("tr");

                var th = document.createElement("th");
                var th2 = document.createElement("th");
                var th3 = document.createElement("th");

                trhead.appendChild(th);
                th.innerHTML += head[0];

                if (object2 != 'undefined') {
                    trhead.appendChild(th2);
                    th2.innerHTML += head2[0];
                }
                trhead.appendChild(th3);
                th3.innerHTML += '';

                thead.appendChild(trhead);

                for (var i = 0; i < response.d.length; i++) {
                    var tr = document.createElement("tr");
                    var td2 = document.createElement("td");
                    var td = document.createElement("td");
                    var td3 = document.createElement("td");
                    isi = response.d[i].kode;
                    isi2 = response.d[i].desc;
                    td.innerHTML = response.d[i].kode;
                    if (response.d[i].desc != '') {
                        td3.innerHTML = response.d[i].desc;
                    }
                    td2.innerHTML += '<input type="submit" value="pilih" onclick="pilih(\'' + isi + '\',\'' + isi2 + '\',\'' + object1 + '\',\'' + object2 + '\')"/>';
                    tr.appendChild(td);

                    if (response.d[i].desc != '') {
                        tr.appendChild(td3);
                    }
                    tr.appendChild(td2);
                    tbody.appendChild(tr);
                }

                table1.appendChild(thead);
                table1.appendChild(tbody)
                iDivsub3.appendChild(span);
                iDivsub1.appendChild(iDivsub3);
                iDivsub1.appendChild(iDivsub2);
                iDivsub4.appendChild(table1);
                iDivsub5.appendChild(iDivsub4);
                iDivsub2.appendChild(iDivsub5);

                iDiv.appendChild(iDivsub1)

                document.body.appendChild(iDiv);
                iDiv.style.display = 'block';
                var table = $('#table1').DataTable();
                table.draw();
                $('.col-sm-6').css('display', 'inline');
                span.onclick = function () {
                    $('.col-sm-6').css('display', 'none');
                    iDiv.remove();
                }

            },
            error: function (response) {
                alert("error");
            }
        });
   
   
}