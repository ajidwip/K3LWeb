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
    public partial class formk3lkendaraan : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        public DataTable dt = new DataTable();
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
               // loading.Visible = false;
                txtsj.Enabled = false;
                txtsupir.Enabled = false;
                txtNokendaraan.Enabled = false;
                txtsupplier.Enabled = false;
                PopulateSite();
                Populatetrxid();
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
        private void PopulateTTB(string nopo)
        {

            SqlCommand cmd = new SqlCommand("exec [SP_vwTTB] '"+ nopo + "'");
            cmd.CommandType = CommandType.Text;
            SqlDataAdapter sda = new SqlDataAdapter();
            cmd.Connection = con;
            sda.SelectCommand = cmd;
            DataTable dt = new DataTable();
            sda.Fill(dt);
            cmbTTB.DataSource = dt;
            cmbTTB.DataTextField = "Receiptplusdate";
            cmbTTB.DataValueField = "RECEIPT_REFERENCE";
            cmbTTB.DataBind();
            cmbTTB.Items.Insert(0, new ListItem("select", ""));

        }

        private void Populatetrxid()
        {

            SqlCommand cmd = new SqlCommand("select Trx_Id from T_ChecklistKendaraanHeader");
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
            if(cmdtrxid.SelectedItem!=null)
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("exec [SP_Vwpernytaan]'PRC','" + cmdtrxid.SelectedItem.ToString() + "'", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                da.Fill(dt);

                formcontent.InnerHtml = dt.Rows[0][0].ToString();

                con.Close();
            }
            
        }

        protected void cmbpo_SelectedIndexChanged(object sender, EventArgs e)
        {
           
            PopulateTTB(cmbpo.SelectedItem.ToString());
          
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if(HiddenField1.Value=="yes")
            {

          
            try
            {
                if(txtpic.Text!="" && txtnamaproduk.Text!="")
                {
                    con.Open();
                    string TTB = "";
                    if (cmbTTB.SelectedItem==null)
                    {
                        TTB = "";
                    }
                    else
                    {
                        TTB = cmbTTB.SelectedItem.ToString();

                    }
                    SqlCommand cmd = new SqlCommand("update T_ChecklistKendaraanHeader set No_TTB='" + TTB + "',Nama_Produk='" + txtnamaproduk.Text.ToString() + "',createdby_procurement='" + txtpic.Text.ToString() + "' where Trx_Id='" +cmdtrxid.SelectedItem.ToString()+ "'", con);
                    cmd.ExecuteNonQuery();
                    con.Close();
                    ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('Updated');", true);
                }
                else
                {
                    ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('Harap lengkapi yang masih kosong');", true);
                }
            }catch(Exception ex)
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('Can't update');", true);
            }
            }
        }

        protected void cmdtrxid_SelectedIndexChanged(object sender, EventArgs e)

        {

            

            SqlCommand cmd = new SqlCommand("select Nama_supir,sj_No,vendor_code ,case when vendor_code is not null and vendor_code<>'' then  (select supplie_name from T_MsPo where NO_PO=T_ChecklistKendaraanHeader.NO_PO) else Ekspedisi end,isnull(Nama_Produk,''),isnull(NO_TTB,''),No_Kendaraan,CreatedBy_Procurement ,fotobukti,fotobukti2,fotobukti3,fotobukti4,fotobukti5,fotobukti6,fotobukti7,fotobukti8,NO_PO from T_ChecklistKendaraanHeader where  Trx_id='" + cmdtrxid.SelectedItem.ToString() + "'", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt2 = new DataTable();

            da.Fill(dt2);

            if (dt2.Rows.Count > 0)
            {
                //Populatetrxid(cmbpo.SelectedItem.ToString());
                //PopulateTTB(cmbpo.SelectedItem.ToString());
                if(Convert.ToBase64String((byte[])dt2.Rows[0][8]).Replace("A","")!="")
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
                cmbpo.SelectedValue = dt2.Rows[0][16].ToString();
                PopulateTTB(cmbpo.SelectedItem.ToString());
                txtsj.Text = dt2.Rows[0][1].ToString();
                txtsupir.Text = dt2.Rows[0][0].ToString();
                txtsupplier.Text = dt2.Rows[0][3].ToString();
                txtnamaproduk.Text = dt2.Rows[0][4].ToString();
                if (dt2.Rows[0][5].ToString() != null)
                {
                    if(dt2.Rows[0][5].ToString()!="")
                    {
                        cmbTTB.SelectedValue = dt2.Rows[0][5].ToString();
                    }
                   
                }

                //cmbTTB.SelectedItem = dt2.Rows[0][5].ToString();
                txtNokendaraan.Text = dt2.Rows[0][6].ToString();
                txtpic.Text = dt2.Rows[0][7].ToString();

            }
            else
            {
                txtsj.Text = "";
                txtsupir.Text = "";
                txtsupplier.Text = "";
                txtnamaproduk.Text = "";

                txtNokendaraan.Text = "";
                txtpic.Text = "";
            }

            Bind();
            ScriptManager.RegisterClientScriptBlock(this.Page,this.Page.GetType(), "alert", "$('#loading').hide();", true);
        }

        protected void cmbTTB_SelectedIndexChanged(object sender, EventArgs e)
        {
            SqlCommand cmd = new SqlCommand("exec [SP_vwTTBBarang]'"+cmbTTB.SelectedItem.ToString()+"'", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt2 = new DataTable();

            da.Fill(dt2);

            if (dt2.Rows.Count > 0)
            {
                for(int i=0; i< dt2.Rows.Count;i++)
                {
                    if(i==0)
                    {
                        txtnamaproduk.Text = dt2.Rows[i][0].ToString()+",";
                    }
                    else if(i==dt2.Rows.Count-1)
                    {
                        txtnamaproduk.Text += dt2.Rows[i][0].ToString();
                    }
                    else
                    {
                        txtnamaproduk.Text += dt2.Rows[i][0].ToString() + ",";
                    }
                }
            }
                
        }
    }
}