using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace k3lkendaraanweb.GetterSetter
{
    public class pernyataanGetSet
    {
        public string No { get; set; }
        public string Pernyataan { get; set; }
        public string Bagian { get; set; }

        public string NamaBagian { get; set; }
    }

    public class pernyataandetailGetSet
    {
        public string No { get; set; }
        public string NoDetail { get; set; }
        public string PernyataanDetail { get; set; }

        public string Bobot { get; set; }
    }
}