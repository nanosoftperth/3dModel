using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication4
{
    public partial class test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {


            using (var reader = new PcapngFile.Reader(@"C:\intellect\App_Data\files\Wireshark_Data.pcapng"))
            {
                PcapngFile.BlockBase block;
                
                // Which is equivalent to.
                foreach (var readBlock in reader.AllBlocks)
                {

                    //check that this is a packet block 
                    if (readBlock.GetType() != typeof(PcapngFile.PacketBlock)) continue;

                    string s = readBlock.Comment;


                }
            }

        }
    }
}