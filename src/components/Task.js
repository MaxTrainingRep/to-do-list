import '././cssFiles/Task.css';

function Task({data, makeCheck, deleteItem}) {
    console.log('data', data);
    return (
        <div className={data.isDone ? "containerDone" : "container"}>
            <input type="checkbox" checked={data.isDone} onChange={() => makeCheck(data.id)}/>
             <p>{data.text}</p>
                <button className="delete-button" onClick={() => deleteItem(data.id)}>
                 <img className="trash-icon" src={require('../assets/icons/trassh.png')} alt='some sheet happens' />
                </button>
        </div>
    );
}

export default Task;
