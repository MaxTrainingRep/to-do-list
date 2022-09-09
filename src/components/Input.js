import '../cssFiles/input.css';


function Input({ onChange, value }) {
    return (
        <input className='our__input' onChange={onChange} value={value} ></input>
    );
}

export default Input;
