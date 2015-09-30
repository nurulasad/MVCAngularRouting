using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace PatientData.Controllers
{
    public class PolicyController : AsyncController
    {
        
        public async Task<ActionResult> Quotes()
        {
            

            //HttpClient httpClient = new HttpClient();

            //string requestUri = "http://mngappsrv1.hq.gratex.com:8081/pius/svc/policy/?eq(entitySubType,QUOTE)&limit(10)";
            
            //Dictionary<string, string> parameters = new Dictionary<string, string>();

            ////Best not to store this in your class
            //NetworkCredential credential = new NetworkCredential("username", "password");

            //var response = await httpClient.GetAsync(requestUri);

            WebRequest req = WebRequest.Create(@"http://mngappsrv1.hq.gratex.com:8081/pius/svc/policy/?eq(entitySubType,QUOTE)&limit(10)");
            req.Method = "GET";
            req.Headers["Authorization"] = "Basic " + Convert.ToBase64String(System.Text.Encoding.Default.GetBytes("admin:Admin123"));
            //req.Credentials = new NetworkCredential("username", "password");
            var resp = req.GetResponse() as WebResponse;

            

            return View();

            
        }
    }
}
