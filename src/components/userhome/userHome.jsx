import React, { useState } from "react";
import { connect } from "react-redux";

const UserProfile = (props) => {
    const data = props.userDetails;
    const tasks = props.tasks;
    const [task, setTask] = useState("");
    const addTasks = props.addTasks;
    // console.log(addTasks);
    // tasks.map((data1, ind) => {
    //     console.log(data1, ind);
    // })

    // add tasks function
    const addTask = () => {
        addTasks(task);
        setTask("");
    }

    const userTaskAdd = (e) => {
        // console.log(e.target.value);
        setTask(e.target.value);
    }

    return (
        <div className="user-profile">
            <h6>Login success</h6>
            <h2>USer Profile</h2>
            <div className="user-data">
                <div>name:- {data.name}</div>
                <div>age:- {data.age}</div>
                <div>contact:- {data.contact}</div>
            </div>

            <div>
                <h3>Add Tasks To Your List &#8595; </h3>
                <div>
                    <input type="text" onChange={userTaskAdd} value={task} placeholder="task name" /> &nbsp;
                    <button onClick={addTask} >add Task</button>
                </div>
                {tasks.length < 1 ? <div>no taskss !</div> :

                    <div>
                        {tasks.map((value, ind) => {
                            return <div key={ind} >{value}</div>
                        })}
                    </div>
                }

            </div>
        </div>
    );
}
// map state to props
const mapStateToProps = (state) => {
    // console.log(state);
    const userDetails = state.userDetails;
    const tasks = state.userTasks;
    return { userDetails, tasks };
}

// map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        addTasks: (task) => {
            dispatch({ type: "ADD_TASK", data: task })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);