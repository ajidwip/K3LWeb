using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace k3lkendaraanweb.Report
{
    public partial class K3l_Terima_Barang : System.Web.UI.Page
    {
        static SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                Populatetrxid();
            }
        }
        private void Populatetrxid()
        {

            SqlCommand cmd = new SqlCommand("select Trx_id from T_ChecklistKendaraanHeader");
            cmd.CommandType = CommandType.Text;
            SqlDataAdapter sda = new SqlDataAdapter();
            cmd.Connection = con;
            sda.SelectCommand = cmd;
            DataTable dt = new DataTable();
            sda.Fill(dt);
            ddltrxid.DataSource = dt;
            ddltrxid.DataTextField = "Trx_id";
            ddltrxid.DataValueField = "Trx_id";
            ddltrxid.DataBind();
            ddltrxid.Items.Insert(0, new ListItem("- All -", "0"));

        }
        protected void btnview_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this,
    this.GetType(), "OpenWindow", "window.open ('" + ResolveClientUrl("~/Report/reportk3lterimabarang.aspx?trxid=" + ddltrxid.SelectedValue + "") + "','_newTab');", true);
          
        }
    }
}