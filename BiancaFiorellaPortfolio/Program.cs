using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.FileProviders;
using System.Reflection;

namespace BiancaFiorellaPortfolio;
public class Program
{
    public static void Main(string[] args)
    {
        var assemblyRootDir = Path.GetDirectoryName(Assembly.GetAssembly(typeof(Program))!.Location);
        var staticRootDir = Path.Join(assemblyRootDir, ConfigConstants.ReactBuildFolderName);
        var spaIndexDir = Path.Join(staticRootDir, ConfigConstants.IndexHtmlName);

        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddControllers();

        var app = builder.Build();
        app.UseHttpsRedirection();
        app.UseRouting();
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(staticRootDir),
            HttpsCompression = HttpsCompressionMode.Compress,
            ServeUnknownFileTypes = true,
        });

        app.MapControllers();

        app.MapFallback(async (context) =>
        {
            context.Response.Headers.Append(ConfigConstants.ContentTypeHeaderName, ConfigConstants.HtmlContentType);
            await context.Response.SendFileAsync(spaIndexDir);
        });

        app.Run();
    }
}
