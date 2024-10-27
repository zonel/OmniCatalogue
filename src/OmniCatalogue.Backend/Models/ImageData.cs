namespace OmniCatalogue.Backend.Models;

public class ImageData
{
    public string ImageUrl { get; set; }
    public string Prompt { get; set; }
    public List<string> Tags { get; set; }
    public string BookName { get; set; }
    public DateTime CreatedAt { get; set; }
    public string CreatedBy { get; set; }
}
