import '../cssFiles/button.css';

function Button({ onClick }) {
    return (
        <button className="button" onClick={onClick}>ADD</button>
    );
}

export default Button;
