import React, { Component } from 'react';
import './App.css';



class App extends Component {

  render() {
    return [
      <Title key="Title" />,
      <UserIn key="UserIn" />,
      <ListLoader key="ListLoader" />
    ];
  }
}

class ListLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
          this.setState({
            isLoaded: true,
            items: [{id: 1, content: "learn react.js"}]
          });
        }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const listitems = items.map((item) =>
      <li key={item.id} id={item.id}
       onClick={(e) => remove(item.id,e)}>{item.content}</li>
      );
      return (
        <ul key="todolist" id="out">
          {listitems}
        </ul>
      );
    }
  }
}



class UserIn extends React.Component {


  render() {
    return [<input key="textbox" id="in" type="text"/>,
      <button onClick={(e) => additem( document.getElementById('in').value, e)}
      key="additembutton">
        Click Me To Add
      </button>
    ];
  }

}

function remove(key,e){
  var list = document.getElementsByTagName('li');
  for(let item of list){
    if(item.id === key.toString())
      item.parentNode.removeChild(item);
  }

}

function additem(s,e){
  if(s){
    document.getElementById('in').value = "";
    var list = document.getElementById('out');
    var listitem = document.createElement("li");
    var newid = list.childNodes.length + 1;
    var tempitem = {id: newid, content: s, progress: 'not done'};
    listitem.key = tempitem.id;
    listitem.id = tempitem.id;
    listitem.innerHTML = s;
    listitem.onclick = () => remove(tempitem.id);

    list.appendChild(listitem);

  }
}


class Title extends React.Component{

   render(){
      return(
        <h1>Willem's React to-do list:</h1>
      );
    }

}

export default App;
