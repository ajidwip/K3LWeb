using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace k3lkendaraanweb.Transaction
{
    public partial class fotokondisikontainer : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                SqlCommand cmd = new SqlCommand("select Container_No,sj_No,vendor_code ,case when vendor_code is not null and vendor_code<>'' then  (select supplie_name from T_MsPo where NO_PO collate Latin1_General_CI_AS=T_KendaraanMasukGudangHeader.NO_PO) collate Latin1_General_CI_AS else Ekspedisi end,isnull(Nama_Barang,''),Note,No_Kendaraan,'' ,fotobukti,fotobukti2,fotobukti3,fotobukti4,fotobukti5,fotobukti6,fotobukti7,fotobukti8,NO_PO from T_KendaraanMasukGudangHeader where  Trx_id ='" + Request.QueryString["trxid"] + "'", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dt2 = new DataTable();

                da.Fill(dt2);

                if (dt2.Rows.Count > 0)
                {
                    //Populatetrxid(cmbpo.SelectedItem.ToString());
                    //PopulateTTB(cmbpo.SelectedItem.ToString());
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][8]).Replace("A", "") != "")
                    {
                        Image1.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][8]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][9]).Replace("A", "") != "")
                    {
                        Image2.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][9]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][10]).Replace("A", "") != "")
                    {
                        Image3.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][10]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][11]).Replace("A", "") != "")
                    {
                        Image4.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][11]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][12]).Replace("A", "") != "")
                    {
                        Image5.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][12]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][13]).Replace("A", "") != "")
                    {
                        Image6.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][13]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][14]).Replace("A", "") != "")
                    {
                        Image7.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][14]);

                    }
                    if (Convert.ToBase64String((byte[])dt2.Rows[0][15]).Replace("A", "") != "")
                    {
                        Image8.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][15]);

                    }
                }
            }
        }
    }
}