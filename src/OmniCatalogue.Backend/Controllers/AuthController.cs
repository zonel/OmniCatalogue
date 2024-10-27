using Microsoft.AspNetCore.Mvc;
using OmniCatalogue.Backend.Models;
using OmniCatalogue.Backend.Services;

namespace OmniCatalogue.Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(AuthService authService) : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] User user)
    {
        var token = authService.Authenticate(user.Username, user.Password);
        if (token == null)
            return Unauthorized("Invalid credentials");

        return Ok(new { Token = token });
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        return Ok("Logged out successfully");
    }
}