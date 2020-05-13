<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="FrmrptK3lterimaBarang.aspx.cs" Inherits="k3lkendaraanweb.Report.K3l_Terima_Barang" %>
<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent"></asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
<form runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
     
    <br />
    <asp:Label ID="Label1" runat="server" Text="K3l Terima Barang" Font-Bold="True" 
        Font-Size="XX-Large"></asp:Label>
      <asp:UpdatePanel ID="up" UpdateMode="Conditional" runat="server">
        <ContentTemplate>
        <asp:Table ID="Table1" runat="server" Height="98px" Width="225px">
              <asp:TableRow ID="TableRow2" runat="server">
               <asp:TableCell runat="server">
                         Transaction Id:
                      <asp:DropDownList ID="ddltrxid" runat="server" AutoPostBack="true" >
                      </asp:DropDownList>
               </asp:TableCell>
               
                  </asp:TableRow>
         
          
        </asp:Table>
              <asp:Button ID="btnview" OnClick="btnview_Click" CssClass="btn btn-w-m btn-primary" runat="server" Text="view" />
      </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br /><br />
   <br /><br />
 
        
    <br />
    </form>
</asp:Content>