import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Content } from './pages/Content';
import { Button, List, ListItem, ListItemButton, ListItemText, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { PromptType } from './PromptType';
import { Course } from './Course';

interface Chat {
  id: string
  title: string
  llm_id_id: string
  user_id_id: string
  is_archived: string
  is_deleted: string
  created_at: string
  modified_at: string
}

const ROLE_TYPE: { [key: string]: boolean } = {
  user: false,
  assistant: true,
}

interface Message {
  content: string
  role: boolean
}

function App() {
  const [prompt, setPrompt] = useState('');
  const [access, setAccess] = useState('');
  const [credit, setCredit] = useState(0);
  const [refresh, setRefresh] = useState('');
  const [llms, setLLms] = useState([])
  const [model, setModel] = useState('')
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState('')
  const [chatId, setChatId] = useState(-1)
  const [favorites, setFavorites] = useState('')
  const [selectedCourse, setSelectedCourse] = useState(Course.GEOGRAPHY)
  const ws = useRef<any>(null);
  useEffect(() => {
    handleLogin()
    ws.current = new WebSocket("http://localhost:8000" + "/ws/chat")
    const wsCurrent = ws.current
    return () => {
      wsCurrent.close()
    }
  }, [])
  useEffect(() => {
    ws.current.onmessage = (e: any) => {
      const data = JSON.parse(e.data)
      const index = messages.length - 1
      if (messages[index].role === ROLE_TYPE['user']) {
        if (chatId === -1) {
          setChatId(1)
        }
        if (data.message) {
          const newMessage = {
            role: ROLE_TYPE.assistant,
            content: data.message,
            message_type: data.message_type
          }
          setMessages([...messages, newMessage])
          handleGetChats()
        }
      } else {
        if (data.message) {
          messages[index].content += data.message
          setMessages([...messages])
        }
      }
    }
  }, [chatId, messages])
  const handleSendMessage = (inputMessage: string) => {
    if (!model) {
      alert("select model")
      return
    }
    setMessages([...messages, { role: false, content: inputMessage }])
    const msg = messages.length > 0 ? messages[0]?.content : inputMessage
    console.log(msg, messages)
    const title = msg.length > 20 ? msg.substring(0, 20) + "..." : msg
    console.log(title)
    const obj = {
      conversation_id: chatId,
      jwt_token: access,
      index: messages.length,
      msg: inputMessage || message,
      title: title,
      llm_id: model
    }
    setMessage("")
    ws.current.send(JSON.stringify(obj))
  }
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
      handleGetLLM(data.access)
    })
      .catch(d => console.log(d.response.data))
  }
  const handleGetLLM = (accessToken: string) => {
    axios.post("http://localhost:8000/chat/get-llms", {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`
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
      setChats(data.conversations)
    })
  }

  const sendPrompt = (text: string, promptType: PromptType) => {
    let prompt = `برای این متن ${promptType} \n ${text}`
    if (favorites) {
      prompt = prompt + `\n توی متنی که می‌فرستی علایق من رو در نظر بگیر و سعی کن از اون‌ها توی پاسخت بهره ببری. علایق من: ${favorites}`
    }
    handleSendMessage(prompt)
  }

  return (
    <div dir='rtl' className="App">
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', padding: '20px 0' }}>
        <div dir='rtl' className='message-list'>
          {messages.map(m => (
            <div className={`message ${m.role ? 'user' : 'chatgpt'}`}>
              <Typography>{m.content}</Typography>
            </div>
            ))}
        </div>
        <div style={{ padding: '50px', boxSizing: 'border-box' }}>
          <Stack flexDirection="row">
            <Typography>اعتبار فعلی شما:</Typography>
            <Typography>{Intl.NumberFormat("fa").format(credit)}</Typography>
          </Stack>
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
          <div dir='rtl'>
            <Stack flexDirection="row" alignItems="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
              <Typography>
                مدل انتخاب شده:
              </Typography>
              <TextField select size='small' style={{ width: '700px', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
                {llms.map(({ name }) => (
                  <MenuItem onClick={() => setModel(name)} key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0' }}>
            <Typography>در صورت تمایل علایق خود را وارد کنید</Typography>
            <TextField size='small' onChange={(e) => setFavorites(e.target.value)} style={{ width: '700px', border: '1px solid #e0e0e0', borderRadius: '5px' }} />
            <Button>ثبت علایق</Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>پیام مستقیم به هوش مصنوعی</Typography>
            <TextField multiline size='small' onChange={(e) => setMessage(e.target.value)} style={{ width: '700px', border: '1px solid #e0e0e0', borderRadius: '5px' }} />
            <Button onClick={() => handleSendMessage(message)}>ارسال پیام</Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '10px 0' }}>

            <Typography> درس مدنظر خود را انتخاب کنید </Typography>
            <TextField select size='small' style={{ width: '700px', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
              {[Course.CHEMISTRY, Course.ENGLISH, Course.GEOGRAPHY, Course.MATH, Course.SCIENCE].map((value) => (
                <MenuItem onClick={() => setSelectedCourse(value)} key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Content sendPrompt={sendPrompt} selectedCourse={selectedCourse} />
        </div>
      </div>
    </div>
  );
}

export default App;
