import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class LoginControl extends Component{
  constructor(props){
    super(props);
    this.loginClick=this.loginClick.bind(this);
    this.logoutClick=this.logoutClick.bind(this);
    this.state={isLoggedIn:false}
  }
  loginClick(){
    this.setState({isLoggedIn:true});
  }
  logoutClick(){
    this.setState({isLoggedIn:false});
  }
  render(){
    const isLoggedIn=this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button=<LogoutButton onClick={this.logoutClick}/>
    }else{
      button=<LoginButton onClick={this.loginClick}/>
    }
    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}
function UserGreeting(props){
  return <h1>欢迎回来</h1>;
}
function GuestGreeting(props){
  return <h1>请先注册</h1>;
}
function Greeting(props){
  const isLoggedIn=props.isLoggedIn;
if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}
function LoginButton(props){
  return(
    <button onClick={props.onClick}>
    登陆
    </button>
  );
}
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
    退出
    </button>
  );
}
export default LoginControl;
