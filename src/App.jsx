import { useState } from 'react';
import './App.css';
import Todolist from './assets/components/todolist';

function App() {
// Counter logic
const [count, setCount] = useState(0);

function increment() {
setCount(count + 1);
}

function decrement() {
if (count > 0) {
setCount(count - 1);
}
}

function reset() {
setCount(0);
}


// Calculator
const [inputs, setInputs] = useState([{ value: '0' }, { value: '0' }]);
const [result, setResult] = useState(null);

const handleCalculation = (operation) => {
const numbers = inputs.map(input => parseFloat(input.value));


if (numbers.some(num => isNaN(num))) return;

let calcResult = numbers[0];
for (let i = 1; i < numbers.length; i++) {
switch (operation) {
case '+':
calcResult += numbers[i];
break;
case '-':
calcResult -= numbers[i];
break;
case '*':
calcResult *= numbers[i];
break;
case '/':
if (numbers[i] !== 0) calcResult /= numbers[i];
else return;
break;
default:
break;
}
}
setResult(calcResult);
};


const addInput = () => {
setInputs([...inputs, { value: '0' }]);
};

const handleInputChange = (index, value) => {
const newInputs = [...inputs];
newInputs[index].value = value;
setInputs(newInputs);
};

return (
<main>
<div className="container">
{/* Counter Section */}
<div className="counter">
<h1 className="header">Number: {count}</h1>
<div className="buttons-counter">
<button onClick={increment} className="button ">Increment</button>
<button onClick={decrement} className="button">Decrement</button>
<button onClick={reset} className="button">Reset</button>
</div>
</div>

{/* Calculator Section */}
<div className="calculator">
<h2 className="header">Calculator</h2>
<div className="inputs-container">
{inputs.map((input, index) => (
<input
key={index}
type="number"
value={input.value}
onChange={(e) => handleInputChange(index, e.target.value)}
placeholder={`Number ${index + 1}`}
className="input"
/>
))}
</div>

<div className="buttons-container">
<button onClick={addInput} className="button">Add New Input</button>
<button onClick={() => handleCalculation('+')} className="button">+</button>
<button onClick={() => handleCalculation('-')} className="button">-</button>
<button onClick={() => handleCalculation('*')} className="button">*</button>
<button onClick={() => handleCalculation('/')} className="button">/</button>
</div>
{result !== null && <div className="result">Result: {result}</div>}
</div>

{/* Todo List Section */}
<div>
<Todolist />
</div>
</div>
</main>
);
}

export default App;