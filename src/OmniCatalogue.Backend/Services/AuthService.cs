using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using OmniCatalogue.Backend.Data;

namespace OmniCatalogue.Backend.Services;

public class AuthService(UserRepository userRepository, IConfiguration configuration)
{
    private string JwtKey = configuration["Jwt:Key"]!;
    public string Authenticate(string username, string password)
    {
        var user = userRepository.GetUser(username);
        if (user == null || user.Password != password)
            return null;

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Convert.FromBase64String(JwtKey);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, username) }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}