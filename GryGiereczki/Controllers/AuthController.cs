using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GryGiereczki.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Hello()
        {
            return Ok("success");
        }
    }
}
