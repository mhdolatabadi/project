import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [access, setAccess] = useState('');
  const [credit, setCredit] = useState('');
  const [refresh, setRefresh] = useState('');
  const [llms, setLLms] = useState([])
  const [model, setModel] = useState('')
  const [chats, setChats] = useState([])
  const handleRegister = () => {
    axios.post("http://localhost:8000/auth/users", {
      phone: "09128812024",
      email: "m.h.dolatabadi.a@gmail.com",
      username: "dolatabadi",
      password: "password"
    }).then(console.log)
      .catch(d => console.log(d.response.data))
  }
  const handleLogin = () => {
    axios.post("http://localhost:8000/auth/jwt/create", {
      username: "dolatabadi",
      password: "password"
    }).then(({ data }) => {
      console.log(data)
      setAccess(data.access)
      setCredit(data.credit)
      setRefresh(data.refresh)

    })
      .catch(d => console.log(d.response.data))
  }
  const handleGetLLM = () => {
    axios.post("http://localhost:8000/chat/get-llms", {}, {
      headers: {
        Authorization: `Bearer ${access}`
      }
    }).then(({ data }) => {
      setLLms(data.llms)

    })
  }

  const handleGetChats = () => {
    axios.post("http://localhost:8000/chat/get-chats", {}, {
      headers: {
        Authorization: `Bearer ${access}`
      }
    }).then(({ data }) => {
      console.log(data)
      setChats(data.conversations)
    })
  }
  return (
    <div className="App">
      <div>Credit: {credit}</div>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetLLM}>Get LLMS</button>
      <div style={{ display: 'flex' }}>
        <div>
          Current Model: {model}
        </div>
        {llms.map(({ name }) => (<button onClick={() => setModel(name)}>{name}</button>))}
      </div>
      <button onClick={handleGetChats}>Get Chats</button>
    </div>
  );
}

export default App;
