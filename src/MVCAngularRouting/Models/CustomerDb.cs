using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PatientData.Models
{
    public class CustomerDb
    {
        public static List<Customer> GetGata()
        {
            var data = new List<Customer>();
            for (int i = 0; i < 3; i++)
            {
                data.Add(new Customer() { Id = "id" + i, Name = "Name_" + i });
            }
            return data;

        }
    }
}