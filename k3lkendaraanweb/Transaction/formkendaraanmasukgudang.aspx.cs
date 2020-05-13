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
    public partial class formkendaraanmasukgudang : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        public DataTable dt = new DataTable();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // loading.Visible = false;
                txtsj.Enabled = false;
                txtnocontainer.Enabled = false;
                txtNokendaraan.Enabled = false;
                txtsupplier.Enabled = false;
                PopulateSite();
                Populatetrxid();
                 Bind();
            }

        }
        private void PopulateSite()
        {

            SqlCommand cmd = new SqlCommand("select No_PO from T_MsPo");
            cmd.CommandType = CommandType.Text;
            SqlDataAdapter sda = new SqlDataAdapter();
            cmd.Connection = con;
            sda.SelectCommand = cmd;
            DataTable dt = new DataTable();
            sda.Fill(dt);
            cmbpo.DataSource = dt;
            cmbpo.DataTextField = "No_PO";
            cmbpo.DataValueField = "No_PO";
            cmbpo.DataBind();

            cmbpo.Items.Insert(0, new ListItem("select", ""));


        }
   
        private void Populatetrxid()
        {

            SqlCommand cmd = new SqlCommand("select Trx_Id from T_KendaraanMasukGudangHeader");
            cmd.CommandType = CommandType.Text;
            SqlDataAdapter sda = new SqlDataAdapter();
            cmd.Connection = con;
            sda.SelectCommand = cmd;
            DataTable dt = new DataTable();
            sda.Fill(dt);
            cmdtrxid.DataSource = dt;
            cmdtrxid.DataTextField = "Trx_Id";
            cmdtrxid.DataValueField = "Trx_Id";
            cmdtrxid.DataBind();
            cmdtrxid.Items.Insert(0, new ListItem("select", ""));
            //cmdtrxid.SelectedValue = "0001";
        }
        public void Bind()
        {
            if (cmdtrxid.SelectedItem != null)
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("exec [SP_Vwpernytaankdrmasukgudang]'PRC','" + cmdtrxid.SelectedItem.ToString() + "'", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                da.Fill(dt);

                formcontent.InnerHtml = dt.Rows[0][0].ToString();

                con.Close();
            }

        }


        protected void Button1_Click(object sender, EventArgs e)
        {
            if (HiddenField1.Value == "yes")
            {


                try
                {
                    if (txtnamaproduk.Text != "")
                    {
                        con.Open();
                        string TTB = "";
                      
                        
                        SqlCommand cmd = new SqlCommand("update T_KendaraanMasukGudangHeader set Nama_Barang='" + txtnamaproduk.Text.ToString() + "' where Trx_Id='" + cmdtrxid.SelectedItem.ToString() + "'", con);
                        cmd.ExecuteNonQuery();
                        con.Close();
                        ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('Updated');", true);
                    }
                    else
                    {
                        ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('Harap lengkapi yang masih kosong');", true);
                    }
                }
                catch (Exception ex)
                {
                    ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('Can't update');", true);
                }
            }
        }

        protected void cmdtrxid_SelectedIndexChanged(object sender, EventArgs e)

        {



            SqlCommand cmd = new SqlCommand("select Container_No,sj_No,vendor_code ,case when vendor_code is not null and vendor_code<>'' then  (select supplie_name from T_MsPo where NO_PO collate Latin1_General_CI_AS =T_KendaraanMasukGudangHeader.NO_PO)  collate  Latin1_General_CI_AS else Ekspedisi end,isnull(Nama_Barang,''),No_Kendaraan,note,NO_PO,Fotobukti,Fotobukti2,Fotobukti3,Fotobukti4,Fotobukti5,Fotobukti6,Fotobukti7,Fotobukti8 from T_KendaraanMasukGudangHeader where  Trx_id='" + cmdtrxid.SelectedItem.ToString() + "'", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt2 = new DataTable();

            da.Fill(dt2);

            if (dt2.Rows.Count > 0)
            {
                if (Convert.ToBase64String((byte[])dt2.Rows[0][8]).Replace("A", "") != "")
                {
                    Image1.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][8]);

                }
                else
                {
                    Image1.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][9]).Replace("A", "") != "")
                {
                    Image2.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][9]);

                }
                else
                {
                    Image2.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][10]).Replace("A", "") != "")
                {
                    Image3.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][10]);

                }
                else
                {
                    Image3.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][11]).Replace("A", "") != "")
                {
                    Image4.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][11]);

                }
                else
                {
                    Image4.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][12]).Replace("A", "") != "")
                {
                    Image5.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][12]);

                }
                else
                {
                    Image5.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][13]).Replace("A", "") != "")
                {
                    Image6.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][13]);

                }
                else
                {
                    Image6.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][14]).Replace("A", "") != "")
                {
                    Image7.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][14]);

                }
                else
                {
                    Image7.ImageUrl = "";
                }
                if (Convert.ToBase64String((byte[])dt2.Rows[0][15]).Replace("A", "") != "")
                {
                    Image8.ImageUrl = "data:image;base64," + Convert.ToBase64String((byte[])dt2.Rows[0][15]);

                }
                else
                {
                    Image8.ImageUrl = "";
                }
             
                txtsj.Text = dt2.Rows[0][1].ToString();
                txtsupplier.Text = dt2.Rows[0][3].ToString();
                txtNokendaraan.Text = dt2.Rows[0][5].ToString();
                txtnocontainer.Text = dt2.Rows[0][0].ToString();
                txtcatatan.Text = dt2.Rows[0][6].ToString();
                 cmbpo.SelectedValue = dt2.Rows[0][7].ToString();
            }
            else
            {
                txtsj.Text = "";
              
                txtsupplier.Text = "";
                txtnamaproduk.Text = "";
                txtnocontainer.Text = "";
                txtNokendaraan.Text = "";
                txtcatatan.Text = "";
            }

            Bind();
            ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "$('#loading').hide();", true);
        }
    }
}