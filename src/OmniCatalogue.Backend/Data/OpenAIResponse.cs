using System.Text.Json.Serialization;

namespace OmniCatalogue.Backend.Data;

public class OpenAiResponse
{
    [JsonPropertyName("created")]
    public long Created { get; set; }

    [JsonPropertyName("data")]
    public List<Data> Data { get; set; }
}

public class Data
{
    [JsonPropertyName("url")]
    public string Url { get; set; }
}