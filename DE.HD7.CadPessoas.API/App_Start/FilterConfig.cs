using System.Web;
using System.Web.Mvc;

namespace DE.HD7.CadPessoas.API
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
