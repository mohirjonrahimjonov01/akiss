using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Globalization;

namespace akiss.Extensions
{
    public static class WebAssemblyHostExtension
    {
        public async static Task SetDefaultCulture(this WebAssemblyHost host)
        {
            var localStorage = host.Services.GetRequiredService<ILocalStorageService>();
            var fromLs = await localStorage.GetItemAsync<string>("culture");

            CultureInfo culture;

            if(fromLs != null)
            {
                culture = new CultureInfo(fromLs);
            }
            else
            {
                culture = new CultureInfo("en-US");
            }

            CultureInfo.DefaultThreadCurrentCulture = culture;
            CultureInfo.DefaultThreadCurrentUICulture = culture; 
        }

    }
}
