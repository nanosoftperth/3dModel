using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication4.Models
{
    public class LaserCoordinate
    {
        [Key]
        public int x { get; set; }
        public int y { get; set; }

        public int z { get; set; }

        public LaserCoordinate() { }

        public LaserCoordinate(int _x, int _y, int _z) {

            this.x = _x;
            this.y = _y;
            this.z = _z;
        }

    }
}