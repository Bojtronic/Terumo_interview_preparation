using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Test_API.Objects;

namespace Test_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<Person>>> Get()
        {
            var persons = new[]
            {
                new Person { id = 1, name = "John Doe", address = "123 Main St" },
                new Person { id = 2, name = "Jane Smith", address = "456 Elm St" },
                new Person { id = 3, name = "Bob Johnson", address = "789 Oak St" }
            };

            return Ok(persons);
        }
    }
}
