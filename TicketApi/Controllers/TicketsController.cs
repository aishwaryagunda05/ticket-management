using Microsoft.AspNetCore.Mvc;
using TicketApi.models;


namespace TicketApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Ticket>> GetTickets()
        {
            var tickets = new List<Ticket>
            {
                new Ticket
                {
                    Id = 1,
                    ShortDescription = "Login issue",
                    Description = "User unable to login with valid credentials.",
                    CreatedDate = new DateTime(2025, 6, 10),
                    Severity = "High",
                    TargetDate = new DateTime(2025, 6, 15),
                    Status = "Open"
                },
                new Ticket
                {
                    Id = 2,
                    ShortDescription = "Page not loading",
                    Description = "Dashboard page is taking too long to load.",
                    CreatedDate = new DateTime(2025, 6, 11),
                    Severity = "Medium",
                    TargetDate = new DateTime(2025, 6, 20),
                    Status = "Closed"
                }
            };

            return Ok(tickets);
        }
    }
}
