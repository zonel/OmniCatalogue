using System.Collections.Concurrent;
using OmniCatalogue.Backend.Models;

namespace OmniCatalogue.Backend.Data;

public class ImageRepository
{
    private readonly ConcurrentBag<ImageData> _images = [];

    public ImageRepository()
    {
        _images.Add(new ImageData
        {
            ImageUrl = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-CM5EC2BTBMHpbkroSXS3I17A/user-XNK7nEu9ISCgYAh9O8HaQuDx/img-KYwmWiFUj4vU6EnDB5g5hUCh.png?st=2024-10-26T19%3A13%3A21Z&se=2024-10-26T21%3A13%3A21Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-26T19%3A07%3A16Z&ske=2024-10-27T19%3A07%3A16Z&sks=b&skv=2024-08-04&sig=T4XTeyHAzz%2BXsHrkMzqcrCTswCwXM1GK0l0Y5jmytlc%3D",
            Prompt = "big scary monster",
            Tags = new List<string> { "monster", "scary", "big" },
            BookName = "Dune",
            CreatedAt = DateTime.UtcNow.AddDays(-1),
            CreatedBy = "user1"
        });
    }

    public IEnumerable<ImageData> GetAllImages() => _images;
    public void AddImage(ImageData imageData) => _images.Add(imageData);
}