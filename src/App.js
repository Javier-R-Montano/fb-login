import logo from './logo.svg';
import './App.css';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log('click');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FacebookLogin
          appId="1435421300147613"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          version="11.0"
          onClick={componentClicked}
          callback={responseFacebook} 
        />
      </header>
    </div>
  );
}

export default App;
