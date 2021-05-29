import React from "react";
import API from "../../api/api";
import {
  ContactPageDivContainer,
  ContactTitle,
  ConctactTitleUnderline,
  ContactPageInput,
  ContactPageMessage,
  ContactCaptcha,
  ContactSpan,
  MessageSentAlert,
} from "./style";

const Contact = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageSented, setMessageSented] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState("");
  const [Value, setValue] = React.useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailValidation(re.test(String(email).toLowerCase()));
    setEmail(email);
  };

  const submitRequest = async () => {
    const contactData = {
      username: username,
      email: email,
      message: message,
    };

    if (username === "" && email === "" && message === "") {
      setErrorMessage("The form is empty");
    } else if (username === "") {
      setErrorMessage("Username is empty");
    } else if (email === "") {
      setErrorMessage("Email is empty");
    } else if (!emailValidation) {
      setErrorMessage("Invalid email");
    } else if (message === "") {
      setErrorMessage("Message is empty");
    } else {
      if (Value) {
        setErrorMessage("");
        API.post("/smtp/sendmail", contactData).then((res) => {
          setUsername("");
          setEmail("");
          setMessage("");
          setMessageSented(true);
        });
      } else {
        setErrorMessage("Captcha required");
      }
    }
  };

  return (
    <ContactPageDivContainer>
      {messageSented ? (
        <MessageSentAlert>✅ Message sent</MessageSentAlert>
      ) : (
        <>
          <ContactTitle>Contact</ContactTitle>
          <ConctactTitleUnderline />
          <div>
            <ContactPageInput
              type='username'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <ContactPageInput
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
            />
          </div>
          <div>
            <ContactPageMessage
              value={message}
              placeholder='Message'
              rows='5'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <ContactSpan>{errorMessage}</ContactSpan>
          <ContactCaptcha
            sitekey='6LdR6CYaAAAAAIA-PEqiHM8RqNEndngWJBKG0__u'
            onChange={onChange}
          />
          <div>
            <button onClick={submitRequest}>Submit</button>
          </div>
        </>
      )}
    </ContactPageDivContainer>
  );
};

export default Contact;
