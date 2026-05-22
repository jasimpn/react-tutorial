import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

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
                            id:crypto.randomUUID()
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
                            id:crypto.randomUUID()
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
                        id:crypto.randomUUID()
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
                        id:crypto.randomUUID()
                    }
                ]);

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
                </div>
            );
        }
