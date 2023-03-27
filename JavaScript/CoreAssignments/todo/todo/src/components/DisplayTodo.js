import React from "react";

const DisplayTodo = (props) => {

    const deleteHandler = (todoItem) => {
        const updatedTodoList = todoList.filter(task => task !== todoItem);
        setTodoList(updatedTodoList);
    }

    const { todoList, setTodoList } = props

    const completeHandler = (todoItem) => {
        const updatedTodoList = todoList.map((task) => {
            if (task === todoItem) {
                task.completed = !task.completed
            }
            return task
        })
        setTodoList(updatedTodoList)
    }

    return (
        <div>
            <h2>
                Things to do
            </h2>
            {
                todoList.map((todoItem, idx) => (
                    <div key={idx}>
                        {
                            todoItem.completed ?
                                <p className="done">{todoItem.task}</p> :
                                <p>{todoItem.task}</p>
                        }
                        <label>Task Completed</label>
                        <input type="checkbox" name="CompletedTask" checked={todoItem.completed} onChange={() => completeHandler(todoItem)} />
                        <button onClick={() => deleteHandler(todoItem)}>Delete Task</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayTodo;