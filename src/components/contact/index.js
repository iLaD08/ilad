import React from "react";
import { ContactPageDivContainer, ContactTitle, ConctactTitleUnderline, ContactPageInput, ContactPageMessage, ContactCaptcha, ContactSpan, MessageSentAlert } from "./style";

const Contact = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [messageSented, setMessageSented] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('');

    const submitRequest = async (e) => {
        e.preventDefault();

        if(username === "" && email === "" && message === "") {
            setErrorMessage('The form is empty')
        }
         else if(username === "") {
            setErrorMessage('The username is empty')
        }
         else if(email === "") {
            setErrorMessage('The email is empty')
        }
         else if(message === "") {
            setErrorMessage('The message is empty')
        }

        else {
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
        }
    };

    return (
        <ContactPageDivContainer>
             {messageSented == true ? (
                <MessageSentAlert>✅ Message sent</MessageSentAlert>
                ) : (
                    <form onSubmit={submitRequest} method="POST">
                    <ContactTitle>Contact</ContactTitle>
                    <ConctactTitleUnderline></ConctactTitleUnderline>
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
                       <ContactSpan>{errorMessage}</ContactSpan>
                       <ContactCaptcha
                            sitekey="6LdR6CYaAAAAAIA-PEqiHM8RqNEndngWJBKG0__u"
                        />
                    <div>
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
        )}
           
        </ContactPageDivContainer>
    )
};

export default Contact;