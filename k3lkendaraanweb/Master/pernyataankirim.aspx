<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="pernyataankirim.aspx.cs" Inherits="k3lkendaraanweb.Master.pernyataankirim" %>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <%:Styles.Render("~/Content/plugins/dataTables/dataTablesStyles") %>
    <%:Scripts.Render("~/plugins/dataTables")%>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>Pertanyaan Form Pengiriman Barang</h2>
            <ol class="breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a>Tables</a>
                </li>
                <li class="active">
                    <strong>Pertanyaan Form Pengiriman Barang</strong>
                </li>
            </ol>
        </div>
        <div class="col-lg-2">
        </div>
    </div>
    <div ng-app="myApp">
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <input type="submit" class="btn btn-w-m btn-primary" id="new" value="New" />
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <div class="table-responsive">
                                <div id="angulardiv" ng-controller="MyController">
                                   
                                    <table id="tablemenu" datatable="ng" class="table table-striped table-bordered table-hover dataTables-example">
                                        <thead>
                                            <tr>
                                                <th class="toggle"></th>
                                                <th>No</th>
                                                <th>Pernyataan</th>
                                                <th title="NamaBagian">Bagian</th>
                                                 
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="{{$index}}" ng-repeat="x in master|filter:activeId1" class="gradeX">
                                                <td>
                                                    <input type="submit" id="showdtl_{{$index}}" class="expand btn btn-primary" style="width: 40px" ng-click="showtabledtl($index,'12','No_',1)" value="+" /></td>
                                                <td>
                                                    <label class="hidewhenclick_{{$index}}">{{x.No}}</label>
                                                    <input type="text" id="No_{{$index}}" class="control_{{$index}}" style="display: none" ng-value="x.No" />
                                                   
                                                </td>
                                                <td>

                                                  <label class="hidewhenclick_{{$index}}">{{x.Pernyataankirim}}</label>
                                                    <input type="text" id="Pernyataan_{{$index}}" class="control_{{$index}}" style="display: none" ng-value="x.Pernyataankirim" />
                                                </td>
                                                <td>
                                                    <label class="hidewhenclick_{{$index}}">{{x.NamaBagian}}</label>
                                                    <input type="submit" id=popup_{{$index}} class="control_{{$index}}" ng-click="showmodal1('<%=ResolveUrl("~/Default.aspx/Getdivisi") %>','Bagian_'+$index,'NamaBagian_'+$index)" style="display: none; margin: auto" value="..."/>
                                                    <input type="text" id="Bagian_{{$index}}" style="display: none" ng-value="x.Bagian" />
                                                    <input type="text" id="NamaBagian_{{$index}}" class="control_{{$index}}"  style="display: none" ng-value="x.NamaBagian" />
                                                </td>
                                      
                                                <td>
                                                    <input ng-click="inlineEdit1($index)"  class="hidewhenclick_{{$index}} btn btn-danger"  type="submit" value="Edit" />
                                                    <input ng-click="delete1($index)" class="hidewhenclick_{{$index}} btn btn-success"  type="submit" value="delete" />
                                                    <input ng-click="closeEdit1($index)" class="control_{{$index}} btn btn-danger" style="display: none" type="submit" value="cancel" />

                                                    <input ng-click="update1($index)" class="control_{{$index}} btn btn-danger" style="display: none" type="submit" value="update" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                      <div id="tableinfo" class="dataTables_info1">

									  </div>
                                    <div>
                                        <ul class="pagination">
                                            <li class="paginate_button previous">
                                                <input class="btn btn-primary" type="submit" id="previous" value="Previous" ng-click="nextprev('prev');" /></li>
                                            <li>
                                                <input type="text" id="page" style="width: 30px" /></li>
                                            <li>
                                                <input class="btn btn-primary" type="submit" id="next" value="next" ng-click="nextprev('next');" /></li>
                                        </ul>
                                    </div>
                                    <div id="Detail" ng-controller="MyControllerDetail" style="display: none">
                                        <input type="submit" class="btn btn-w-m btn-warning" id="newdtl" value="New" />
                                        <table id="tablemenudetail" datatable="ng" class="table table-striped table-bordered table-hover dataTables-example">
                                            <thead>
                                                <tr>
                                                    <th class="dtl">No Header</th>
                                                    <th>No Detail</th>
                                                    <th>Pernyataan Detail</th>
                                                       <th>Bobot</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="{{$index}}" ng-repeat="x in masterdtl|filter:activeId" class="gradeX">
                                                    <td ng-click="inlineEditdtl1($index)">
                                                        <label class="hidewhenclickdtl_{{$index}}">{{x.No}}</label>
                                                        <input type="text" disabled id="NoHeader_{{$index}}" class="controldtl_{{$index}}" style="display: none; width: 30px" ng-value="x.No" />
                                                    </td>
                                                    <td ng-click="inlineEditdtl1($index)">
                                                        <label class="hidewhenclickdtl_{{$index}}">{{x.NoDetail}}</label>
                                                        <input type="text" id="NoDetail_{{$index}}" class="controldtl_{{$index}}" style="display: none" ng-value="x.NoDetail" />
                                                    </td>
                                                    <td ng-click="inlineEditdtl1($index)">
                                                        <label class="hidewhenclickdtl_{{$index}}">{{x.PernyataankirimDetail}}</label>
                                                        <input type="text" id="PernyataanDetail_{{$index}}" class="controldtl_{{$index}}" style="display: none" ng-value="x.PernyataankirimDetail" />
                                                    </td>
                                                      <td ng-click="inlineEditdtl1($index)">
                                                        <label class="hidewhenclickdtl_{{$index}}">{{x.Bobot}}</label>
                                                        <input type="text" id="Bobot_{{$index}}" class="controldtl_{{$index}}" style="display: none" ng-value="x.Bobot" />
                                                    </td>
                                                    <td>
                                                        <input ng-click="inlineEditdtl1($index)"  else
                                                         class="hidewhenclickdtl_{{$index}} btn btn-danger" type="submit" value="Edit" />
                                                        <input ng-click="deletedtl1($index)"  class="hidewhenclickdtl_{{$index}} btn btn-success"  type="submit" value="delete" />
                                                        <input ng-click="closeEditdtl1($index)" class="controldtl_{{$index}} btn btn-danger" style="display: none" type="submit" value="cancel" />

                                                        <input ng-click="updatedtl1($index)" class="controldtl_{{$index}} btn btn-danger" style="display: none" type="submit" value="update" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                         <div id="tableinfodtl" class="dataTables_info1">

									  </div>
                                        <div>
                                            <ul class="pagination">
                                                <li class="paginate_button previous">
                                                    <input class="btn btn-primary" type="submit" id="previousdtl" value="Previous" ng-click="nextprevdtl('prev');" /></li>
                                                <li>
                                                    <input type="text" id="pagedtl" style="width: 30px" /></li>
                                                <li>
                                                    <input class="btn btn-primary" type="submit" id="nextdtl" value="next" ng-click="nextprevdtl('next');" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        window.id1 = ['No', 'Pernyataan', 'Bagian'];
        window.ukuran = [];
        window.ukurandtl = [];
        window.id1Dtl = ['NoHeader', 'NoDetail', 'PernyataanDetail','Bobot'];
        window.url1 = "<%=ResolveUrl("~/Master/pernyataankirim.aspx/GetData") %>";
        window.urldtl1 = "<%=ResolveUrl("~/Master/pernyataankirim.aspx/GetDatadtl") %>";
        window.url2 = "<%=ResolveUrl("~/Master/pernyataankirim.aspx/crud1") %>";
        window.Key = 'No';
        window.url2dtl = "<%=ResolveUrl("~/Master/pernyataankirim.aspx/crudDtl") %>"
        window.filterdtl = 'No';
        window.filter1 = 'No';

        window.urlpopup = ["<%=ResolveUrl("~/Default.aspx/Getdivisi") %>"];
       
    </script>
</asp:Content>