import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import '../styles/ChatInput.css'
const time = dayjs().valueOf();
export function ChatInput({chatMessages,setChatMeesages}){
            const [inputText,setInputText] = useState('');
            function saveInputText(event){   
                setInputText(
                    event.target.value
                );    
            }
            function sendInputTextByKey(event){
                if(event.key=="Escape"){
                    console.log("Escape pressed")
                    setInputText('');
                }
                if (event.key =="Enter"){
                    console.log("enter pressed")
                    const newChatMessages = [
                        ...chatMessages,
                        {
                            message:inputText,
                            profile:"user",
                            id:crypto.randomUUID(),
                            time:dayjs(time).format('h:mma')
                        }
                    ]
                    setChatMeesages(newChatMessages);

                    setInputText('');

                    const response = Chatbot.getResponse(inputText);
                    setChatMeesages([
                        ...newChatMessages,
                        {
                            message:response,
                            profile:"robot",
                            id:crypto.randomUUID(),
                            time:dayjs(time).format('h:mma')
                        }
                    ]);
                }  
            }
            async function sendInputText(){
                const newChatMessages = [
                    ...chatMessages,
                    {
                        message:inputText,
                        profile:"user",
                        id:crypto.randomUUID(),
                        time:dayjs(time).format('h:mma')
                    }
                ]
                setChatMeesages(newChatMessages);

                setInputText('');

                const response = await Chatbot.getResponseAsync(inputText);
                setChatMeesages([
                    ...newChatMessages,
                    {
                        message:response,
                        profile:"robot",
                        id:crypto.randomUUID(),
                        time:dayjs(time).format('H:mma')
                    }
                ]);

            }
            function clearChatMessages(){
                setChatMeesages([]);
              
            }
            return (
                <div className="chat-input-container">
                    <input
                        id="inputValue" 
                        type="text" 
                        placeholder="Send a message to chatbot" 
                        onChange={saveInputText}
                        value={inputText}
                        onKeyDown={sendInputTextByKey}  
                        className="chat-input"
                        size="30"
                    />
                    <button className="input-button" onClick={sendInputText}>Send</button>
                    <button className="clear-button" onClick={clearChatMessages}>Clear</button>
                </div>
            );
        }
