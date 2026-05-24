import { useState ,useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import  dayjs  from 'dayjs'
import { Chatbot } from 'supersimpledev'
import './App.css'
  
function App() {
        const time = dayjs().valueOf();

        const getInitialMessages = () => {
                const savedMessages = localStorage.getItem('messages');
                if (!savedMessages) {
                        return [{
                                message: "hello user, type something",
                                profile: "robot",
                                id: crypto.randomUUID(),
                                time: dayjs(time).format('h:mma')
                        }];
                }

                try {
                        return JSON.parse(savedMessages);
                } catch (error) {
                        console.error('Failed to parse saved messages:', error);
                        return [{
                                message: "hello user, type something",
                                profile: "robot",
                                id: crypto.randomUUID(),
                                time: dayjs(time).format('h:mma')
                        }];
                }
        };

        const [chatMessages, setChatMeesages] = useState(getInitialMessages());

        useEffect(()=>{
                localStorage.setItem('messages',JSON.stringify(chatMessages))
        },[chatMessages]);

        return (
                <div className="app-container">
                      <ChatMessages
                              chatMessages={chatMessages}
                      />
                      <ChatInput 
                              chatMessages={chatMessages}
                              setChatMeesages={setChatMeesages}
                      />
              </div>
        ); 
}

export default App
