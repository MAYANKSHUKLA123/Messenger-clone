import React,{useEffect, useState} from 'react';
import './App.css';
import {FormControl,Input,InputLabel,IconButton} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const[input,setInput]=useState('');
  const[messages,setMessage]=useState([]);
  const [username,setUsername]=useState('');
  useEffect(()=>{
        db.collection('messages')
        .orderBy('timestamp','desc').onSnapshot(snapshot=>{
          setMessage(snapshot.docs.map(doc=>({id: doc.id,message: doc.data()})))
        });
  },[])
  useEffect(() => { 
  // const name= prompt('Please enter your name');
  setUsername(prompt('Please enter your name'))
    
  },[])
  const sendMessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  
  setInput('');

  }
  return (
    <div className="App">
      <img src="https://www.adweek.com/wp-content/uploads/2017/08/facebook-messenger-logo.jpg?w=1&h=1" alt="" width="30%" />
     
    <h1>Hello Buddy Give it a try</h1> 
    <h2>Welcome {username}</h2>
    <form className="app_form">
    <FormControl className="app_formControl">
      <InputLabel>Enter Message</InputLabel>
      <Input className="app_input" placeholder='Enter a message..' value={input} onChange={event=>setInput(event.target.value)} />
     <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
       <SendIcon /> 
      
    </IconButton>
  </FormControl>
     
    </form>
     {/* {input field} */} 
      {/* {button} */} 
      {/* {message themselves} */}
   
      <FlipMove>
      {
        messages.map(({id,message})=>(

          <Message key={id} username={username} message={message} />
          
  ))
      }
      </FlipMove>
     
    </div>
  );
}

export default App;
