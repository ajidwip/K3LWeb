using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace k3lkendaraanweb.GetterSetter
{
    public class pertanyaankendaraanmasukgudang
    {
        public string No { get; set; }
        public string Pernyataan { get; set; }
        public string Bagian { get; set; }

        public string NamaBagian { get; set; }
    }

    public class pertanyaanekspedisiluardetailGetSet
    {
        public string No { get; set; }
        public string NoDetail { get; set; }
        public string PernyataanDetail { get; set; }

      

        public string Keterangan { get; set; }
    }
}