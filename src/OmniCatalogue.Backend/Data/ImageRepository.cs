using System.Collections.Concurrent;
using System.Text.Json;
using OmniCatalogue.Backend.Models;

namespace OmniCatalogue.Backend.Data
{
    public class ImageRepository
    {
        private readonly ConcurrentBag<ImageData> _images;

        public ImageRepository()
        {
            _images = LoadImagesFromJson("wwwroot/images.json");
        }

        private ConcurrentBag<ImageData> LoadImagesFromJson(string filePath)
        {
            if (!File.Exists(filePath))
                return new ConcurrentBag<ImageData>();

            var json = File.ReadAllText(filePath);
            var images = JsonSerializer.Deserialize<List<ImageData>>(json);

            return new ConcurrentBag<ImageData>(images ?? new List<ImageData>());
        }

        public IEnumerable<ImageData> GetAllImages() => _images;
        public void AddImage(ImageData imageData) => _images.Add(imageData);
    }
}