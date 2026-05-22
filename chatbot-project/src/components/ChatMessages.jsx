import { useEffect, useRef } from 'react'
import { ChatMessage } from '../components/ChatMessage'
export function ChatMessages ({chatMessages}){
            const chatMesssagesRef = useRef(null);

            useEffect(()=>{
                const containerElem =chatMesssagesRef.current;
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight
                }
                
            },[chatMessages])
            return(
                <div ref={chatMesssagesRef} className="chat-messages-container">
                    {chatMessages.map((chatMessage)=>{
                            return(
                                <ChatMessage 
                                    message={chatMessage.message}
                                    profile={chatMessage.profile}
                                    key={chatMessage.id}
                                />
                            )
                        })
                    }
                </div>
            )
        }