using TodoApi.Models;
using TodoApi.Services;
using Microsoft.EntityFrameworkCore;

public class todoItemService : ITodoItemService
{
    private readonly TodosContext _context;

    public todoItemService(TodosContext context)
    {
        _context = context;
    }

    public async Task<List<ToDoItem>> GetAllTodos()
    {
        return await _context.ToDoItems.ToListAsync();

    }
}