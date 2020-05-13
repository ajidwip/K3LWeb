<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="user.aspx.cs" Inherits="k3lkendaraanweb.Master.user" %>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <%:Styles.Render("~/Content/plugins/dataTables/dataTablesStyles") %>
    <%:Scripts.Render("~/plugins/dataTables")%>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>Master User</h2>
            <ol class="breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a>Tables</a>
                </li>
                <li class="active">
                    <strong>Master User</strong>
                </li>
            </ol>
        </div>
        <div class="col-lg-2">
        </div>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <input type="submit" class="btn btn-w-m btn-primary" id="new"   value="New" />
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
                            <div ng-app="myApp" ng-controller="MyController">
                                <table>
                                    <tr>
                                        <td width="80%"></td>
                                        <td>
                                            <div class="pull-right mail-search">
                                                <div class="input-group">
                                                    <input id="txtsearch" class="form-control input-sm" placeholder="User Name" type="text">
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-primary" type="submit" ng-click="search1();">Search </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <table id="tablemenu" datatable="ng" class="table table-striped table-bordered table-hover dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>User Id</th>
                                            <th>User Name</th>
                                             <th title="NamaBagian">Bagian</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="{{$index}}" ng-repeat="x in master" class="gradeX">
                                            <td ng-click="inlineEdit1($index)">
                                                <label class="hidewhenclick_{{$index}}">{{x.UserId}}</label>
                                                <input type="text" disabled id="UserId_{{$index}}" class="control_{{$index}}" style="display: none" ng-value="x.UserId" />
                                            </td>
                                            <td ng-click="inlineEdit1($index)">
                                                <label class="hidewhenclick_{{$index}}">{{x.UserName}}</label>
                                                <input type="text" id="UserName_{{$index}}" class="control_{{$index}}" style="display: none" ng-value="x.UserName" />
                                            </td>
                                          <td ng-click="inlineEdit1($index)">
                                                    <label class="hidewhenclick_{{$index}}">{{x.NamaBagian}}</label>
                                                    <input type="submit" id=popup_{{$index}} class="control_{{$index}}" ng-click="showmodal1('<%=ResolveUrl("~/Default.aspx/Getdivisi") %>','Bagian_'+$index,'NamaBagian_'+$index)" style="display: none; margin: auto" value="..."/>
                                                    <input type="text" id="Bagian_{{$index}}" style="display: none" ng-value="x.Bagian" />
                                                    <input type="text" id="NamaBagian_{{$index}}" class="control_{{$index}}"  style="display: none" ng-value="x.NamaBagian" />
                                                </td>
                                            
                                              <td ng-click="inlineEdit1($index)">
                                                    <label class="hidewhenclick_{{$index}}">{{x.Email}}</label>
                                                  <input type="text" id="Email_{{$index}}" class="control_{{$index}}" style="display: none" ng-value="x.Email" />
                                            </td>
                                            <td>
                                               
                                                <input ng-click="delete1($index)" class="hidewhenclick_{{$index}}  btn btn-success" style="display:inline" 
                                                         type="submit" value="delete" />
                                                <input ng-click="closeEdit1($index)" class="control_{{$index}}  btn btn-danger" style="display: none" type="submit" value="cancel" />

                                         
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        window.id1 = ['UserId', 'UserName', 'Bagian','Email'];
        window.ukuran = [];
        window.url1 = "<%=ResolveUrl("~/Master/user.aspx/GetData") %>";
        window.url2 = "<%=ResolveUrl("~/Master/user.aspx/crud1") %>";
        window.Key = 'UserId';
        window.filter1 = 'UserName';
        window.urlpopup = ["<%=ResolveUrl("~/Default.aspx/Getdivisi") %>"];
    </script>
</asp:Content>
