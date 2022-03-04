using Microsoft.AspNetCore.Http;

namespace akiss.Models;

public class JoinTeam
{
    public string Fullname { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public string Subject { get; set; }

    public uint ExperienceInYears { get; set; }

    public EnglishLevel EnglishLevel { get; set; }

    public IFormFile Resume { get; set; }
}

public enum EnglishLevel
{
    A0, A1, A2, B1, B2, C1, C2
}