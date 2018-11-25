import React, { Component } from 'react';
import User from './user';
import './App.css';
import UniqueId from 'react-html-id';

class App extends Component {
  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state={
    
      users:[{id:this.nextUniqueId(),name:"sai",age:45},
              {id:this.nextUniqueId(),name:"sugnash",age:78},
              {id:this.nextUniqueId(),name:"dhoni",age:89},
              {id:this.nextUniqueId(),name:"divan",age:37},
              {id:this.nextUniqueId(),name:"sugana",age:58},
              {id:this.nextUniqueId(),name:"david",age:87},
              {id:this.nextUniqueId(),name:"david",age:38},]
    }
  }
  
   deleteUser=(index,e)=>{
     const users=Object.assign([],this.state.users);
     users.shift(index,1);
     this.setState({users:users});
   }
  render() {
    return (
      <div className="App">
       <ul>
         {
          this.state.users.map((users,index)=>{
            return (<User age={users.age} key={users.id}
              delEvent={this.deleteUser.bind(this,index)}
            >name:{users.name}</User>)
          })
         }
       </ul>
      </div>
    );
  }
}

export default App;
