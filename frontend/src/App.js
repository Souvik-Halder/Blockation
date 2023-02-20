import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './reducers/userReducer';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);

  return (
    <div className='App'>
      <h1>{name}</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => dispatch(login(input))}>Set Name</button>
    </div>
  );
}

export default App;
