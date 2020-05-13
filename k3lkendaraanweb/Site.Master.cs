using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Text;
using System.Web.UI.HtmlControls;
using System.Security.Cryptography;

namespace k3lkendaraanweb
{
    public partial class SiteMaster : MasterPage
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        public DataTable dt = new DataTable();
        public DataTable dt2 = new DataTable();
        public DataRow[] result;
        public int c = 0;
        public int b = 0;
        public string user;
        public string[] usertmp;
        public string myIP = System.Net.Dns.GetHostEntry(System.Net.Dns.GetHostName()).AddressList[0].ToString();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                //user = Page.User.Identity.Name;
                //usertmp = user.Split('\\');
                GetParentMenu();
                //Session[myIP] = usertmp[1].ToString();
            }
           
        }

        public void GetParentMenu()
        {
            con.Open();

            //SqlCommand cmd = new SqlCommand("select t_msmenu.menu_name,t_msmenu.menu_id from t_msmenu where parent=''", con);
            SqlCommand cmd = new SqlCommand("select T_MsMenu.Menu_Name,T_MsMenu.Menu_Id from T_MsMenu where Parent='' order by T_MsMenu.Parent asc", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);

            da.Fill(dt);

            for (int a = 0; a < dt.Rows.Count; a++)
            {

                //SqlCommand cmd2 = new SqlCommand("select T_MsMenu.Menu_Name,T_MsMenu.Parent,Path from T_MsMenu where Parent='" + dt.Rows[a][1].ToString() + "'", con);
                SqlCommand cmd2 = new SqlCommand("select T_MsMenu.Menu_Name,T_MsMenu.Parent,Path from T_MsMenu where Parent='" + dt.Rows[a][1].ToString() + "' order by T_MsMenu.Parent asc", con);
                SqlDataAdapter da2 = new SqlDataAdapter(cmd2);
                da2.Fill(dt2);


            }

            con.Close();


        }

    }
}