<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="~/Site.Master" CodeBehind="formkendaraanmasukgudang.aspx.cs" Inherits="k3lkendaraanweb.Transaction.formkendaraanmasukgudang" %>
<%@ MasterType VirtualPath="~/Site.Master" %>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <form id="form1" runat="server">
        <style type="text/css"> 
            .center-div {
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100px;
            height: 100px;
        }

        </style>
        <div id="loading" class="center-div" style="display:none">
                    <img src="<%=ResolveUrl("~/Content/loading.gif") %>" style="width: 100px; height: 100px;" />
                </div>
        Checklist Kondisi Kendaraan  Masuk Gudang
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
          <asp:UpdatePanel ID="up" UpdateMode="Conditional" runat="server">
        <ContentTemplate>
            <asp:HiddenField ID="HiddenField1" runat="server" />

          <asp:Image ID="Image1" runat="server" style="width:60px;height=60px"/>
             <asp:Image ID="Image2" runat="server" style="width:60px;height=60px" />
             <asp:Image ID="Image3" runat="server" style="width:60px;height=60px" />
             <asp:Image ID="Image4" runat="server" style="width:60px;height=60px" />
             <asp:Image ID="Image5"  runat="server" style="width:60px;height=60px"/>
             <asp:Image ID="Image6" runat="server" style="width:60px;height=60px" />
             <asp:Image ID="Image7" runat="server" style="width:60px;height=60px" />
             <asp:Image ID="Image8" runat="server" style="width:60px;height=60px"/>

        <asp:Table ID="Table1" runat="server" Height="98px" Width="225px">
               <asp:TableRow ID="TableRow3" runat="server">
             
                    <asp:TableCell runat="server">
                           <br />
                     Transaction Id:<asp:DropDownList ID="cmdtrxid" Width="200px" CssClass ="form-control" ClientIDMode="Static" AutoPostBack="true" runat="server" OnSelectedIndexChanged="cmdtrxid_SelectedIndexChanged" onchange="showload();"></asp:DropDownList>
                  </asp:TableCell>
                   
                      <asp:TableCell runat="server">
                        &nbsp;
                       </asp:TableCell>

                   <asp:TableCell runat="server">
                              <br />
                     No Po:<asp:DropDownList ID="cmbpo" class="form-control" Width="200px" AutoPostBack="true" runat="server"></asp:DropDownList>
                        
                             
                  </asp:TableCell>
                   
        </asp:TableRow>
             <asp:TableRow ID="TableRow1" runat="server">
                      <asp:TableCell runat="server">
                              <br />
                     Supplier:<asp:TextBox ID="txtsupplier" Width="200px" runat="server"></asp:TextBox>
                  </asp:TableCell>
                   <asp:TableCell runat="server">
                        &nbsp;
                       </asp:TableCell>
                  <asp:TableCell runat="server">
                              <br />
                   Nama Product:<asp:TextBox ID="txtnamaproduk" Width="200px" runat="server"  onkeyup="this.value = this.value.toUpperCase();"></asp:TextBox>
                  </asp:TableCell>
        </asp:TableRow>
        
                   <asp:TableRow ID="TableRow4" runat="server">
                      <asp:TableCell runat="server">
                              <br />
                     SJ No:<asp:TextBox ID="txtsj" Width="200px" runat="server"></asp:TextBox>
                  </asp:TableCell>
                         <asp:TableCell runat="server">
                             &nbsp;
                       </asp:TableCell>
                        <asp:TableCell runat="server">
                              <br />
                     No Kendaraan:<asp:TextBox ID="txtNokendaraan" Width="200px" runat="server"></asp:TextBox>
                  </asp:TableCell>
        </asp:TableRow>
               <asp:TableRow ID="TableRow2" runat="server">
                      <asp:TableCell runat="server">
                              <br />
                      No Container:<asp:TextBox ID="txtnocontainer" Width="200px" runat="server"></asp:TextBox>
                  </asp:TableCell>
                         <asp:TableCell runat="server">
                             &nbsp;
                       </asp:TableCell>
                        <asp:TableCell runat="server">
                              <br />
                     Catatan:<asp:TextBox ID="txtcatatan" Width="200px" runat="server"></asp:TextBox>
                  </asp:TableCell>
        </asp:TableRow>
             <asp:TableRow ID="TableRow5" runat="server">
                    <asp:TableCell runat="server"> 
                              <br /> <br />
                   <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="save" CssClass="btn btn-w-m btn-primary"  OnClientClick="return Confirm();" />
                  </asp:TableCell>
        </asp:TableRow>
        </asp:Table>
          <div style="height:550px;overflow:scroll" runat="server" id="formcontent">
          
        </div>
      </ContentTemplate>
              <Triggers>
                  <asp:AsyncPostBackTrigger  ControlID="cmdtrxid" EventName="SelectedIndexChanged"/>
              </Triggers>
    </asp:UpdatePanel>
        
    </form>

    <script type="text/javascript">
        function showload() {
           
                $('#loading').show();

        }
        function Confirm() {
            if (confirm("Are you sure?") == true) {
                document.getElementById('<%= HiddenField1.ClientID %>').value = 'yes';
            }

            else {
                document.getElementById('<%= HiddenField1.ClientID %>').value = 'no';
            }
           
            
        }
    </script>
</asp:Content>
