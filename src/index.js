import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';

function App() {
    const [value, setValue] = useState('');

    const handleClick = (e) => {
        setValue(value + e.target.value);
    };

    const handleEqual = () => {
        try {
            setValue(eval(value));
        } catch {
            setValue('false');
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input type="text" value={value} readOnly />
                    </div>
                    <div>
                        <input type="button" value="C" onClick={() => setValue('')} />
                        <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
                        <input type="button" value="." onClick={handleClick} />
                        <input type="button" value="/" onClick={handleClick} />
                    </div>
                    <div>
                        <input type="button" value="7" onClick={handleClick} />
                        <input type="button" value="8" onClick={handleClick} />
                        <input type="button" value="9" onClick={handleClick} />
                        <input type="button" value="*" onClick={handleClick} />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={handleClick} />
                        <input type="button" value="5" onClick={handleClick} />
                        <input type="button" value="6" onClick={handleClick} />
                        <input type="button" value="+" onClick={handleClick} />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={handleClick} />
                        <input type="button" value="2" onClick={handleClick} />
                        <input type="button" value="3" onClick={handleClick} />
                        <input type="button" value="-" onClick={handleClick} />
                    </div>
                    <div>
                        <input type="button" value="0" onClick={handleClick} />
                        <input type="button" value="00" onClick={handleClick} />
                        <input type="button" value="%" onClick={handleClick} />
                        <input type="button" value="=" onClick={handleEqual} />
                    </div>
                   
                </form>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
