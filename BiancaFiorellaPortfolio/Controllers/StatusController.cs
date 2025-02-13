using Microsoft.AspNetCore.Mvc;

namespace BiancaFiorellaPortfolio.Controllers;

[ApiController]
public class StatusController : ControllerBase
{
    [Route("/api/v1/status")]
    public ActionResult GetStatus()
    {
        return new JsonResult(new { DateTime = DateTime.Now });
    }
}
