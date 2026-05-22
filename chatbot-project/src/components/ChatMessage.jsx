import RobotProfileImage from '../assets/chatbot-images/robot.png'
import UserProfileImage from '../assets/chatbot-images/user.png'

export function ChatMessage({message,profile}){
                return (
                    <div className={
                            profile === "user" 
                            ? "chat-message-user" 
                            : "chat-message-robot"
                        }>
                        {profile === "robot" &&  <img src={RobotProfileImage} width="50px" />}
                        <div className="chat-message-text">
                            {message}
                        </div>
                        {profile === "user" && <img src={UserProfileImage} width="50px" />}
                    </div>
                 
                );
        };