using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace k3lkendaraanweb.GetterSetter
{
    public class pernyataankirimGetSet
    {
        public string No { get; set; }
        public string Pernyataankirim { get; set; }
        public string Bagian { get; set; }

        public string NamaBagian { get; set; }
    }

    public class pernyataankirimdetailGetSet
    {
        public string No { get; set; }
        public string NoDetail { get; set; }
        public string PernyataankirimDetail { get; set; }

        public string Bobot { get; set; }
    }
}