using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication4.Controllers
{
    public class DataFileController : ApiController
    {
        // GET: api/DataFile
        public IEnumerable<Models.File> Get()
        {

            string[] filesWithPAth  = 
                System.IO.Directory.GetFiles(Properties.Settings.Default.DataFileLocation);

            List<Models.File> files = (from x in filesWithPAth
                                       select new Models.File(x.Split('\\').Last())).ToList();

            return files;            
        }

        // GET: api/DataFile/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/DataFile
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/DataFile/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DataFile/5
        public void Delete(int id)
        {
        }
    }
}
