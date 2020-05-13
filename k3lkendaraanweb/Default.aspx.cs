using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

using k3lkendaraanweb.GetterSetter;

namespace k3lkendaraanweb
{
    public partial class _Default : Page
    {
        static SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static DetailClass[] Getdivisi()
        {
            List<DetailClass> Detail = new List<DetailClass>();

            string SelectString = "Select kd_bagian,Nama_Bagian from T_Msdivisi";

            con.Open();
            SqlCommand cmd = new SqlCommand(SelectString, con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dtGetData = new DataTable();

            da.Fill(dtGetData);

            foreach (DataRow dtRow in dtGetData.Rows)
            {
                DetailClass DataObj = new DetailClass();

                DataObj.kode = dtRow["kd_bagian"].ToString();
                DataObj.desc = dtRow["Nama_Bagian"].ToString();
                Detail.Add(DataObj);
            }
            con.Close();
            da.Dispose();
            dtGetData.Dispose();
            //JavaScriptSerializer js = new JavaScriptSerializer();
            //string a = js.Serialize(Detail);
            return Detail.ToArray();
        }
    }
}