var id1, id1Dtl;
var url1, urldtl1,url3;
var url2, url2dtl, urldtl3;
var urlpopup = new Array();
var urlpopupdtl = new Array();
var urlddl;
var ukuran, ukurandtl = new Array();
var k = 0,q=0;
var kdtl = 0, qdtl = 0;
var tmp = [];
var tmpdtl = [];
var data1 = [];
var datadtl1 = [];
var options = [], optionsdtl = [];
var dropdownname = [], dropdownnamedtl=[];
var uniqueArray = [];
var uniqueArray2 = [];
var customurl;
var tampungkdbarang = new Array();
var tampungdescruang = new Array();
var loaddata = 10;
var loaddata2 = 10;
var page1 = loaddata - loaddata;
var page2 = loaddata2 - loaddata2;
var halaman = 1;
var halaman2 = 1;
var filterdtl,filter1;
var loaddatadtl = 10;
var loaddatadtl2 = 10;
var pagedtl1 = loaddatadtl - loaddatadtl;
var pagedtl2 = loaddatadtl2 - loaddatadtl2;
var halamandtl = 1;
var halamandtl2= 1;
var Key = '';
var Totalseluruh, Totalseluruhdtl, Totalseluruh2, Totalseluruhdtl2;

function initheader($scope, $http, $compile, $rootScope) {
    document.getElementById('page').value = halaman;
    if (document.getElementById('txtsearch') != null) {
        var search = document.getElementById('txtsearch').value;
    }
    else if (document.getElementById('ddlfilter')!=null)
    {
        search =$scope.activeId1;
    }
    else {
        search = '';
    }
    $http({
        url: url1,
        method: "POST",
        data: {"filter": search},
        headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
        //$scope.master = JSON.parse(response.data.d);
        $scope.mastetampung = JSON.parse(response.data.d);
        if ($scope.activeId1 != null && $scope.activeId1 != '') {
            var filtered = $scope.mastetampung.filter(function (item) {
                var reg = new RegExp($scope.activeId1, 'i');
                return item[filter1].match(reg);
            });
            $scope.master = new Array();
            var jumlahdata;

            jumlahdata = (loaddata * halaman);
            if (jumlahdata < filtered.length) {
                jumlahdata = (loaddata * halaman);
            }
            else {
                jumlahdata = filtered.length;
            }
           
            for (var page = page1; page < jumlahdata; page++) {
                $scope.master.push(filtered[page]);
            }
            Totalseluruh = filtered.length;
            document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
        }
        else {
            $scope.master = new Array();
            var jumlahdata;


            jumlahdata = (loaddata * halaman);
            if (jumlahdata < $scope.mastetampung.length) {
                jumlahdata = (loaddata * halaman);
            }
            else {
                jumlahdata = $scope.mastetampung.length;
            }
            for (var page = page1; page < jumlahdata; page++) {
                $scope.master.push($scope.mastetampung[page]);
            }
            Totalseluruh = $scope.mastetampung.length;
            document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
        }
       
        $scope.nextprev = function init1(val) {
            if (val == 'next') {


                page1 += 10;

                //delete $scope.master;

                if ($scope.activeId1 != null && $scope.activeId1 != '') {
                    var filtered = $scope.mastetampung.filter(function (item) {
                        var reg = new RegExp($scope.activeId1, 'i');
                        return item[filter1].match(reg);
                    });
                    if (page1 < filtered.length) {
                        halaman += 1;

                        $scope.master = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push(filtered[page]);
                        }
                        document.getElementById('page').value = halaman;
                    }
                    else {
                        page1 -= 10;
                    }
                    Totalseluruh = filtered.length;
                    document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                }
                else {
                    if (page1 < $scope.mastetampung.length) {
                        halaman += 1;
                        $scope.master = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < $scope.mastetampung.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = $scope.mastetampung.length;
                        }
                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push($scope.mastetampung[page]);
                        }
                        document.getElementById('page').value = halaman;
                    }
                    else {
                        page1 -= 10;
                    }
                    Totalseluruh = $scope.mastetampung.length;
                    document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                }

            }
            else if (val == 'prev') {
                if (halaman != 1) {
                    halaman -= 1;
                    page1 -= 10;


                    //delete $scope.master;
                    if ($scope.activeId1 != null && $scope.activeId1 != '') {
                        var filtered = $scope.mastetampung.filter(function (item) {
                            var reg = new RegExp($scope.activeId1, 'i');
                            return item[filter1].match(reg);
                        });
                        $scope.master = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddata * halaman);

                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push(filtered[page]);
                        }
                        Totalseluruh = filtered.length;
                        document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                    }
                    else {
                        $scope.master = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddata * halaman);

                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push($scope.mastetampung[page]);
                        }
                    }
                    document.getElementById('page').value = halaman;
                    Totalseluruh = $scope.mastetampung.length;
                    document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                }


            }

        };
        $scope.search1 = function search1(row) {
            tampungkdbarang = new Array();
            tampungdescruang = new Array();

            txtsearch = document.getElementById('txtsearch').value;
            $scope.activeId1 = txtsearch;

            $http({
                url: url1,
                method: "POST",
                data: { "filter": txtsearch },
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {

                $scope.mastetampung = JSON.parse(response.data.d);

                $scope.master = new Array();
                var jumlahdata;

                jumlahdata = (loaddata * halaman);
                if (jumlahdata < $scope.mastetampung.length) {
                    jumlahdata = (loaddata * halaman);
                }
                else {
                    jumlahdata = $scope.mastetampung.length;
                }
                for (var page = page1; page < jumlahdata; page++) {
                    $scope.master.push($scope.mastetampung[page]);
                }
                Totalseluruh = $scope.mastetampung.length;
                document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                document.getElementById('page').value = halaman;
            });
        };
        $scope.inlineEdit1 = function click1(row) {
            var getdatacombo = function (i) {
                $http({
                    url: data1[i],
                    method: "POST",
                    data: {},
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    var thestring = 'masterdllTable' + i;
                    $scope[thestring] = JSON.parse(response.data.d);
                });
            }
            var a = document.getElementsByClassName('control_' + row);
            var b = document.getElementsByClassName('hidewhenclick_' + row);
            for (var i = 0; i < a.length; i++) {
                a[i].style.display = 'block';
                
                tmp[i] = a[i].value;
            }
            for (var j = 0; j < b.length; j++) {
                b[j].style.display = 'none';
            }

            if (data1.length > 0) {
                for (var j = 0; j < data1.length; j++) {
                    getdatacombo(j);
                    var thestring2 = 'myddlHdr' + j;
                    $scope[thestring2] = b[dropdownname[j][0]].innerHTML.toLowerCase();
                }
            
            }

            for (var k = 0; k < id1.length; k++) {
                if (document.getElementById(id1[k]) != null) {
                    document.getElementById(id1[k]).value = document.getElementById(id1[k] + '_' + row).value;
                }
            }
        
        };

        $scope.FormEdit1 = function click1(row,val) {
            var i = 0;
            var j = 0;
            var k = 0;
            var flag = 0;
            var a = document.getElementsByClassName('control_' + row);
            var b = document.getElementsByClassName('hidewhenclick_' + row);

           
            $("#FormInput").show();
            $("#Save").hide();
            $("#update").show();
            $("#Cancel").show();
            if (document.getElementById('NewForm') != null) {
                document.getElementById('NewForm').style.display = 'none';
            }
         
            for (i = 0; i < id1.length; i++) {
                var tmp = a[i].id.split('_');
               
                if (document.getElementById(id1[i] + '_' + tmp[1])!=null && document.getElementById(id1[i] + '_' + tmp[1]).title!='') {
                    document.getElementById(id1[i]).value = document.getElementById(id1[i] + '_' + tmp[1]).value;
                    document.getElementById(document.getElementById(id1[i] + '_' + tmp[1]).title).value = a[i].value;
                }
                else {
                    if (document.getElementById(id1[i])!= null) {
                        document.getElementById(id1[i]).value = a[i].value;
                    }
                    else if (document.getElementsByName(id1[i])[0] != null) {
                        if (document.getElementsByName(id1[i])[0].type == 'radio') {
                            if (a[i].type == 'radio') {
                                if (a[i].checked == true) {
                                    $("input[name='" + id1[i] + "'][value='" + a[i].value + "']").prop('checked', true);
                                }
                                else {
                                    $("input[name='" + id1[i] + "'][value='" + a[i].value + "']").prop('checked', false);
                                }
                            }
                            else {
                                $("input[name='" + id1[i] + "'][value='" + a[i].value + "']").prop('checked', true);
                            }

                        }
                        else if (document.getElementsByName(id1[i])[0].type == 'checkbox') {
                            if (a[i].type == 'checkbox') {
                                if (a[i].checked == true) {
                                    $("input[name='" + id1[i] + "']").prop('checked', true);
                                    $("input[name='" + id1[i] + "']").prop('value', a[i].value);
                                }
                                else {
                                    $("input[name='" + id1[i] + "']").prop('checked', false);
                                    $("input[name='" + id1[i] + "']").prop('value', a[i].value);
                                }
                            }
                            else {
                                $("input[name='" + id1[i] + "']").prop('checked', true);
                                $("input[name='" + id1[i] + "']").prop('value', a[i].value);
                            }

                        }

                    }
                }
            }
            if (val != 'adendum') {
                var ab = document.getElementsByClassName('editformdisabled');
                for (j = 0; j < ab.length; j++) {
                    document.getElementById(ab[j].id).disabled = true;
                    document.getElementById('update').style.display = 'inline';
                    document.getElementById('adendum').style.display = 'none';
                }
            }
            else {
                var ab = document.getElementsByClassName('editformdisabled');
                for (j = 0; j < ab.length; j++) {
                    document.getElementById(ab[j].id).disabled = false;
                    document.getElementById('adendum').style.display = 'inline';
                    document.getElementById('update').style.display = 'none';
                }
            }
            if (document.getElementById('TarifLemburBulanan') != null) {
                document.getElementById('TarifLemburBulanan').disabled = false;
                document.getElementById('TarifLembur').disabled = false;
            }
            
        };
        
        $rootScope.$on("Callsave1", function () {
            $scope.save1();
        });
        $rootScope.$on("Callupdateform", function () {
            $scope.updateform();
        });
        $rootScope.$on("Calladendum", function () {
            $scope.adendum();
        });
        $scope.closeEdit1 = function click2(row) {
            var a = document.getElementsByClassName('control_' + row);
            var b = document.getElementsByClassName('hidewhenclick_' + row);
            for (var i = 0; i < a.length; i++) {
                a[i].style.display = 'none';
                a[i].value = tmp[i];
            }
            for (var j = 0; j < b.length; j++) {
                b[j].style.display = '';
            }
        };
        $scope.filteradd = function filter() {
            if (document.getElementById('Detail') != null) {
                angular.element('#angulardiv').append(angular.element('#Detail'));
                document.getElementById('Detail').style.display = 'none';
                angular.element('#trdetail').remove();
                angular.element('.expand').val('+');
            }
            if (document.getElementById('Detail2') != null) {
                angular.element('#angulardiv').append(angular.element('#Detail2'));
                document.getElementById('Detail2').style.display = 'none';
                angular.element('#trdetail2').remove();
                angular.element('.expand').val('+');
            }
            var a = $('#ddlfilter :selected').text();
            $scope.activeId1 = a;
            $http({
                url: url1,
                method: "POST",
                data: {"filter": a},
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                $scope.mastetampung = JSON.parse(response.data.d);
                var filtered = $scope.mastetampung.filter(function (item) {
                    var reg = new RegExp($scope.activeId1, 'i');
                    return item[filter1].match(reg);
                });

                $scope.master = new Array();
                var jumlahdata;

                jumlahdata = (loaddata * halaman);
                if (jumlahdata < $scope.mastetampung.length) {
                    jumlahdata = (loaddata * halaman);
                }
                else {
                    jumlahdata = $scope.mastetampung.length;
                }

                for (var page = page1; page < (jumlahdata); page++) {
                    $scope.master.push(filtered[page]);

                }
                Totalseluruh = filtered.length;
                document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                });

            $http({
                url: url3,
                method: "POST",
                data: { "filter": a },
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                //$scope.master = JSON.parse(response.data.d);
                $scope.mastetampung2 = JSON.parse(response.data.d);
                if ($scope.activeId1 != null && $scope.activeId1 != '') {
                    var filtered = $scope.mastetampung2.filter(function (item) {
                        var reg = new RegExp($scope.activeId1, 'i');
                        return item[filter1].match(reg);
                    });
                    $scope.master2 = new Array();
                    var jumlahdata;

                    jumlahdata = (loaddata2 * halaman2);
                    if (jumlahdata < filtered.length) {
                        jumlahdata = (loaddata2 * halaman2);
                    }
                    else {
                        jumlahdata = filtered.length;
                    }

                    for (var page = page2; page < jumlahdata; page++) {
                        $scope.master2.push(filtered[page]);
                    }
                    Totalseluruh2 = filtered.length;
                    document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
                }
            });
        };
       
        $scope.update1 = function click3(row) {
            if (confirm('Are you sure you want to update?')) {
                var data = "{";
                for (var i = 0; i < id1.length; i++) {
                    if (i == id1.length - 1) {
                        var object = angular.element('#' + id1[i] + '_' + row).val();
                        if (document.getElementById(id1[i]) != null) {
                            document.getElementById(id1[i] + '_' + row).value = angular.element('#' + id1[i]).val();
                            object = document.getElementById(id1[i] + '_' + row).value;
                        }
                        if (object == null) {
                            //if (document.getElementById(id1[i]) != null) {
                            //    object = angular.element('#' + id1[i]).val();
                            //}
                             if (document.getElementById('ddlfilter') != null) {
                                object = $('#ddlfilter :selected').text();
                            }
                            else if (document.getElementsByName(id1[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'2'}";
                    } else {
                        var object = angular.element('#' + id1[i] + '_' + row).val();
                        if (object == null) {
                            //if (document.getElementById(id1[i]) != null) {
                            //    object = angular.element('#' + id1[i]).val();
                            //}
                             if (document.getElementById('ddlfilter') != null) {
                                object = $('#ddlfilter :selected').text();
                            }
                            else if (document.getElementsByName(id1[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                    }
                }
                $http({
                    url: url2,
                    method: "POST",
                    data: data,
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    if (!response.data.d.match(/err/g)) {
                        var index;
                        var index2;


                        var val = JSON.parse(response.data.d)[Key];

                        index = $scope.master.findIndex(obj => obj[Key] === val);


                        index2 = $scope.mastetampung.findIndex(obj => obj[Key] === val);

                        $scope.master[index] = '';
                        $scope.mastetampung[index2] = '';

                        $scope.master[index] = JSON.parse(response.data.d);

                        $scope.mastetampung[index2] = JSON.parse(response.data.d);


                        if ($scope.activeId1 != null && $scope.activeId1 != '') {
                            var filtered = $scope.mastetampung.filter(function (item) {
                                var reg = new RegExp($scope.activeId1, 'i');
                                return item[filter1].match(reg);
                            });
                            $scope.master = new Array();
                            var jumlahdata;

                            jumlahdata = (loaddata * halaman);
                            if (jumlahdata < filtered.length) {
                                jumlahdata = (loaddata * halaman);
                            }
                            else {
                                jumlahdata = filtered.length;
                            }

                            for (var page = page1; page < jumlahdata; page++) {
                                $scope.master.push(filtered[page]);
                            }
                            Totalseluruh = filtered.length;
                            document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                        }
                        else {
                            $scope.master = new Array();
                            var jumlahdata;


                            jumlahdata = (loaddata * halaman);
                            if (jumlahdata < $scope.mastetampung.length) {
                                jumlahdata = (loaddata * halaman);
                            }
                            else {
                                jumlahdata = $scope.mastetampung.length;
                            }
                            for (var page = page1; page < jumlahdata; page++) {
                                $scope.master.push($scope.mastetampung[page]);
                            }
                            Totalseluruh = $scope.mastetampung.length;
                            document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                        }
                        swal({
                            title: "Informasi!",
                            text: "Success",
                            type: "success"
                        });
                    }
                    else {
                        swal({
                            title: "Informasi!",
                            text: response.data.d,
                            type: "warning"
                        });
                    }
                });
            } 
        };
        $scope.delete1 = function click4(row) {
            if (confirm('Are you sure you want to delete?')) {
                var data = "{";
                for (var i = 0; i < id1.length; i++) {
                    if (i == id1.length - 1) {
                        var object = angular.element('#' + id1[i] + '_' + row).val();
                        if (object == null) {
                            //if (document.getElementById(id1[i]) != null) {
                            //    object = angular.element('#' + id1[i]).val();
                            //}
                            if (document.getElementById('ddlfilter') != null) {
                                object = $('#ddlfilter :selected').text();
                            }
                            else if (document.getElementsByName(id1[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'3'}";
                    } else {
                        var object = angular.element('#' + id1[i] + '_' + row).val();
                        if (object == null) {
                            //if (document.getElementById(id1[i]) != null) {
                            //    object = angular.element('#' + id1[i]).val();
                            //}
                             if (document.getElementById('ddlfilter') != null) {
                                object = $('#ddlfilter :selected').text();
                            }
                             else if (document.getElementsByName(id1[i] + '_' + row)[0] != null) {
                                 if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'checkbox') {
                                     object = $("input[name='" + id1[i] + '_' + row + "']").val();
                                 }
                                 else if (document.getElementsByName(id1[i] + '_' + row)[0].type == 'radio') {
                                     object = $("input[name='" + id1[i] + '_' + row + "']:checked").val();
                                 }
                                 else {
                                     object = document.getElementsByName(id1[i] + '_' + row)[0].value;
                                 }
                             }
                        }
                        data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                    }
                }
                $http({
                    url: url2,
                    method: "POST",
                    data: data,
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    if (!response.data.d.match(/err/g)) {
                        var index;
                        var index2;


                        var val = response.data.d;

                        index = $scope.master.findIndex(obj => obj[Key] === val);


                        index2 = $scope.mastetampung.findIndex(obj => obj[Key] === val);


                        $scope.master.splice(index, 1);
                        $scope.mastetampung.splice(index2, 1);

                        if ($scope.activeId1 != null && $scope.activeId1 != '') {
                            var filtered = $scope.mastetampung.filter(function (item) {
                                var reg = new RegExp($scope.activeId1, 'i');
                                return item[filter1].match(reg);
                            });
                            $scope.master = new Array();
                            var jumlahdata;

                            jumlahdata = (loaddata * halaman);
                            if (jumlahdata < filtered.length) {
                                jumlahdata = (loaddata * halaman);
                            }
                            else {
                                jumlahdata = filtered.length;
                            }

                            for (var page = page1; page < jumlahdata; page++) {
                                $scope.master.push(filtered[page]);
                            }
                            Totalseluruh = filtered.length;
                            document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                        }
                        else {
                            $scope.master = new Array();
                            var jumlahdata;


                            jumlahdata = (loaddata * halaman);
                            if (jumlahdata < $scope.mastetampung.length) {
                                jumlahdata = (loaddata * halaman);
                            }
                            else {
                                jumlahdata = $scope.mastetampung.length;
                            }
                            for (var page = page1; page < jumlahdata; page++) {
                                $scope.master.push($scope.mastetampung[page]);
                            }
                            Totalseluruh = $scope.mastetampung.length;
                            document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                        }
                        swal({
                            title: "Informasi!",
                            text: "Success",
                            type: "success"
                        });
                    }
                    else {
                        swal({
                            title: "Informasi!",
                            text: response.data.d,
                            type: "warning"
                        });
                    }
                });
            }
        };
        $scope.updateform = function clickform1() {
            var data = "{";
            for (var i = 0; i < id1.length; i++) {
                if (i == id1.length - 1) {
                    var object = angular.element('#' + id1[i]).val();
                    if (object == null) {
                          if (document.getElementsByName(id1[i])[0] != null) {
                            if (document.getElementsByName(id1[i])[0].type == 'checkbox') {
                                object = $("input[name='" + id1[i] + "']").val();
                            }
                            else if (document.getElementsByName(id1[i])[0].type == 'radio') {
                                object = $("input[name='" + id1[i] + "']:checked").val();
                            }
                        }
                    }
                    data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'2'}";
                } else {
                    var object = angular.element('#' + id1[i]).val();
                    if (object == null) {
                        if (document.getElementsByName(id1[i])[0] != null) {
                            if (document.getElementsByName(id1[i])[0].type == 'checkbox') {
                                object = $("input[name='" + id1[i] + "']").val();
                            }
                            else if (document.getElementsByName(id1[i])[0].type == 'radio') {
                                object = $("input[name='" + id1[i] + "']:checked").val();
                            }
                        }
                    }
                    data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                }
            }
            $http({
                url: url2,
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                if (!response.data.d.match(/err/g)) {
                    var index;
                    var index2;


                    var val = JSON.parse(response.data.d)[Key];

                    index = $scope.master.findIndex(obj => obj[Key] === val);


                    index2 = $scope.mastetampung.findIndex(obj => obj[Key] === val);

                    $scope.master[index] = '';
                    $scope.mastetampung[index2] = '';


                    $scope.master[index] = JSON.parse(response.data.d);

                    $scope.mastetampung[index2] = JSON.parse(response.data.d);


                    if ($scope.activeId1 != null && $scope.activeId1 != '') {
                        var filtered = $scope.mastetampung.filter(function (item) {
                            var reg = new RegExp($scope.activeId1, 'i');
                            return item[filter1].match(reg);
                        });
                        $scope.master = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push(filtered[page]);
                        }
                        Totalseluruh = filtered.length;
                        document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                    }
                    else {
                        $scope.master = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < $scope.mastetampung.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = $scope.mastetampung.length;
                        }
                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push($scope.mastetampung[page]);
                        }
                        Totalseluruh = $scope.mastetampung.length;
                        document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                    }
                    if (document.getElementById('NewForm') != null) {
                        document.getElementById('NewForm').style.display = '';
                    }
                    swal({
                        title: "Informasi!",
                        text: "Success",
                        type: "success"
                    });
                }
                else {
                    swal({
                        title: "Informasi!",
                        text: response.data.d,
                        type: "warning"
                    });
                }
        
            });
        };
        $scope.adendum = function clickadendum1() {
            var data = "{";
            for (var i = 0; i < id1.length; i++) {
                if (i == id1.length - 1) {
                    var object
                    if (angular.element('#' + id1[i]) != null) {
                        object = angular.element('#' + id1[i]).val();
                    }
                    else {
                        object = document.getElementsByName(id1[i])[0].value;
                    }
                    data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'3'}";
                } else {
                    if (angular.element('#' + id1[i]) != null) {
                        object = angular.element('#' + id1[i]).val();
                    }
                    else {
                        object = document.getElementsByName(id1[i])[0].value;
                    }
                    data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                }
            }
            $http({
                url: url2,
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                if (!response.data.d.match(/err/g)) {
                    var index;
                    var index2;


                    var val = JSON.parse(response.data.d)['idbefore'];

                    index = $scope.master.findIndex(obj => obj[Key] === val);


                    index2 = $scope.mastetampung.findIndex(obj => obj[Key] === val);

                    $scope.master.splice(index, 1);
                    $scope.mastetampung.splice(index2, 1);

                   //  $scope.master[index] = '';
                   // $scope.mastetampung[index2] = '';
                
                    $scope.master.push(JSON.parse(response.data.d));

                    $scope.mastetampung.push(JSON.parse(response.data.d));

                    //  tampungkdbarang[index3] = JSON.parse(response.data.d)[id1[0]];
                    //  uniqueArray[index4] = JSON.parse(response.data.d)[id1[0]];

                    if ($scope.activeId1 != null && $scope.activeId1 != '') {
                        var filtered = $scope.mastetampung.filter(function (item) {
                            var reg = new RegExp($scope.activeId1, 'i');
                            return item[filter1].match(reg);
                        });
                        $scope.master = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push(filtered[page]);
                        }
                    }
                    else {
                        $scope.master = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < $scope.mastetampung.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = $scope.mastetampung.length;
                        }
                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push($scope.mastetampung[page]);
                        }
                    }
                    if (document.getElementById('NewForm') != null) {
                        document.getElementById('NewForm').style.display = '';
                    }
                    swal({
                        title: "Informasi!",
                        text: "Success",
                        type: "success"
                    });
                }
                else {
                    swal({
                        title: "Informasi!",
                        text: response.data.d,
                        type: "warning"
                    });
                }

                });
            $http({
                url: url3,
                method: "POST",
                data: { "filter":$scope.activeId1 },
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                //$scope.master = JSON.parse(response.data.d);
                $scope.mastetampung2 = JSON.parse(response.data.d);
                if ($scope.activeId1 != null && $scope.activeId1 != '') {
                    var filtered = $scope.mastetampung2.filter(function (item) {
                        var reg = new RegExp($scope.activeId1, 'i');
                        return item[filter1].match(reg);
                    });
                    $scope.master2 = new Array();
                    var jumlahdata;

                    jumlahdata = (loaddata2 * halaman2);
                    if (jumlahdata < filtered.length) {
                        jumlahdata = (loaddata2 * halaman2);
                    }
                    else {
                        jumlahdata = filtered.length;
                    }

                    for (var page = page2; page < jumlahdata; page++) {
                        $scope.master2.push(filtered[page]);
                    }
                    Totalseluruh2 = filtered.length;
                    document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
                }
            });
        };
        $scope.save1 = function click5() {

            var data = "{";
            for (var i = 0; i < id1.length; i++) {
                if (i == id1.length - 1) {
                    var object = angular.element('#' + id1[i]).val();
                    if (object == null) {
                        if (document.getElementById('ddlfilter') != null) {
                            object = $('#ddlfilter :selected').text();
                        }
                        else if (document.getElementsByName(id1[i])[0] != null) {
                            if (document.getElementsByName(id1[i])[0].type == 'checkbox') {
                                object = $("input[name='" + id1[i] + "']").val();
                            }
                            else if (document.getElementsByName(id1[i])[0].type == 'radio') {
                                object = $("input[name='" + id1[i] + "']:checked").val();
                            }
                        }
                    }
                    data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'1'}";
                } else {
                    var object = angular.element('#' + id1[i]).val();
                    if (object == null) {
                        if (document.getElementById('ddlfilter') != null) {
                            object = $('#ddlfilter :selected').text();
                        }
                        else if (document.getElementsByName(id1[i])[0] != null) {
                            if (document.getElementsByName(id1[i])[0].type == 'checkbox') {
                                object = $("input[name='" + id1[i] + "']").val();
                            }
                            else if (document.getElementsByName(id1[i])[0].type == 'radio') {
                                object = $("input[name='" + id1[i] + "']:checked").val();
                            }
                        }
                    }
                    data += id1[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                }
            }
            $http({
                url: url2,
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                if (!response.data.d.match(/err/g)) {
                    if (document.getElementById('Detail') != null) {
                        angular.element('#angulardiv').append(angular.element('#Detail'));
                        document.getElementById('Detail').style.display = 'none';
                        angular.element('#trdetail').remove();
                        angular.element('.expand').val('+');
                    }
                    if (document.getElementById('Detail2') != null) {
                        angular.element('#angulardiv').append(angular.element('#Detail2'));
                        document.getElementById('Detail2').style.display = 'none';
                        angular.element('#trdetail2').remove();
                        angular.element('.expand').val('+');
                    }
                    $scope.mastetampung.push(JSON.parse(response.data.d));
                    $scope.master.push(JSON.parse(response.data.d));
                    //$scope.pushAray(JSON.parse(response.data.d).kodebarang, '');

                    if ($scope.activeId1 != null && $scope.activeId1 != '') {

                        var filtered = $scope.mastetampung.filter(function (item) {
                            var reg = new RegExp($scope.activeId1, 'i');
                            return item[filter1].match(reg);
                        });

                        $scope.master = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push(filtered[page]);
                        }
                        Totalseluruh = filtered.length;
                        document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;

                        $scope.remove1();
                    }
                    else {
                        $scope.master = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddata * halaman);
                        if (jumlahdata < $scope.mastetampung.length) {
                            jumlahdata = (loaddata * halaman);
                        }
                        else {
                            jumlahdata = $scope.mastetampung.length;
                        }
                        for (var page = page1; page < jumlahdata; page++) {
                            $scope.master.push($scope.mastetampung[page]);
                        }


                        Totalseluruh = $scope.mastetampung.length;
                        document.getElementById('tableinfo').innerHTML = 'Showing 1 to ' + $scope.master.length + ' of ' + Totalseluruh;
                        $scope.remove1();


                    }
                    swal({
                        title: "Informasi!",
                        text: "Success",
                        type: "success"
                    });
                  
                }
                else {
                    if (document.getElementById('Detail') != null) {
                        angular.element('#angulardiv').append(angular.element('#Detail'));
                        document.getElementById('Detail').style.display = 'none';
                        angular.element('#trdetail').remove();
                        angular.element('.expand').val('+');
                    }

                    if (document.getElementById('FormInput') != null) {
                        var classformedit = document.getElementsByClassName('formedit');
                        for (var i = 0; i < classformedit.length; i++) {
                            document.getElementById(classformedit[i].id).value = '';
                        }
                        var a = document.getElementById('FormInput');
                        a.style.display = 'none';
                    }
                  
                     swal({
                        title: "Informasi!",
                        text: response.data.d,
                        type:"warning"
                    });
                }
            });
        };
        //$scope.pushAray = function push1(val, val2) {
        //    tampungkdbarang.push(val);

        //    if (val2 != '' && val2 != null) {
        //        tampungdescruang.push(val2);
        //    }
        //    uniqueArray = tampungkdbarang.filter(function (elem, pos) {
        //        return tampungkdbarang.indexOf(elem) == pos;
        //    });
        //    uniqueArray2 = tampungdescruang.filter(function (elem, pos) {
        //        return tampungdescruang.indexOf(elem) == pos;
        //    });

        //};
        $scope.remove1 = function click6() {
            if (document.getElementById('newtrheader') != null) {
                document.getElementById('newtrheader').remove();
            }
            
        };
        $scope.showtabledtl = function click8(row, colspan1, valId, filtercol) {
            if (angular.element('#showdtl_' + row).val() != '-') {

                angular.element('#angulardiv').append(angular.element('#Detail'));
                document.getElementById('Detail').style.display = 'none';
                angular.element('#trdetail').remove();
                angular.element('.expand').val('+');

                if (document.getElementById('Detail2') != null) {
                    angular.element('#angulardiv').append(angular.element('#Detail2'));
                    document.getElementById('Detail2').style.display = 'none';
                    angular.element('#trdetail2').remove();
                    angular.element('.expand').val('+');
                }

                var tr = document.getElementById(row);
                var tr1 = document.createElement('tr');
                tr1.id = 'trdetail';
                var td = document.createElement('td');
                td.colSpan = colspan1;
                var div = document.getElementById('Detail');
                td.appendChild(div);
                tr1.appendChild(td);

                tr.parentNode.insertBefore(tr1, tr.nextSibling);
                angular.element('#showdtl_' + row).val('-');
                div.style.display = 'inline';

                if (document.getElementById(valId + row) == null) {
                    $rootScope.activeId = '';
                }
                else {
                    $rootScope.activeId = angular.element('#' + valId + row).val();
                }
              

                $rootScope.$emit('Callinit', {});

            }
            else {
                angular.element('#angulardiv').append(angular.element('#Detail'));
                document.getElementById('Detail').style.display = 'none';
                angular.element('#trdetail').remove();
                angular.element('#showdtl_' + row).val('+');

            }

        };
        $scope.showmodal1 = function click7(URL, object1, object2) {
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

                            if (object2 != 'undefined') {
                                td3.innerHTML = response.d[i].desc;
                            }
                               
                            
                            td2.innerHTML += '<input type="submit" value="pilih" onclick="pilih(\'' + isi + '\',\'' + isi2 + '\',\'' + object1 + '\',\'' + object2 + '\')"/>';
                            tr.appendChild(td);

                            if (object2 != 'undefined') {
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

        };
        $scope.checkCheckbox = function check1() {
            var checkbox1 = angular.element('.checked1');
            for (var i = 0; i < checkbox1.length; i++) {
                if (checkbox1[i].checked) {
                    document.getElementsByName(checkbox1[i].name)[0].value='true';
                }
                else {
                    document.getElementsByName(checkbox1[i].name)[0].value = 'false';
                }
            }

        };
        $scope.doubledot1 = function replacedoubledot(id) {
            var val = angular.element('#' + id).val();

            var regex = /\d{2}/g;

            var val1 = val;
            if (val1.match(regex) && !val1.match(/:/)) {
                val1 += ':';
            }

            angular.element('#' + id).val(val1);

        };
        $scope.addCommas1 = function add(id) {
            var val = angular.element('#' + id).val();
            val = val.replace(/[^0-9\.]/g, '');

            if (val != "") {
                valArr = val.split('.');
                valArr[0] = (parseInt(valArr[0], 10)).toLocaleString();
                val = valArr.join('.');
            }

            angular.element('#' + id).val(val);
        };
        $scope.numeric = function add1(id) {
            var val = angular.element('#' + id).val();
            val = val.replace(/[^0-9\.]/g, '');
            angular.element('#' + id).val(val);
        };
       
        });
    if (document.getElementById('page2') != null) {
        document.getElementById('page2').value = halaman2;
    }
    if (url3 != null) {
        $http({
            url: url3,
            method: "POST",
            data: { "filter": search },
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            //$scope.master = JSON.parse(response.data.d);
            $scope.mastetampung2 = JSON.parse(response.data.d);
            if ($scope.activeId1 != null && $scope.activeId1 != '') {
                var filtered = $scope.mastetampung2.filter(function (item) {
                    var reg = new RegExp($scope.activeId1, 'i');
                    return item[filter1].match(reg);
                });
                $scope.master2 = new Array();
                var jumlahdata;

                jumlahdata = (loaddata2 * halaman2);
                if (jumlahdata < filtered.length) {
                    jumlahdata = (loaddata2 * halaman2);
                }
                else {
                    jumlahdata = filtered.length;
                }

                for (var page = page2; page < jumlahdata; page++) {
                    $scope.master2.push(filtered[page]);
                }
                Totalseluruh2 = filtered.length;
                document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
            }
            else {
                $scope.master2 = new Array();
                var jumlahdata;


                jumlahdata = (loaddata2 * halaman2);
                if (jumlahdata < $scope.mastetampung2.length) {
                    jumlahdata = (loaddata2 * halaman2);
                }
                else {
                    jumlahdata = $scope.mastetampung2.length;
                }
                for (var page = page2; page < jumlahdata; page++) {
                    $scope.master2.push($scope.mastetampung2[page]);
                }
                Totalseluruh = $scope.mastetampung2.length;
                document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
            }

            $scope.nextprev2 = function init1(val) {
                if (val == 'next') {


                    page2 += 10;

                    //delete $scope.master;

                    if ($scope.activeId1 != null && $scope.activeId1 != '') {
                        var filtered = $scope.mastetampung2.filter(function (item) {
                            var reg = new RegExp($scope.activeId1, 'i');
                            return item[filter1].match(reg);
                        });
                        if (page2 < filtered.length) {
                            halaman2 += 1;

                            $scope.master2 = new Array();
                            var jumlahdata;

                            jumlahdata = (loaddata2 * halaman2);
                            if (jumlahdata2 < filtered.length) {
                                jumlahdata = (loaddata2 * halaman2);
                            }
                            else {
                                jumlahdata = filtered.length;
                            }

                            for (var page = page2; page < jumlahdata; page++) {
                                $scope.master2.push(filtered[page]);
                            }
                            document.getElementById('page2').value = halaman2;
                        }
                        else {
                            page2 -= 10;
                        }
                        Totalseluruh2 = filtered.length;
                        document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
                    }
                    else {
                        if (page2 < $scope.mastetampung2.length) {
                            halaman2 += 1;
                            $scope.master2 = new Array();
                            var jumlahdata;


                            jumlahdata = (loaddata2 * halaman2);
                            if (jumlahdata < $scope.mastetampung2.length) {
                                jumlahdata = (loaddata2 * halaman2);
                            }
                            else {
                                jumlahdata = $scope.mastetampung2.length;
                            }
                            for (var page = page2; page < jumlahdata; page++) {
                                $scope.master2.push($scope.mastetampung2[page]);
                            }
                            document.getElementById('page2').value = halaman2;
                        }
                        else {
                            page2 -= 10;
                        }
                        Totalseluruh2 = $scope.mastetampung2.length;
                        document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
                    }

                }
                else if (val == 'prev') {
                    if (halaman2 != 1) {
                        halaman2 -= 1;
                        page2 -= 10;


                        //delete $scope.master;
                        if ($scope.activeId1 != null && $scope.activeId1 != '') {
                            var filtered = $scope.mastetampung2.filter(function (item) {
                                var reg = new RegExp($scope.activeId1, 'i');
                                return item[filter1].match(reg);
                            });
                            $scope.master2 = new Array();
                            var jumlahdata;

                            jumlahdata = (loaddata2 * halaman2);

                            for (var page = page2; page < jumlahdata; page++) {
                                $scope.master2.push(filtered[page]);
                            }
                            Totalseluruh2 = filtered.length;
                            document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
                        }
                        else {
                            $scope.master2 = new Array();
                            var jumlahdata;


                            jumlahdata = (loaddata2 * halaman2);

                            for (var page = page2; page < jumlahdata; page++) {
                                $scope.master2.push($scope.mastetampung2[page]);
                            }
                        }
                        document.getElementById('page2').value = halaman2;
                        Totalseluruh2 = $scope.mastetampung2.length;
                        document.getElementById('tableinfo2').innerHTML = 'Showing 1 to ' + $scope.master2.length + ' of ' + Totalseluruh2;
                    }
                }

            };
            $scope.showtabledtl2 = function click8(row, colspan1, valId, filtercol) {
                if (angular.element('#showdtl2_' + row).val() != '-') {
                    angular.element('#angulardiv').append(angular.element('#Detail'));
                    document.getElementById('Detail').style.display = 'none';
                    angular.element('#trdetail').remove();
                    angular.element('.expand').val('+');

                    angular.element('#angulardiv').append(angular.element('#Detail2'));
                    document.getElementById('Detail2').style.display = 'none';
                    angular.element('#trdetail2').remove();
                    angular.element('.expand').val('+');

                    var tr = document.getElementById('row_' + row);
                    var tr1 = document.createElement('tr');
                    tr1.id = 'trdetail2';
                    var td = document.createElement('td');
                    td.colSpan = colspan1;
                    var div = document.getElementById('Detail2');
                    td.appendChild(div);
                    tr1.appendChild(td);

                    tr.parentNode.insertBefore(tr1, tr.nextSibling);
                    angular.element('#showdtl2_' + row).val('-');
                    div.style.display = 'inline';

                    if (document.getElementById(valId + row) == null) {
                        $rootScope.activeId = '';
                    }
                    else {
                        $rootScope.activeId = document.getElementById(valId + row).innerHTML;
                    }


                    $rootScope.$emit('Callinit2', {});

                }
                else {
                    angular.element('#angulardiv').append(angular.element('#Detail2'));
                    document.getElementById('Detail2').style.display = 'none';
                    angular.element('#trdetail2').remove();
                    angular.element('#showdtl2_' + row).val('+');

                }

            };
        });
    }
    $('#new').on('click', function () {
        kdtl = 0;
        q = 0;
        var getdatacombo = function (i) {
            $http({
                url: data1[i],
                method: "POST",
                data: {},
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                var thestring = 'masterdllTable' + i;
                $scope[thestring] = JSON.parse(response.data.d);
            });
        }
        if (document.getElementById('Detail') != null) {
            angular.element('#angulardiv').append(angular.element('#Detail'));
            document.getElementById('Detail').style.display = 'none';
            angular.element('#trdetail').remove();
            angular.element('.expand').val('+');
        }
        var thtext = new Array();
        var countTd = angular.element('#tablemenu thead tr').children('th').length;
        var table = angular.element('#tablemenu tbody');
        var tr1 = document.createElement("tr");
        tr1.id = 'newtrheader';
        table.prepend(tr1);
        var countth = angular.element('#tablemenu thead tr').children('th');
        for (var j = 0; j < countth.length - 1; j++) {
            thtext.push(countth[j].innerHTML);
        }
        for (var i = 0; i < countTd; i++) {
            if (i != countTd - 1) {
               
                var td1 = document.createElement("td");
               
                if (!countth[i].className.match(/toggle/g)) {
                    var input1 = document.createElement("INPUT");
                    input1.style.margin = 'auto';
                    input1.style.display = 'block';
                    if (countth[i].className.match(/checkbox1/g)) {
                        input1.setAttribute('type', 'checkbox');
                        input1.className = 'checked1';
                        input1.name = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-click', 'checkCheckbox();')

                    }
                    else if (countth[i].className.match(/currency/g)) {
                        input1.setAttribute('type', 'text');
                        input1.className = 'currency';
                        input1.id = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-keyup', 'addCommas1(\'' + input1.id + '\');')
                    }
                    else if (countth[i].className.match(/numeric/g)) {
                        input1.setAttribute('type', 'text');
                        input1.className = 'numeric';
                        input1.id = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-keyup', 'numeric(\'' + input1.id + '\');')
                    }
                    else if (countth[i].className.match(/time/g)) {
                        input1.setAttribute('type', 'text');
                        input1.className = 'time';
                        input1.id = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-keyup', 'doubledot1(\'' + input1.id + '\');')
                    }
                    else if (countth[i].className.match(/combo/g)) {
                        getdatacombo(q);
                        var select1 = document.createElement("select");
                        select1.id = 'combohdr_' + i;
                        select1.setAttribute('ng-options', options[q])
                        select1.setAttribute('ng-model', 'myddlHdr'+i)
                        td1.append(select1);
                        input1.setAttribute('type', 'text');
                        input1.style.display = 'none';
                        input1.setAttribute('ng-value', 'myddlHdr' + i);
                    }
                    else {
                        input1.setAttribute('type', 'text');
                    }
                    input1.id = thtext[i].replace(/\s/g, '');
                    if (ukuran.length > 0) {

                        input1.style.width = ukuran[i] + 'px';
                    }
                    if (countth[i].className.match(/date/)) {
                        input1.className = 'date';
                    }

                }

                if (countth[i].title != '') {
                    if (countth[i].title != 'undefined') {
                        input1.style.display = 'none';
                    }
                   

                    var input2 = document.createElement("INPUT");
                    input2.setAttribute('type', 'submit');
                    input2.value = '...';
                    input2.id = 'popup' + i;
                    input2.style.margin = 'auto'
                    input2.style.display = 'block';

                    td1.appendChild(input2);
                    if (countth[i].title != 'undefined') {

                   
                    var input3 = document.createElement("INPUT");
                    input3.setAttribute('type', 'text');
                    input3.id = countth[i].title;
                    input3.style.margin = 'auto';
                    input3.style.display = 'block';
                    if (ukuran.length > 0) {
                        input3.style.width = ukuran[i] + 'px';
                    }

                    td1.appendChild(input3);
                    }
                    //input2.style.marginLeft = (input3.style.width / 2) - 20;
                }

                if (!countth[i].className.match(/toggle/g)) {
                    td1.appendChild(input1);

                }
                tr1.appendChild(td1);
                $('.date').datepicker({ dateFormat: 'yy-mm-dd' });
                if (countth[i].className.match(/checkbox1/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/currency/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/time/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/numeric/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/combo/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    var el2 = document.getElementById('combohdr_' + i);
                    $compile(el)($scope);
                    $compile(el2)($scope);
                    q++;
                }
                if (countth[i].title != '') {
                    var el = document.getElementById("popup" + i);
                    el.setAttribute("ng-click", "showmodal1(\'" + urlpopup[kdtl] + "\',\'" + thtext[i].replace(/\s/g, '') + "\',\'" + countth[i].title + "\')");
                    $compile(el)($scope);
                    kdtl++;
                }

            }
            else {
                var td1 = document.createElement("td");
                var input1 = document.createElement("INPUT");
                input1.setAttribute('type', 'submit');
                input1.value = 'save';
                input1.id = 'save';
                input1.className = 'btn btn-danger';
                var input2 = document.createElement("INPUT");
                input2.setAttribute('type', 'submit');
                input2.value = 'cancel';
                input2.id = 'cancel1';
                input2.className = 'btn btn-danger';
                td1.appendChild(input1);
                td1.appendChild(input2);
                tr1.appendChild(td1);

                var el = document.getElementById("save");
                el.setAttribute("ng-click", "save1()");
                var el2 = document.getElementById("cancel1");
                el2.setAttribute("ng-click", "remove1()");
                $compile(el)($scope);
                $compile(el2)($scope);
            }

        }
    });
}
app.controller('MyController', function ($scope, $http, $compile, $controller, $rootScope) {
    if (urlddl != null) {
        $http({
            url: urlddl,
            method: "POST",
            data: {},
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            $scope.masterdll = JSON.parse(response.data.d);
            $scope.myddl = $scope.masterdll[0]['filter'];

            $scope.activeId1 = $scope.myddl;
            initheader($scope, $http, $compile, $rootScope);
        });
    } else {
        initheader($scope, $http, $compile, $rootScope);
    }
});

