using System;
using System.Collections.Generic;

namespace TodoApi.Models;

public partial class ToDoItem
{
    public int ToDoItemId { get; set; }

    public int? UserId { get; set; }

    public int? CategoryId { get; set; }

    public string TaskDescription { get; set; } = null!;

    public string? Status { get; set; }

    public DateTime? DueDate { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Category? Category { get; set; }

    public virtual User? User { get; set; }
}
