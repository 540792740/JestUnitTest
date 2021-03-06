import React, { Component } from 'react'
import Search from "./Search";
import Searchbutton from "./Searchbutton";
import Searchtable from "./Searchtable";

export default class CallTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : 'title',
      content : "content",
      getData: false,
      inputValue: "qui est esse"
    }
  }
  SearchItemMethod(){
    if(this.state.getData){
      let value = this.state.inputValue;
      value = value.split(" ");
      value = value.join("%20")
      console.log("value",value)
      const apiUrl = 'http://jsonplaceholder.typicode.com/posts?title=' + this.state.inputValue;
      console.log(apiUrl)
      
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("ssss",data)
          this.setState({
            title:data[0].title,
            content:data[0].body,
            getData: false
          })
        })
      }
    }

  inputChange(value){
    this.setState({
        inputValue:value
    })
  }

  buttonClick(){
    this.setState({
      getData:true
    })
    this.SearchItemMethod();
  }


  render() {
    return (
      <div style={{textAlign:"center"}}>
        {/* <Header/> */}
        <Search inputChange={(e)=>this.inputChange(e)}></Search>
        <Searchbutton buttonClick={()=>this.buttonClick()} ></Searchbutton>
        <Searchtable  title={this.state.title}
                    content={this.state.content}
        ></Searchtable>
      </div>
    )
  }
}