app.controller('MyControllerDetail', function ($scope, $http, $compile, $rootScope) {
    document.getElementById('pagedtl').value = halaman;
    $http({
        url: urldtl1,
        method: "POST",
        data: { "filter2": ''},
        headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
       
      //  $scope.masterdtl = JSON.parse(response.data.d);
        $scope.mastetampungdtl = JSON.parse(response.data.d);
        if ($scope.activeId1 != null && $scope.activeId1 != '') {
            var filtered = $scope.mastetampungdtl.filter(function (item) {
                return item.NamaTenant == $scope.activeId1;
            });
            $scope.masterdtl = new Array();
            var jumlahdata;

            jumlahdata = (loaddatadtl * halamandtl);
            if (jumlahdata < filtered.length) {
                jumlahdata = (loaddatadtl * halamandtl);
            }
            else {
                jumlahdata = filtered.length;
            }

            for (var page = pagedtl1; page < jumlahdata; page++) {
                $scope.masterdtl.push(filtered[page]);
            }
            Totalseluruhdtl = filtered.length;
            document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
        }
        else {
            $scope.masterdtl = new Array();
            var jumlahdata;


            jumlahdata = (loaddatadtl * halamandtl);
            if (jumlahdata < $scope.mastetampungdtl.length) {
                jumlahdata = (loaddatadtl * halamandtl);
            }
            else {
                jumlahdata = $scope.mastetampungdtl.length;
            }
            for (var page = pagedtl1; page < jumlahdata; page++) {
                $scope.masterdtl.push($scope.mastetampungdtl[page]);
            }
            Totalseluruhdtl = $scope.mastetampungdtl.length;
            document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
        }
        $scope.nextprevdtl = function init1(val) {
            if (val == 'next') {


                pagedtl1 += 10;

                //delete $scope.master;

                if ($rootScope.activeId != null && $rootScope.activeId != '') {
                    var filtered = $scope.mastetampungdtl.filter(function (item) {
                        return item[filterdtl] == $rootScope.activeId;
                    });
                    if (pagedtl1 < filtered.length) {
                        halamandtl += 1;

                        $scope.masterdtl = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddatadtl * halamandtl);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddatadtl * halamandtl);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = pagedtl1; page < jumlahdata; page++) {
                            $scope.masterdtl.push(filtered[page]);
                        }
                        Totalseluruhdtl = filtered.length;
                        document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
                        document.getElementById('pagedtl').value = halamandtl;
                    }
                    else {
                        pagedtl1 -= 10;
                    }
                }
                else {
                    if (pagedtl1 < $scope.mastetampungdtl.length) {
                        halamandtl += 1;
                        $scope.masterdtl = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddatadtl * halamandtl);
                        if (jumlahdata < $scope.mastetampungdtl.length) {
                            jumlahdata = (loaddatadtl * halamandtl);
                        }
                        else {
                            jumlahdata = $scope.mastetampungdtl.length;
                        }
                        for (var page = pagedtl1; page < jumlahdata; page++) {
                            $scope.masterdtl.push($scope.mastetampungdtl[page]);
                        }
                        Totalseluruhdtl = $scope.mastetampungdtl.length;
                        document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
                        document.getElementById('pagedtl').value = halamandtl;
                    }
                    else {
                        pagedtl1 -= 10;
                    }
                }

            }
            else if (val == 'prev') {
                if (halamandtl != 1) {
                    halamandtl -= 1;
                    pagedtl1 -= 10;


                    //delete $scope.master;
                    if ($rootScope.activeId != null && $rootScope.activeId != '') {
                        var filtered = $scope.mastetampungdtl.filter(function (item) {
                            return item[filterdtl] == $rootScope.activeId;
                        });
                        $scope.masterdtl = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddatadtl * halamandtl);

                        for (var page = pagedtl1; page < jumlahdata; page++) {
                            $scope.masterdtl.push(filtered[page]);
                        }
                        Totalseluruhdtl = filtered.length;
                        document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
                    }
                    else {
                        $scope.masterdtl = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddatadtl * halamandtl);

                        for (var page = pagedtl1; page < jumlahdata; page++) {
                            $scope.masterdtl.push($scope.mastetampungdtl[page]);
                        }
                    }
                    Totalseluruhdtl = $scope.mastetampungdtl.length;
                    document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
                    document.getElementById('pagedtl').value = halamandtl;
                }


            }

        };

        $scope.nextprevdtl2 = function init2(val) {
            if (val == 'next') {


                pagedtl2 += 10;

                //delete $scope.master;

                if ($rootScope.activeId != null && $rootScope.activeId != '') {
                    var filtered = $scope.mastetampungdtl2.filter(function (item) {
                        return item[filterdtl] == $rootScope.activeId;
                    });
                    if (pagedtl2 < filtered.length) {
                        halamandtl2 += 1;

                        $scope.masterdtl2 = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddatadtl2 * halamandtl2);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddatadtl2 * halamandtl2);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = pagedtl2; page < jumlahdata; page++) {
                            $scope.masterdtl2.push(filtered[page]);
                        }
                        Totalseluruhdtl = filtered.length;
                        document.getElementById('tableinfodtl2').innerHTML = 'Showing 1 to ' + $scope.masterdtl2.length + ' of ' + Totalseluruhdtl2;
                        document.getElementById('pagedtl2').value = halamandtl2;
                    }
                    else {
                        pagedtl2 -= 10;
                    }
                }
                else {
                    if (pagedtl2 < $scope.mastetampungdtl2.length) {
                        halamandtl2 += 1;
                        $scope.masterdtl2 = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddatadtl2 * halamandtl2);
                        if (jumlahdata < $scope.mastetampungdtl2.length) {
                            jumlahdata = (loaddatadtl2 * halamandtl2);
                        }
                        else {
                            jumlahdata = $scope.mastetampungdtl2.length;
                        }
                        for (var page = pagedtl2; page < jumlahdata; page++) {
                            $scope.masterdtl2.push($scope.mastetampungdtl2[page]);
                        }
                        Totalseluruhdtl2 = $scope.mastetampungdtl2.length;
                        document.getElementById('tableinfodtl2').innerHTML = 'Showing 1 to ' + $scope.masterdtl2.length + ' of ' + Totalseluruhdtl2;
                        document.getElementById('pagedtl2').value = halamandtl2;
                    }
                    else {
                        pagedtl2 -= 10;
                    }
                }

            }
            else if (val == 'prev') {
                if (halamandtl2 != 1) {
                    halamandtl2 -= 1;
                    pagedtl2 -= 10;


                    //delete $scope.master;
                    if ($rootScope.activeId != null && $rootScope.activeId != '') {
                        var filtered = $scope.mastetampungdtl2.filter(function (item) {
                            return item[filterdtl] == $rootScope.activeId;
                        });
                        $scope.masterdtl2 = new Array();
                        var jumlahdata;

                        jumlahdata = (loaddatadtl2 * halamandtl2);

                        for (var page = pagedtl2; page < jumlahdata; page++) {
                            $scope.masterdtl2.push(filtered[page]);
                        }
                        Totalseluruhdtl2 = filtered.length;
                        document.getElementById('tableinfodtl2').innerHTML = 'Showing 1 to ' + $scope.masterdtl2.length + ' of ' + Totalseluruhdtl2;
                    }
                    else {
                        $scope.masterdtl2 = new Array();
                        var jumlahdata;


                        jumlahdata = (loaddatadtl2 * halamandtl2);

                        for (var page = pagedtl2; page < jumlahdata; page++) {
                            $scope.masterdtl2.push($scope.mastetampungdtl2[page]);
                        }
                    }
                    Totalseluruhdtl2 = $scope.mastetampungdtl2.length;
                    document.getElementById('tableinfodtl2').innerHTML = 'Showing 1 to ' + $scope.masterdtl2.length + ' of ' + Totalseluruhdtl2;
                    document.getElementById('pagedtl2').value = halamandtl;
                }


            }

        };
        $rootScope.$on("Callinit", function () {
            $scope.init();
        });

        $scope.init = function () {
            var a = $rootScope.activeId;
            $http({
                url: urldtl1,
                method: "POST",
                data: { "filter2": a},
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                document.getElementById('pagedtl').value = halamandtl;

                $scope.mastetampungdtl = JSON.parse(response.data.d);
                $scope.masterdtl = new Array();
                var jumlahdata;
              
                if ($rootScope.activeId != null && $rootScope.activeId != '') {

                    var filtered = $scope.mastetampungdtl.filter(function (item) {
                      //  alert(item.IdSewa);
                        return item[filterdtl] == $rootScope.activeId;
                        });

                        jumlahdata = (loaddatadtl * halamandtl);
                        if (jumlahdata < filtered.length) {
                            jumlahdata = (loaddatadtl * halamandtl);
                        }
                        else {
                            jumlahdata = filtered.length;
                        }

                        for (var page = pagedtl1; page < jumlahdata; page++) {
                            $scope.masterdtl.push(filtered[page]);
                        }
                        Totalseluruhdtl = filtered.length;
                        document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
                    }
                    else {
                        jumlahdata = (loaddatadtl * halamandtl);

                        if (jumlahdata < $scope.mastetampungdtl.length) {
                            jumlahdata = (loaddatadtl * halamandtl);
                        }
                        else {
                            jumlahdata = $scope.mastetampungdtl.length;
                        }
                        for (var page = pagedtl1; page < jumlahdata; page++) {
                            $scope.masterdtl.push($scope.mastetampungdtl[page]);
                        }
                        Totalseluruhdtl = $scope.mastetampungdtl.length;
                        document.getElementById('tableinfodtl').innerHTML = 'Showing 1 to ' + $scope.masterdtl.length + ' of ' + Totalseluruhdtl;
                    }
            });
        };

        $rootScope.$on("Callinit2", function () {
            $scope.init2();
        });

        $scope.init2 = function () {
            var a = $rootScope.activeId;
            $http({
                url: urldtl3,
                method: "POST",
                data: { "filter2": a },
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                document.getElementById('pagedtl2').value = halamandtl2;

                $scope.mastetampungdtl2 = JSON.parse(response.data.d);
                $scope.masterdtl2 = new Array();
                var jumlahdata;

                if ($rootScope.activeId != null && $rootScope.activeId != '') {

                    var filtered = $scope.mastetampungdtl2.filter(function (item) {
                        //  alert(item.IdSewa);
                        return item[filterdtl] == $rootScope.activeId;
                    });

                    jumlahdata = (loaddatadtl2 * halamandtl2);
                    if (jumlahdata < filtered.length) {
                        jumlahdata = (loaddatadtl2 * halamandtl2);
                    }
                    else {
                        jumlahdata = filtered.length;
                    }

                    for (var page = pagedtl2; page < jumlahdata; page++) {
                        $scope.masterdtl2.push(filtered[page]);
                    }
                    Totalseluruhdtl2 = filtered.length;
                    document.getElementById('tableinfodtl2').innerHTML = 'Showing 1 to ' + $scope.masterdtl2.length + ' of ' + Totalseluruhdtl2;
                }
                else {
                    jumlahdata = (loaddatadtl2 * halamandtl2);

                    if (jumlahdata < $scope.mastetampungdtl2.length) {
                        jumlahdata = (loaddatadtl2 * halamandtl2);
                    }
                    else {
                        jumlahdata = $scope.mastetampungdtl2.length;
                    }
                    for (var page = pagedtl2; page < jumlahdata; page++) {
                        $scope.masterdtl2.push($scope.mastetampungdtl2[page]);
                    }
                    Totalseluruhdtl2 = $scope.mastetampungdtl2.length;
                    document.getElementById('tableinfodtl2').innerHTML = 'Showing 1 to ' + $scope.masterdtl2.length + ' of ' + Totalseluruhdtl2;
                }
            });
        };
        var vm = this;

        $scope.inlineEditdtl1 = function click1(row) {
            var getdatacombodtl = function (i) {
                $http({
                    url: datadtl1[i],
                    method: "POST",
                    data: {},
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    var thestring = 'masterdllDTL' + i;
                    $scope[thestring] = JSON.parse(response.data.d);
                });
            }
            var a = document.getElementsByClassName('controldtl_' + row);
            var b = document.getElementsByClassName('hidewhenclickdtl_' + row);
            for (var i = 0; i < a.length; i++) {
                a[i].style.display = 'block';
                tmpdtl[i] = a[i].value;
              
            }
            for (var j = 0; j < b.length; j++) {
                b[j].style.display = 'none';
            }
            if (datadtl1.length > 0) {
                for (var j = 0; j < datadtl1.length; j++) {
                    getdatacombodtl(j);
                    var thestring2 = 'myddlDTL' + j;
                    $scope[thestring2] = b[dropdownnamedtl[j][0]].innerHTML.toLowerCase();
                }

            }
           // $scope.masterdllDTL = JSON.parse(datadtl1[0]);
           // $scope.myddlDTL=b[dropdownname[0]].innerHTML.toLowerCase();
        };
        $scope.closeEditdtl1 = function click2(row) {
            var a = document.getElementsByClassName('controldtl_' + row);
            var b = document.getElementsByClassName('hidewhenclickdtl_' + row);
            for (var i = 0; i < a.length; i++) {
                a[i].style.display = 'none';
                a[i].value = tmpdtl[i];
            }
            for (var j = 0; j < b.length; j++) {
                b[j].style.display = '';
            }
        };

        $scope.updatedtl1 = function click3(row) {
            if (confirm('Are you sure you want to update?')) {
                var data = "{";
                for (var i = 0; i < id1Dtl.length; i++) {
                    if (i == id1Dtl.length - 1) {
                        var object = angular.element('#' + id1Dtl[i] + '_' + row).val();
                        if (object == null) {
                            if (document.getElementsByName(id1Dtl[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1Dtl[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1Dtl[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'2'}";
                    } else {
                        var object = angular.element('#' + id1Dtl[i] + '_' + row).val();
                        if (object == null) {
                            if (document.getElementsByName(id1Dtl[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1Dtl[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1Dtl[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                    }
                }
                $http({
                    url: url2dtl,
                    method: "POST",
                    data: data,
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    if (!response.data.d.match(/err/g)) {
                        if (document.getElementById('Detail') != null) {
                            angular.element('#angulardiv').append(angular.element('#Detail'));
                            document.getElementById('Detail').style.display = 'none';
                            angular.element('#trdetail').remove();
                            angular.element('.expand').val('+');
                        }
                        if (document.getElementById('Detail2') != null) {
                            angular.element('#angulardiv').append(angular.element('#Detail2'));
                            document.getElementById('Detail2').style.display = 'none';
                            angular.element('#trdetail2').remove();
                            angular.element('.expand').val('+');
                        }
                        swal({
                            title: "Informasi!",
                            text: "Success",
                            type: "success"
                        });
                    }
                    else {
                        swal({
                            title: "Informasi!",
                            text: response.data.d,
                            type: "warning"
                        });
                    }
                    //var index;
                    //var index2;


                    //var val = JSON.parse(response.data.d)[id1Dtl[0]];

                    //index = $scope.masterdtl.findIndex(obj => obj[id1Dtl[0]] === val);


                    //index2 = $scope.mastetampungdtl.findIndex(obj => obj[id1Dtl[0]] === val);

                    //$scope.masterdtl[index] = '';
                    //$scope.mastetampungdtl[index2] = '';

                    //$scope.masterdtl[index] = JSON.parse(response.data.d);

                    //$scope.mastetampungdtl[index2] = JSON.parse(response.data.d);

                    //$scope.masterdtl = new Array();
                    //var jumlahdata;


                    //jumlahdata = (loaddatadtl * halamandtl);
                    //if (jumlahdata < $scope.mastetampungdtl.length) {
                    //        jumlahdata = (loaddatadtl * halamandtl);
                    // }
                    // else {
                    //        jumlahdata = $scope.mastetampungdtl.length;
                    // }
                    //  for (var page = pagedtl1; page < jumlahdata; page++) {
                    //        $scope.masterdtl.push($scope.mastetampungdtl[page]);
                    // }
                });
            }
        };
        $scope.deletedtl1 = function click4(row) {
            if (confirm('Are you sure you want to delete?')) {
                var data = "{";
                for (var i = 0; i < id1Dtl.length; i++) {
                    if (i == id1Dtl.length - 1) {
                        var object = angular.element('#' + id1Dtl[i] + '_' + row).val();
                        if (object == null) {
                            if (document.getElementsByName(id1Dtl[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1Dtl[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1Dtl[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'3'}";
                    } else {
                        var object = angular.element('#' + id1Dtl[i] + '_' + row).val();
                        if (object == null) {
                            if (document.getElementsByName(id1Dtl[i] + '_' + row)[0] != null) {
                                if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'checkbox') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']").val();
                                }
                                else if (document.getElementsByName(id1Dtl[i] + '_' + row)[0].type == 'radio') {
                                    object = $("input[name='" + id1Dtl[i] + '_' + row + "']:checked").val();
                                }
                                else {
                                    object = document.getElementsByName(id1Dtl[i] + '_' + row)[0].value;
                                }
                            }
                        }
                        data += id1Dtl[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                    }
                }
                $http({
                    url: url2dtl,
                    method: "POST",
                    data: data,
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    if (!response.data.d.match(/err/g)) {


                        if (document.getElementById('Detail') != null) {
                            angular.element('#angulardiv').append(angular.element('#Detail'));
                            document.getElementById('Detail').style.display = 'none';
                            angular.element('#trdetail').remove();
                            angular.element('.expand').val('+');
                        }
                        if (document.getElementById('Detail2') != null) {
                            angular.element('#angulardiv').append(angular.element('#Detail2'));
                            document.getElementById('Detail2').style.display = 'none';
                            angular.element('#trdetail2').remove();
                            angular.element('.expand').val('+');
                        }
                        swal({
                            title: "Informasi!",
                            text: "Success",
                            type: "success"
                        });
                    } else {
                        swal({
                            title: "Informasi!",
                            text: response.data.d,
                            type: "warning"
                        });
                    }
                    //var index;
                    //var index2;


                    //var val = response.data.d;

                    //index = $scope.masterdtl.findIndex(obj => obj[id1Dtl[0]] === val);


                    //index2 = $scope.mastetampungdtl.findIndex(obj => obj[id1Dtl[0]] === val);


                    //$scope.masterdtl.splice(index, 1);
                    //$scope.mastetampungdtl.splice(index2, 1);

                    
                    //    $scope.masterdtl = new Array();
                    //    var jumlahdata;


                    //    jumlahdata = (loaddatadtl * halamandtl);
                    //    if (jumlahdata < $scope.mastetampungdtl.length) {
                    //        jumlahdata = (loaddatadtl * halamandtl);
                    //    }
                    //    else {
                    //        jumlahdata = $scope.mastetampungdtl.length;
                    //    }
                    //    for (var page = pagedtl1; page < jumlahdata; page++) {
                    //        $scope.masterdtl.push($scope.mastetampungdtl[page]);
                        
                    //}

                   
                });
            }
        };
        $scope.savedtl1 = function click5() {
            var data = "{";
            for (var i = 0; i < id1Dtl.length; i++) {
                if (i == id1Dtl.length - 1) {
                    var object = angular.element('#' + id1Dtl[i]).val();
                    if (object == null) {
                        if (document.getElementsByName(id1Dtl[i])[0] != null) {
                            if (document.getElementsByName(id1Dtl[i])[0].type == 'checkbox') {
                                object = $("input[name='" + id1Dtl[i] + "']").val();
                            }
                            else if (document.getElementsByName(id1[i])[0].type == 'radio') {
                                object = $("input[name='" + id1Dtl[i] + "']:checked").val();
                            }
                        }
                    }
                    data += id1Dtl[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',' + "tipe:'1'}";
                } else {
                    var object = angular.element('#' + id1Dtl[i]).val();
                    if (object == null) {
                        if (document.getElementsByName(id1Dtl[i])[0] != null) {
                            if (document.getElementsByName(id1Dtl[i])[0].type == 'checkbox') {
                                object = $("input[name='" + id1Dtl[i] + "']").val();
                            }
                            else if (document.getElementsByName(id1[i])[0].type == 'radio') {
                                object = $("input[name='" + id1Dtl[i] + "']:checked").val();
                            }
                        }
                    }
                    data += id1Dtl[i].replace(/'/g, "") + ':' + '\'' + object + '\'' + ',';
                }
            }
            $http({
                url: url2dtl,
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                if (!response.data.d.match(/err/g)) {
                    if (document.getElementById('Detail') != null) {
                        angular.element('#angulardiv').append(angular.element('#Detail'));
                        document.getElementById('Detail').style.display = 'none';
                        angular.element('#trdetail').remove();
                        angular.element('.expand').val('+');
                    }
                    if (document.getElementById('Detail2') != null) {
                        angular.element('#angulardiv').append(angular.element('#Detail2'));
                        document.getElementById('Detail2').style.display = 'none';
                        angular.element('#trdetail2').remove();
                        angular.element('.expand').val('+');
                    }
                    swal({
                        title: "Informasi!",
                        text: "Success",
                        type: "success"
                    });

                    //$scope.mastetampungdtl.push(JSON.parse(response.data.d));
                    //$scope.masterdtl.push(JSON.parse(response.data.d));
                   


                    //$scope.masterdtl = new Array();
                    //var jumlahdata;


                    //jumlahdata = (loaddatadtl * halamandtl);
                    //if (jumlahdata < $scope.mastetampungdtl.length) {
                    //    jumlahdata = (loaddatadtl * halamandtl);
                    //}
                    //else {
                    //    jumlahdata = $scope.mastetampungdtl.length;
                    //}
                    //for (var page = pagedtl1; page < jumlahdata; page++) {
                    //    $scope.master.push($scope.mastetampungdtl[page]);
                    //}

                   

                    $scope.removedtl1();
                }
                else {
                    swal({
                        title: "Informasi!",
                        text: response.data.d,
                        type: "warning"
                    });
                }
            });
        };
        $scope.removedtl1 = function click6() {
            document.getElementById('newtr').remove();
        };
        $scope.showmodaldtl1 = function click7(URL, object1, object2) {
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
                            //if (response.d[i].desc != '') {
                            td3.innerHTML = response.d[i].desc;
                            //}
                            td2.innerHTML += '<input type="submit" value="pilih" onclick="pilih(\'' + isi + '\',\'' + isi2 + '\',\'' + object1 + '\',\'' + object2 + '\')"/>';
                            tr.appendChild(td);

                            //if (response.d[i].desc != '') {
                            tr.appendChild(td3);
                            //}
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

        };
        $scope.checkCheckboxdtl = function check1() {
            var checkbox1 = angular.element('.checked1dtl');
            for (var i = 0; i < checkbox1.length; i++) {
                if (checkbox1[i].checked) {
                    document.getElementsByName(checkbox1[i].name)[0].value='true';
                }
                else {
                    document.getElementsByName(checkbox1[i].name)[0].value = 'false';
                }
            }
        };
        $scope.doubledotdtl1 = function replacedoubledotdtl(id) {
            var val = angular.element('#' + id).val();

            var regex = /\d{2}/g;

            var val1 = val;
            if (val1.match(regex) && !val1.match(/:/)) {
                val1 += ':';
            }

            angular.element('#' + id).val(val1);

        };
        $scope.addCommasdtl1 = function add(id) {
            var val = angular.element('#' + id).val();
            val = val.replace(/[^0-9\.]/g, '');

            if (val != "") {
                valArr = val.split('.');
                valArr[0] = (parseInt(valArr[0], 10)).toLocaleString();
                val = valArr.join('.');
            }

            angular.element('#' + id).val(val);

        };
        $scope.numericdtl = function add1(id) {
            var val = angular.element('#' + id).val();
            val = val.replace(/[^0-9\.]/g, '');



            angular.element('#' + id).val(val);

        };
    });
    $('#newdtl').on('click', function () {
        k = 0;
        qdtl=0
        var getdatacombodtl = function (i) {
            $http({
                url: datadtl1[i],
                method: "POST",
                data: {},
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                var thestring = 'masterdllDTL' + i;
                $scope[thestring] = JSON.parse(response.data.d);
            });
        }
        var thtext = new Array();
        var countTd = $('#tablemenudetail thead tr').children('th').length;
        var table = $('#tablemenudetail tbody');
        var tr = document.createElement("tr");
        tr.id = 'newtr';
        table.prepend(tr);
        var countth = $('#tablemenudetail thead tr').children('th');
        for (var j = 0; j < countth.length - 1; j++) {
            thtext.push(countth[j].innerHTML);
        }
        for (var i = 0; i < countTd; i++) {
            if (i != countTd - 1) {
                var td = document.createElement("td");
                if (!countth[i].className.match(/toggledtl/g)) {
                    var input1 = document.createElement("INPUT");
                    input1.style.margin = 'auto';
                    input1.style.display = 'block';
                    if (countth[i].className.match(/checkbox1dtl/g)) {
                        input1.setAttribute('type', 'checkbox');
                        input1.className = 'checked1dtl';
                        input1.name = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-click', 'checkCheckboxdtl();')

                    }
                    else if (countth[i].className.match(/combodtl/g)) {
                        getdatacombodtl(qdtl);
                        //$scope.masterdllDTL = JSON.parse(datadtl1[k]);
                        var select1 = document.createElement("select");
                        select1.id = 'combo_'+i;
                        select1.setAttribute('ng-options', optionsdtl[qdtl])
                        select1.setAttribute('ng-model', 'myddlDTL'+i)
                        td.appendChild(select1);
                        input1.setAttribute('type', 'text');
                        input1.style.display = 'none';
                        input1.setAttribute('ng-value', 'myddlDTL'+i);
                    }
                   
                    else if (countth[i].className.match(/currency/g)) {
                        input1.setAttribute('type', 'text');
                        input1.className = 'currency';
                        input1.id = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-keyup', 'addCommasdtl1(\'' + input1.id + '\');')

                    }
                    else if (countth[i].className.match(/numeric/g)) {
                        input1.setAttribute('type', 'text');
                        input1.className = 'numeric';
                        input1.id = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-keyup', 'numericdtl(\'' + input1.id + '\');')

                    }
                    else if (countth[i].className.match(/time/g)) {
                        input1.setAttribute('type', 'text');
                        input1.className = 'time';
                        input1.id = thtext[i].replace(/\s/g, '');
                        input1.setAttribute('ng-keyup', 'doubledotdtl1(\'' + input1.id + '\');')

                    }
                    else {
                        input1.setAttribute('type', 'text');
                    }
                    input1.id = thtext[i].replace(/\s/g, '');
                    if (ukurandtl.length > 0) {
                        input1.style.width = ukurandtl[i] + 'px';
                    }
                    if (countth[i].className.match(/date/)) {
                        input1.className = 'date';
                    }
                    if (countth[i].className.match(/dtl/)) {
                        input1.value = $rootScope.activeId;
                    }

                }
                if (countth[i].title != '') {
                    input1.style.display = 'none';

                    var input2 = document.createElement("INPUT");
                    input2.setAttribute('type', 'submit');
                    input2.value = '...';
                    input2.id = 'popup' + i;
                    input2.style.margin = 'auto'
                    input2.style.display = 'block';
                    td.appendChild(input2);

                    var input3 = document.createElement("INPUT");
                    input3.setAttribute('type', 'text');
                    input3.id = countth[i].title;
                    input3.style.margin = 'auto';
                    input3.style.display = 'block';
                    if (ukurandtl.length > 0) {
                        input3.style.width = ukurandtl[i] + 'px';
                    }
                    input3.style.margin = 'auto';
                    td.appendChild(input3);
                    // input2.style.marginLeft = (input3.style.width / 2)-20;
                }
                if (!countth[i].className.match(/toggledtl/g)) {

                    td.appendChild(input1);

                }
                tr.appendChild(td);
                $('.date').datepicker({ dateFormat: 'yy-mm-dd' });
                if (countth[i].className.match(/checkbox1/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/currency/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/time/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/numeric/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    $compile(el)($scope);
                }
                if (countth[i].className.match(/combodtl/g)) {
                    var el = document.getElementById(thtext[i].replace(/\s/g, ''));
                    var el2 = document.getElementById('combo_'+i);
                    $compile(el)($scope);
                    $compile(el2)($scope);
                    qdtl++;
                }
                if (countth[i].title != '') {
                    var el = document.getElementById("popup" + i);
                    el.setAttribute("ng-click", "showmodaldtl1(\'" + urlpopupdtl[k] + "\',\'" + thtext[i].replace(/\s/g, '') + "\',\'" + countth[i].title + "\')");
                    $compile(el)($scope);
                    k++;
                }

            }
            else {
                var td = document.createElement("td");
                var input1 = document.createElement("INPUT");
                input1.setAttribute('type', 'submit');
                input1.value = 'save';
                input1.className = 'btn btn-danger';
                input1.id = 'savedtl';
                var input2 = document.createElement("INPUT");
                input2.setAttribute('type', 'submit');
                input2.value = 'cancel';
                input2.className = 'btn btn-danger';
                input2.id = 'canceldtl1';
                td.appendChild(input1);
                td.appendChild(input2);
                tr.appendChild(td);

                var el = document.getElementById("savedtl");
                el.setAttribute("ng-click", "savedtl1()");
                var el2 = document.getElementById("canceldtl1");
                el2.setAttribute("ng-click", "removedtl1()");
                $compile(el)($scope);
                $compile(el2)($scope);
            }

        }
        
        if (customurl.length > 0 && customurl != '' && customurl!=null ) {
            var values = { 'NoPelanggan': $rootScope.activeId };

            $http({
                url: customurl,
                method: "POST",
                data: values,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                var tmp = JSON.parse(response.data.d)
                angular.element('#LWBPAwal').val(tmp[0].LWBPAkhir);
                angular.element('#WBPAwal').val(tmp[0].WBPAkhir);
            });
        }
       
    });

});

app.controller('MyControllerForm1', function ($scope, $http, $compile, $rootScope) {
    if (data1.length > 0) {
        var getdatacombo = function (i) {
            $http({
                url: data1[i],
                method: "POST",
                data: {},
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                var thestring = 'masterdllTable' + i;
                $scope[thestring] = JSON.parse(response.data.d);
            });
        }
        for (var i = 0; i < data1.length; i++) {
            getdatacombo(i);
        }
    }
    $scope.saveForm = function clickform() {

        $rootScope.$emit("Callsave1", {});

        var classformedit = document.getElementsByClassName('formedit');
        for (var i = 0; i < classformedit.length; i++) {
            if (document.getElementById(classformedit[i].id) != null) {
                document.getElementById(classformedit[i].id).value = '';
            }
         
        }
       

        var a = document.getElementById('FormInput');
        a.style.display = 'none';
    };
    $scope.updateform1 = function clickform2() {
        var a = document.getElementById('FormInput');
        a.style.display = 'none';
        if (document.getElementById('Detail') != null) {
            angular.element('#angulardiv').append(angular.element('#Detail'));
            document.getElementById('Detail').style.display = 'none';
            angular.element('#trdetail').remove();
            angular.element('.expand').val('+');
        }
        if (document.getElementById('Detail2') != null) {
            angular.element('#angulardiv').append(angular.element('#Detail2'));
            document.getElementById('Detail2').style.display = 'none';
            angular.element('#trdetail2').remove();
            angular.element('.expand').val('+');
        }
        $rootScope.$emit("Callupdateform", {});

        var classformedit = document.getElementsByClassName('formedit');
        for (var i = 0; i < classformedit.length; i++) {
            if (document.getElementById(classformedit[i].id)!=null)
            document.getElementById(classformedit[i].id).value = '';
        }
    };
    $scope.adendum1 = function clickformadendum2() {
        var a = document.getElementById('FormInput');
        a.style.display = 'none';
        if (document.getElementById('Detail') != null) {
            angular.element('#angulardiv').append(angular.element('#Detail'));
            document.getElementById('Detail').style.display = 'none';
            angular.element('#trdetail').remove();
            angular.element('.expand').val('+');
        }
        if (document.getElementById('Detail2') != null) {
            angular.element('#angulardiv').append(angular.element('#Detail2'));
            document.getElementById('Detail2').style.display = 'none';
            angular.element('#trdetail2').remove();
            angular.element('.expand').val('+');
        }
        $rootScope.$emit("Calladendum", {});
        var classformedit = document.getElementsByClassName('formedit');
        for (var i = 0; i < classformedit.length; i++) {
            if (document.getElementById(classformedit[i].id) != null) {
                document.getElementById(classformedit[i].id).value = '';
            }
        }
    };
    $scope.setchecked = function clickform3(element) {
        var a = false;

        var b = element;
        if (b.checked) {

            a = true;
            b.value = true;
        }
        else {

            a = false;
            b.value = false;
        }

        return a;
    };
});