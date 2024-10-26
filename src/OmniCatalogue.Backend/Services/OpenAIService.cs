using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using OmniCatalogue.Backend.Data;

namespace OmniCatalogue.Backend.Services;

public class OpenAiService(HttpClient httpClient, IConfiguration configuration)
{
    private readonly string _openAiApiKey = configuration["OpenAI:APIKey"]!;

    public async Task<string> GenerateImageFromPrompt(string prompt)
    {
        httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _openAiApiKey);

        var requestBody = new
        {
            model = configuration["OpenAI:ImageGenerationModel"]!,
            prompt = prompt,
            n = 1,
            size = "1024x1024"
        };

        var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");
        var response = await httpClient.PostAsync("https://api.openai.com/v1/images/generations", content);
    
        response.EnsureSuccessStatusCode();

        var jsonResponse = await response.Content.ReadAsStringAsync();
        var result = JsonSerializer.Deserialize<OpenAiResponse>(jsonResponse);

        return result?.Data.FirstOrDefault()?.Url ?? string.Empty;
    }
}