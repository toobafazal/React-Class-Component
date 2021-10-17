import React, {Component} from 'react';

class State extends Component {
    render(){
      this.state = {
        name : "Tooba",
        roll_num : 16,
        skills : ["HTML" , "CSS" , "JS" , "Bootstrap",'PHP',"laravel"],
        email: "toobafazal75@gmail.com"
      }
      return(
        <>
        <table>
            <tr>
        <td colSpan="5">Class Component</td>
        </tr>
        <tr>
        <td>Name :</td> <td>{this.state.name}</td>
        
        <td>Roll-num :</td> <td> {this.state.roll_num}</td>
        </tr>
        <tr>
            <td colSpan="2"> Skills</td>
        <td  colSpan="2">{this.state.skills.map((i)=>(
          <p> : {i}</p>
          ))}
          </td>
        </tr>
        </table>
        </>
  
      )
    }
  
  }
  
  export default State;
  