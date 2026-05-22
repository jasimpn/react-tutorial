import { useState } from 'react'
import { ChatInput } from './components/Chatinput'
import { ChatMessages } from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'
        
function App() {
        const array = useState([{
              message:"hello user, type something",
              profile:"robot",
              id:"id1"
        }])
        const chatMessages = array[0];
        const setChatMeesages = array[1];     
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
