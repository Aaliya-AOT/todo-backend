const { v4: uuidv4 } = require("uuid");
let tasks = require("./taskData");


const createTask = (req, res) => {
    const { title, description, duedate } = req.body;
    console.log("reqbody : ", req.body)
    if (title && description && duedate) {
        console.log("hi")
        const id = uuidv4()
        const taskstatus = false;
        const taskData = {
            id,
            title,
            description,
            duedate,
            taskstatus
        }
        tasks.push(taskData)
        console.log("task : ", tasks)
        res.status(200).json({ message: "Task added successfully", taskData })
    }
    else {
        res.status(400).json({ message: "Task failed to add" })
    }
}

const getTasks = (req, res) => {
    res.status(200).json(tasks)
}

const updateTaskStatus = (req, res) => {
    const { id, taskstatus } = req.body;
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.taskstatus = taskstatus;
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
};

const editTask = (req, res) => {
    const { id, title, description, duedate } = req.body;
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.title = title,
            task.description = description,
            task.duedate = duedate
        res.status(200).json({ message: "Task Updated Successfully", task })
    }
    else {
        res.status(400).json({ message: "No Such Task" })
    }
}

const deleteTask = (req, res) => {
    const { id } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(200).json({ message: "Task Deleted", tasks });
        console.log("rasas", tasks)
    } else {
        res.status(400).json({ message: "No Such Task" });
    }
};


const clearCompleted = (req, res) => {
    const completedTask = tasks.filter(task => task.taskstatus);
    if (completedTask.length > 0) {
        tasks = tasks.filter(task => !task.taskstatus);
        res.status(200).json({ message: "cleared completed tasks", tasks })
    }
    else {
        res.status(400).json({ message: "couldnt delete completed task" })
    }
}
module.exports = {
    createTask,
    getTasks,
    updateTaskStatus,
    editTask,
    deleteTask,
    clearCompleted
}