using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication4.Controllers
{
    public class LaserCoordinateController : ApiController
    {
        // GET: api/LaserCoordinate
        public IEnumerable<Models.LaserCoordinate> Get()
        {
            return Get(0);
        }

        // GET: api/LaserCoordinate/5
        public IEnumerable<Models.LaserCoordinate> Get(int id)
        {
            Controllers.DataFileController cntrlr = new Controllers.DataFileController();

            string fileName = (from x in cntrlr.Get() where x.ID == id select x.Name).Single();

            List<Models.LaserCoordinate> lst = new List<Models.LaserCoordinate>();

            string fileloc = Properties.Settings.Default.DataFileLocation + fileName;//"3DModle-Wagon.csv";

            string[] fileContents =
                System.IO.File.ReadAllLines(fileloc);

            foreach (string s in fileContents)
            {
                string[] str_arr = s.Split(',');

                int arr_size = str_arr.Length - 1;//0 based count

                for (int i = 0; i <= arr_size; i += 3)
                {

                    Models.LaserCoordinate lcc = new Models.LaserCoordinate();

                    //convert to decimal and then cast to integer as to avoid issues with decimal places
                    lcc.x = (int)decimal.Parse(str_arr[i + 0]);
                    lcc.y = (int)decimal.Parse(str_arr[i + 1]);
                    lcc.z = (int)decimal.Parse(str_arr[i + 2]);

                    bool ignore = lcc.x == 0 && lcc.y == 0 && lcc.z == 0;

                    if (!ignore) lst.Add(lcc);
                }

            }

            return lst;

        }

        // POST: api/LaserCoordinate
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/LaserCoordinate/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/LaserCoordinate/5
        public void Delete(int id)
        {
        }
    }
}
