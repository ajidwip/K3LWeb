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
    public partial class reportk3lterimabarang : System.Web.UI.Page
    {
     
        DataTable dt = new DataTable();
        static SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
              
                BinData2(Request.QueryString["trxid"]);
                BinData(Request.QueryString["trxid"]);
                BinTTD(Request.QueryString["trxid"]);
            }
           
        }
        public void BinData(string trxid)
        {
            string SelectString = "[sp_rptterimabarang] '" + trxid+"'";

            con.Open();
            SqlCommand cmd = new SqlCommand(SelectString, con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);

            da.Fill(dt);
            //for (int i = 0; i < dt.Rows.Count; i++)
            //{
            //    DataRow dr = dt.Rows[i];
            //    if (dr[5] == "")
            //    {
            //        dr.Delete();
            //    }
                   
            //}
            //dt.AcceptChanges();
            lvBKKDetail.DataSource = dt;
            lvBKKDetail.DataBind();
            con.Close();
        }
        public void BinData2(string trxid)
        {
            string SelectString = "select Tanggal,No_TTB,Sj_No,Nama_Produk,case when vendor_code is not null and vendor_code<>'' then  (select supplie_name from T_MsPo where NO_PO=T_ChecklistKendaraanHeader.NO_PO) else Ekspedisi end supplier from T_ChecklistKendaraanHeader where Trx_Id = '" + trxid + "'";

            con.Open();
            SqlCommand cmd = new SqlCommand(SelectString, con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);

            da.Fill(dt);

            ListView1.DataSource = dt;
            ListView1.DataBind();
            con.Close();
        }

        public void BinTTD(string trxid)
        {
            string SelectString = "select Nama_Supir,(select UserName from T_MSUser where UserId=CreatedBy_Security) CreatedBy_Security,(select UserName from T_MSUser where UserId=CreatedBy_Logistic) CreatedBy_Logistic,CreatedBy_Procurement from T_ChecklistKendaraanHeader where Trx_Id = '" + trxid + "'";

            con.Open();
            SqlCommand cmd = new SqlCommand(SelectString, con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);

            da.Fill(dt);

            lvAuthorization.DataSource = dt;
            lvAuthorization.DataBind();
            con.Close();
        }
    }
}