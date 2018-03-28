using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class File
    {

        public string Name { get; set; }
        public int ID { get; set; }

        public File(string _name)
        {

            this.Name = _name;
        }

        public File() { }
    }
}