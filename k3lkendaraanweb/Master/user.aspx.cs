using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using k3lkendaraanweb.GetterSetter;

namespace k3lkendaraanweb.Master
{
    public partial class user : System.Web.UI.Page
    {
        static SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        static CRUD crud = new CRUD();
        public static string returna;
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string GetData(string filter)
        {
            string SelectString = "";

            SelectString = "Select [UserId] ,[UserName],[kd_bagian],Email,(select Nama_Bagian from T_MsDivisi where T_MsDivisi.Kd_bagian=T_MsUser.Kd_Bagian) Nama_Bagian  from [T_MsUser] where UserName like '%" + filter + "%'";

            List<UserGetSet> Detail = new List<UserGetSet>();

            con.Open();
            SqlCommand cmd = new SqlCommand(SelectString, con);
            using (var reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    Detail = reader.Cast<IDataRecord>()
                         .Select(r => new UserGetSet
                         {
                             UserId = (string)r["UserId"].ToString(),
                             UserName = (string)r["UserName"].ToString(),
                             Bagian = (string)r["kd_bagian"].ToString(),
                             Email = (string)r["Email"].ToString(),
                             NamaBagian= (string)r["Nama_Bagian"].ToString()
                         }).ToList();

                }
            }

            con.Close();

            JavaScriptSerializer js = new JavaScriptSerializer();
            string a = js.Serialize(Detail);
            return a;
        }
        [WebMethod]
        public static string crud1(string UserId, string UserName, string Bagian,string Email, string tipe)
        {
            if (tipe == "1")
            {
                try
                {
                    crud.columna = new string[] { "" + UserId + "", "" + UserName + "", "" + Bagian + "","12345", Email };
                    crud.ExecuteSP("[SP_InsertUser]", crud.columna);

                    string NamaBagian;
                    con.Open();
                    SqlCommand cmd1 = new SqlCommand("Select Nama_Bagian from T_MsDivisi where kd_bagian='" + Bagian + "'", con);
                    SqlDataAdapter da1 = new SqlDataAdapter(cmd1);
                    DataTable dt1 = new DataTable();

                    da1.Fill(dt1);
                    NamaBagian = dt1.Rows[0][0].ToString();
                    con.Close();

                    UserGetSet DataObj = new UserGetSet();
                    DataObj.UserId = UserId;
                    DataObj.UserName = UserName;
                    DataObj.Bagian = Bagian;
                    DataObj.Email = Email;
                    DataObj.NamaBagian = NamaBagian;
                    string a = "";
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    a = js.Serialize(DataObj);
                    returna = a;
                }
                catch (Exception ex)
                {
                    returna = "err$" + ex.Message.ToString();
                    crud.con.Close();
                }
            }
            else if (tipe == "2")
            {
                //try
                //{
                //    crud.columna = new string[] { "" + UserId + "", "" + UserName + "", "" + Bagian + "" };
                //    crud.ExecuteSP("[SP_updateUser]", crud.columna);

                //    UserGetSet DataObj = new UserGetSet();
                //    DataObj.UserId = UserId;
                //    DataObj.UserName = UserName;
                //    DataObj.Bagian = Bagian;
                 
                //    string a = "";
                //    JavaScriptSerializer js = new JavaScriptSerializer();
                //    a = js.Serialize(DataObj);
                //    returna = a;
                //}
                //catch (Exception ex)
                //{
                //    returna = "err$" + ex.Message.ToString();
                //    crud.con.Close();
                //}
            }
            else
            {
                try
                {
                    crud.columna = new string[] { "" + UserId + "" };
                    crud.ExecuteSP("[SP_deleteUser]", crud.columna);
                    returna = UserId;
                }
                catch (Exception ex)
                {
                    returna = "err$" + ex.Message.ToString();
                    crud.con.Close();
                }

            }

            return returna;
        }
    }
}