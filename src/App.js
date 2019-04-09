import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './CheckLogin.js';
import { types } from 'util';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
}from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Home extends Component{
    constructor(){
        super();
        this.state={
            list:["10010","10086","10000"]
        }
    }
    render(){
        return (
       <div>
        <h2>新闻主页</h2>
        {
            this.state.list.map((item)=>{
               return <li>
                   <Link to={`/detail/${item}`}>{item}</Link>
               </li> ;
            })
        }

        </div>
        
        )
    }
}
class News extends Component{
    render(){
        return <h2>新闻内容</h2>;
    }
}
class Others extends Component{
    render(){
        return <h2>其他内容</h2>;
    }
}
class Detail extends Component{
    render(){
        return(
        <div>
           <h2>这是详情页</h2>
           <p>{this.props.match.params.tel}</p>

        </div>
      ) ;  
    }
}

class App extends Component{
    // 容器
    constructor(){
        super();
        this.state ={
            list:[]
        }
        this.addTodo=this.addTodo.bind(this);//修正指针
    }
    // 增加内容
    addTodo(){
        this.state.list.push(this.refs.todoVal.value);//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
        this.setState({
            list:this.state.list
        })

    }
    // 删除内容
    deleteTODO(index){
      this.state.list.splice(index,1);//splice() 方法可删除从 index 处开始的零个或多个元素,后面再加个参数例如splice(index,1,"daiti"),加的这个元素代替被删的元素
      this.setState({
        list:this.state.list
      })
    }
    // 进行DOM的渲染
    render(){
        let items= this.state.list.map((item,index)=>{
            return <li key={item}>{item}
            <button onClick={()=>this.deleteTODO(index)}>x</button>
            </li>
        })
        return(
            <div className='App'>
            <input type="text" ref="todoVal"/>
            <button onClick={this.addTodo}>ADD TODO</button>
            <ul>
                <ReactCSSTransitionGroup
                 transitionName="reactAnim"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}>
                
                {items}
                </ReactCSSTransitionGroup>
              
            </ul>
            {/* 路由的使用 */}
            <div>
                <Router>
                    <Link to="/">主页</Link>
                    <Link to="/news">新闻</Link>
                    <Link to="/others">其他</Link>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/others" component={Others}/>
                </Router>
            </div>
             {/* 路由NavLink标签的使用 */}
             <div>
                <Router>
                <div className="navbar">
                    <NavLink exact activeClassName="active" to="/">主页1</NavLink>
                    {/* 这里不加exact做精确匹配的话，其他项都带斜杠所以不管点击哪个选项这一选项的属性的不变 */}
                    <NavLink activeClassName="active" to="/news">新闻1</NavLink>
                    <NavLink activeClassName="active" to="/others">其他</NavLink>
                 </div>  
                   <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/others" component={Others}/>
                    <Route path="/detail/:tel" component={Detail}/>
                </Router>
            </div>
            </div>
            
        );
    }
}
export default App;