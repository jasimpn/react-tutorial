import RobotProfileImage from '../assets/chatbot-images/robot.png'
import UserProfileImage from '../assets/chatbot-images/user.png'
import '../styles/ChatMessage.css'
export function ChatMessage({message,profile,time}){
    // the dayjs module is imported for fetch the time to display in message div at the time it created
    return (
        <div className={
            profile === "user" 
            ? "chat-message-user" 
            : "chat-message-robot"
        }>
        {profile === "robot" &&  <img src={RobotProfileImage} width="50px" />}
        <div className="chat-message-text">
            {message}
             {/* the time is diplayes here. later add CSS and also find the logic for pm and am */ }
             <div className='chat-message-time'>
                {time}
             </div>
        </div>
            {profile === "user" && <img src={UserProfileImage} width="50px" />}
        </div>
                 
    );
};