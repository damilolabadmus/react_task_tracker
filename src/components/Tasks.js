import Task from './Task'

// We are looping through the tasks and we do that 
// by creating a list and we create a list by using 
// the map array method.


const Tasks = ({ tasks }) => {

    return (
        <>
            {tasks.map((task) => (
            // <h3 key={task.id}>{task.text}</h3>
            <Task key={task.id} task={task} />
            ))}
        </>
    ) 
}

export default Tasks

 