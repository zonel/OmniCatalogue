using System.Collections.Concurrent;
using OmniCatalogue.Backend.Models;

namespace OmniCatalogue.Backend.Data;

public class UserRepository
{
    private readonly ConcurrentDictionary<string, User> _users = new();

    public UserRepository()
    {
        _users.TryAdd("user1", new User { Username = "user1", Password = "password1" });
        _users.TryAdd("user2", new User { Username = "user2", Password = "password2" });
    }

    public User GetUser(string username) => (_users.TryGetValue(username, out var user) ? user : null)!;
}