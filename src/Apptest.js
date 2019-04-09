import React,{Componnent} from 'react';
import './App.css';
import ReactCSSThransitionGroup from 'react-addons-css-transition-group';

class App extends Component{
    constructor(){
        super();
        this.state ={
            list:[]
        }
        this.addTodo=this.addTodo.bind(this);//修正指针
    }
    addTodo(){
        this.state.list.push(this.refs.todoVal.value);
        this.setState({
            list:this.state.list
        })

    }
    render(){
        let items= this.state.list.map((item)=>{
            return <li key={item}>{item}</li>;
        })
        return(
            <div className='Apptest'>
            <input type="text" ref="todoVal"/>
            <button onClick={this.addTodo}>ADD TODO</button>
            <ul>
                <ReactCSSThransitionGroup
                 transitionName="reactAnim-enter"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}>
                
                {items}
                </ReactCSSThransitionGroup>
              
            </ul>
            </div>
        );
    }
}
export default App;