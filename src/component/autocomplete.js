import React ,{ Component } from "react";
import ReactDOM from 'react-dom';

class Autocomplete extends Component{
    constructor(props){
        super(props)
        this.state = {
            input:["chips","ola"],
            inputText:"",
            dropdownOptions:[],
            dropdown:true
        }
    }

    componentDidMount(){
        window.addEventListener('click', this.closeDropdown);
    }

    inputChange = (e) =>{
        this.setState({inputText:e.target.value})
    }

    closeDropdown = () =>{
        console.log("closeDropdown")
        this.setState({dropdown:false})
    }

    makeEntry = (e)=> {
        if(e.code==='Enter'){
            const arr = this.state.input.slice()
            arr.push(this.state.inputText)
            this.setState({
                input:arr,
                inputText:""
            })
         }
    }

    onRemove = (id)=>{
        const arr = this.state.input.slice()
        const modifiedArr = arr.filter((el,index)=>id!==index)
        this.setState({input:modifiedArr})
    }

    render(){
        const{ input, inputText, dropdownOptions, dropdown} = this.state
        const { options } = this.props
        return(
            <div>
                <div className="box">
                    <div className="chips">
                        {
                            input.map((el,index)=><div className="chip"><div className="element">{el}</div><div className="close" onClick={()=>this.onRemove(index)}>x</div></div>)
                        }
                    </div>
                    <div className="input">
                        <input type="text" onChange={this.inputChange}  onKeyPress={this.makeEntry} value={inputText}/>
                    </div>
                </div>
                {
                    dropdown && (
                        <div className="options">
                            {
                                options.map((el)=><div>{el}</div>)
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}
export default Autocomplete