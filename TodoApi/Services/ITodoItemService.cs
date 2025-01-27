using TodoApi.Models;

namespace TodoApi.Services
{
    public interface ITodoItemService
    {
        Task<List<ToDoItem>> GetAllTodos();
    }
}