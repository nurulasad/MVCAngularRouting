using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCAngularRouting.Startup))]
namespace MVCAngularRouting
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
