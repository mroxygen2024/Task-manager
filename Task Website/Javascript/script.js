$(document).ready(function() {
    function addTask(taskText) {
        const taskItem = $(`<li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="task-text">${taskText}</span>
            <div>
                <button class="btn btn-success btn-sm complete-task mr-2">Complete</button>
                <button class="btn btn-warning btn-sm edit-task mr-2">Edit</button>
                <button class="btn btn-danger btn-sm delete-task">Delete</button>
            </div>
        </li>`);
        
        $('#task-list').append(taskItem);
        $('#task-input').val('');
        addTaskEvents(taskItem);
    }

    function addTaskEvents(taskItem) {
        taskItem.find('.complete-task').click(function() {
            $(this).parent().prev().toggleClass('completed');
        });

        taskItem.find('.edit-task').click(function() {
            const taskTextElem = $(this).parent().prev();
            const currentText = taskTextElem.text();
            const newText = prompt('Edit your task:', currentText);
            if (newText) {
                taskTextElem.text(newText);
            }
        });

        taskItem.find('.delete-task').click(function() {
            $(this).closest('li').remove();
        });
    }

    $('#add-task').click(function() {
        const taskText = $('#task-input').val().trim();
        if (taskText) {
            addTask(taskText);
        }
    });

    $('#task-input').keypress(function(e) {
        if (e.which == 13) { // Enter key pressed
            $('#add-task').click();
        }
    });

    $('#filter-tasks').click(function() {
        $('.list-group-item').each(function() {
            if ($(this).find('.task-text').hasClass('completed')) {
                $(this).toggle();
            }
        });
    });

    $('#task-list').sortable();
});
