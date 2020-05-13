<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="~/Site.Master" CodeBehind="fotokondisikontainer.aspx.cs" Inherits="k3lkendaraanweb.Transaction.fotokondisikontainer" %>
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
        
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
          <asp:UpdatePanel ID="up" UpdateMode="Conditional" runat="server">
        <ContentTemplate>
            <asp:HiddenField ID="HiddenField1" runat="server" />
              <br />
            <asp:Image ID="Image1" runat="server" style="width:180px;height=180px"/>
             <asp:Image ID="Image2" runat="server" style="width:180px;height=180px"/>
             <asp:Image ID="Image3" runat="server" style="width:180px;height=180px" />
             <asp:Image ID="Image4" runat="server" style="width:180px;height=180px" />
             <asp:Image ID="Image5" runat="server" style="width:180px;height=180px" />
             <asp:Image ID="Image6"  runat="server" style="width:180px;height=180px"/>
             <asp:Image ID="Image7" runat="server" style="width:180px;height=180px" />
             <asp:Image ID="Image8" runat="server" style="width:180px;height=180px" />
             <asp:Image ID="Image9" runat="server" style="width:180px;height=180px"/>

         
<%--        <asp:Table ID="Table1" runat="server" Height="98px" Width="225px">
               <asp:TableRow ID="TableRow3" runat="server">
                      <asp:TableCell runat="server">
                              <br />
                     No Po:
                        
                             
                  </asp:TableCell>
                      <asp:TableCell runat="server">
                        &nbsp;
                       </asp:TableCell>

                    <asp:TableCell runat="server">
                           <br />
                     Transaction Id:
                  </asp:TableCell>
                   
        </asp:TableRow>
          
        </asp:Table>--%>
          <div style="height:550px;overflow:scroll" runat="server" id="formcontent">
          
        </div>
      </ContentTemplate>
              
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

