import React from "react";
import { ContactPageDivContainer, ContactPageInput, ContactPageMessage, MessageSentAlert } from "./style";

const Contact = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [messageSented, setMessageSented] = React.useState(false)

    const submitRequest = async (e) => {
        e.preventDefault();

        const response = await fetch("https://ilad-backend.glitch.me/smtp/sendmail", { 
          method: 'POST', 
          headers: { 
              'Content-type': 'application/json'
          }, 
          body: JSON.stringify({username, email, message}) 
      }).then(
          () => {
            setMessageSented(true)
            setUsername('')
            setEmail('');
            setMessage('');
          }
      )
};
    

    return (
        <ContactPageDivContainer>
             {messageSented == true ? (
                <MessageSentAlert>✅ Message sent</MessageSentAlert>
                ) : (
                    <form onSubmit={submitRequest}>
                    <div>
                        <ContactPageInput 
                            type="username"
                            placeholder="Username"  
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <ContactPageInput 
                            type="email"
                            placeholder="Email"  
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <ContactPageMessage 
                            value={message} 
                            placeholder="Message"
                            rows="5"
                            onChange={e => setMessage(e.target.value)}
                        />            
                    </div>
                    <button className="btn" type="submit">Submit</button>
                </form>
        )}
           
        </ContactPageDivContainer>
    )
};

export default Contact;