import React ,{Component } from "react";
class Welcomes extends Component{
constructor(){
    super()
    this.state ={
        message : 'Welcome Visitor'
    }
}
ChangeMessage(){
    this.setstate(
        {
            messages : 'Thank you for Subscribing'
        }
    )
}
render (){
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.ChangeMessage()}>Subscribe</button>
        </div>
    )
}
}
export default Welcomes
// using state components