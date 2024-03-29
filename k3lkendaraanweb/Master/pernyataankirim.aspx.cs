﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using k3lkendaraanweb.GetterSetter;
using System.Configuration;
using System.Data;

namespace k3lkendaraanweb.Master
{
    public partial class pernyataankirim : System.Web.UI.Page
    {
        static SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        public static CRUD crud = new CRUD();
        public static string returna = "";
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string GetData(string filter)
        {
            string SelectString = "select *,(select Nama_Bagian from T_MsDivisi where T_MsDivisi.Kd_bagian=T_MsPernyataanKirimHeader.Kd_Bagian) Nama_Bagian from T_MsPernyataanKirimHeader";
           

            List<pernyataankirimGetSet> Detail = new List<pernyataankirimGetSet>();


            con.Open();
            SqlCommand cmd = new SqlCommand(SelectString, con);
            using (var reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {
                    Detail = reader.Cast<IDataRecord>()
                         .Select(r => new pernyataankirimGetSet
                         {
                             No = (string)r["No_"].ToString(),
                             Pernyataankirim = (string)r["Pernyataan"].ToString(),
                             Bagian = (string)r["kd_Bagian"].ToString(),
                             NamaBagian = (string)r["Nama_Bagian"].ToString()
                         }).ToList();

                }
            }


            con.Close();
            JavaScriptSerializer js = new JavaScriptSerializer();
            string a = js.Serialize(Detail);
            return a;
        }

        [WebMethod]
        public static string GetDatadtl(string filter2)
        {
            string a;
            List<pernyataankirimdetailGetSet> Detail = new List<pernyataankirimdetailGetSet>();
            if (filter2!="")
            {
                string SelectString = "";
               

                SelectString = "select * from T_MsPernyataanKirimDetail where [No_]='" + filter2 + "'";
                con.Open();
                SqlCommand cmd = new SqlCommand(SelectString, con);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        Detail = reader.Cast<IDataRecord>()
                             .Select(r => new pernyataankirimdetailGetSet
                             {
                                 No = (string)r["No_"].ToString(),
                                 NoDetail = (string)r["No_Detail"].ToString(),
                                 PernyataankirimDetail = (string)r["Pernyataan_detail"].ToString(),
                                 Bobot = (string)r["Bobot"].ToString()
                             }).ToList();

                    }
                }

                con.Close();

                JavaScriptSerializer js = new JavaScriptSerializer();
                 a  = js.Serialize(Detail);
               
            }
            else
            {


                List<pernyataankirimdetailGetSet> Detail1 =
                              Detail.Select(r => new pernyataankirimdetailGetSet
                              {
                                  No = "",
                                  NoDetail = "",
                                  PernyataankirimDetail = ""
                              }).ToList();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    a = js.Serialize(Detail1);
                
            }
            return a;
        }
        [WebMethod]
        public static string crud1(string No, string Pernyataan, string Bagian, string tipe)
        {

           
            if (tipe == "1")
            {
                try
                {
                   

                    crud.columna = new string[] { "" + No + "", "" + Pernyataan + "", "" + Bagian + "" };
                    crud.ExecuteSP("[SP_InsertPernyataanKirimHeader]", crud.columna);

                    string NamaBagian;
                    con.Open();
                    SqlCommand cmd1 = new SqlCommand("Select Nama_Bagian from T_MsDivisi where kd_bagian='" + Bagian + "'", con);
                    SqlDataAdapter da1 = new SqlDataAdapter(cmd1);
                    DataTable dt1 = new DataTable();

                    da1.Fill(dt1);
                    NamaBagian = dt1.Rows[0][0].ToString();
                    con.Close();

                    pernyataankirimGetSet DataObj = new pernyataankirimGetSet();
                    DataObj.No = No;
                    DataObj.Pernyataankirim = Pernyataan;
                    DataObj.Bagian = Bagian;
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
                try
                {
                   
                    crud.columna = new string[] { "" + No + "", "" + Pernyataan + "", "" + Bagian + "" };
                    crud.ExecuteSP("[SP_updatePernyataanKirimHeader]", crud.columna);

                    string NamaBagian;
                    con.Open();
                    SqlCommand cmd1 = new SqlCommand("Select Nama_Bagian from T_MsDivisi where kd_bagian='" + Bagian + "'", con);
                    SqlDataAdapter da1 = new SqlDataAdapter(cmd1);
                    DataTable dt1 = new DataTable();

                    da1.Fill(dt1);
                    NamaBagian = dt1.Rows[0][0].ToString();
                    con.Close();


                    pernyataankirimGetSet DataObj = new pernyataankirimGetSet();
                    DataObj.No = No;
                    DataObj.Pernyataankirim = Pernyataan;
                    DataObj.Bagian = Bagian;
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
            else
            {
                try
                {
                    crud.columna = new string[] { "" + No + "" };
                    crud.ExecuteSP("[SP_deletePernyataanKirimHeader]", crud.columna);
                    returna = No;
                }
                catch (Exception ex)
                {
                    returna = "err$" + ex.Message.ToString();
                    crud.con.Close();
                }

            }

            return returna;
        }

        [WebMethod]
        public static string crudDtl(string NoHeader, string NoDetail, string PernyataanDetail, string Bobot, string tipe)
        {
            if (tipe == "1")
            {
                try
                {
                    crud.columna = new string[] { "" + NoHeader + "", "" + NoDetail + "", "" + PernyataanDetail + "" ,""+ Bobot + ""};
                    crud.ExecuteSP("[SP_InsertPernyataanKirimDetail]", crud.columna);
                    returna = "Success";
                }
                catch (Exception ex)
                {
                    returna = "err$" + ex.Message.ToString();
                    crud.con.Close();
                }
            }
            else if (tipe == "2")
            {
                try
                {
                    crud.columna = new string[] { "" + NoHeader + "", "" + NoDetail + "", ""+ PernyataanDetail + "",""+ Bobot + "" };
                    crud.ExecuteSP("[SP_updatePernyataanKirimDetail]", crud.columna);
                    returna = "Success";
                }
                catch (Exception ex)
                {
                    returna = "err$" + ex.Message.ToString();
                    crud.con.Close();
                }
            }
            else
            {
                try
                {
                    crud.columna = new string[] { "" + NoHeader + "", "" + NoDetail + "" };
                    crud.ExecuteSP("[SP_deletePernyataanKirimDetail]", crud.columna);
                    returna = "Success";
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