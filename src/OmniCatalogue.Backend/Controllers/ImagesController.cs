using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniCatalogue.Backend.Data;
using OmniCatalogue.Backend.Models;
using OmniCatalogue.Backend.Services;

namespace OmniCatalogue.Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImagesController(ImageRepository repository, OpenAiService openAiService) : ControllerBase
{
    [Authorize]
    [HttpPost("generate")]
    public async Task<IActionResult> GenerateImage([FromBody] CreateImageDto dto)
    {
        var username = User.Identity?.Name;
        var imageUrl = await openAiService.GenerateImageFromPrompt(dto.Prompt, dto.BookName);
        var newImage = new ImageData
        {
            ImageUrl = imageUrl,
            Prompt = dto.Prompt,
            Tags = dto.Tags,
            BookName = dto.BookName,
            CreatedAt = DateTime.UtcNow,
            CreatedBy = username!
        };

        repository.AddImage(newImage);
        return Ok(newImage);
    }

    [HttpGet("gallery")]
    public IActionResult GetGallery()
    {
        var images = repository.GetAllImages();
        return Ok(images);
    }

    [Authorize]
    [HttpGet("my-images")]
    public IActionResult GetMyImages()
    {
        var username = User.Identity?.Name;
        var myImages = repository.GetAllImages()
            .Where(image => image.CreatedBy == username)
            .ToList();
        return Ok(myImages);
    }
}