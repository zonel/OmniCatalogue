namespace OmniCatalogue.Backend.Models;

public class CreateImageDto
{
    public string Prompt { get; set; }
    public List<string> Tags { get; set; }
    public string BookName { get; set; }
}