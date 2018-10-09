import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Counter extends Component
{

    constructor(props)
    {
        super(props);
        this.state =  
        { 
          
            hr : "00", 
            min : "00", 
            sec : "00", 
            milsec : "00",
            
            status : 0,

            ihr : "0", 
            imin : "0", 
            isec : "0", 
          

        };
    }

  
    handleIncrement = ()=>
    {
        // this.setState
    }


    componentDidMount()
    {
        console.log(this.state.status);

    
        // setInterval(()=>
        // {
        //     this.setState({hr : Number(this.state.hr)+1})
        // }
        // ,
        // 60)

        if(this.state.status == 1)
        {
            var hr = Number(this.state.hr);
            var min = Number(this.state.min);
            var sec = Number(this.state.sec);
            // var milsec = Number(this.state.milsec);
    
            if(!(hr>=this.state.ihr))
            {
                this.interval = setInterval(()=>
                {
                    this.setState({hr : Number(this.state.hr+1)})
                }
                ,
                1000*60*60)
            }
            if(!(min>=this.state.imin))
            {
                this.interval = setInterval(()=>
                {
                    this.setState({min : Number(this.state.min+1)})
                }
                ,
                1000*60)
            }
            if(!(this.state.sec >= this.state.isec))
            {
                console.log(this.state.sec,this.state.isec);
                setInterval(()=>
                {
                   this.interval =  this.setState({sec : Number(this.state.sec+1)  })
                }
                ,
                1000)
            }
         
        }
        
    }
    
    handleStartClick = ()=>
    {
        
            this.setState({status : 1});
            this.componentDidMount(); 
    }
  
    handleChange =  (event)=>
    {
        let source = event.target.id;

        if(this.state.status == 0)
        {
            if(source == "isec")
            {
                this.setState({isec : event.target.value})
            }

            else if(source == "imin")
            {
                this.setState({imin : event.target.value})
            }

            else if(source == "ihr")
            {
                this.setState({ihr : event.target.value})
            }
        }
    }
    render()
    {
        const inp = {
            width : '60px',
            height : '60px',
            fontSize : '26px',
            fontWeight : 'bold',
            textAlign : 'center',
            display: 'inline'
        };

        const spacing = 
        {
            margin : '6px'
        }
        return (

         <div>
             <h1>Countdown Timer</h1>
             <br></br>
             <h2 >{this.state.hr} : {this.state.min} : {this.state.sec} : {this.state.milsec}</h2>
             <br></br>
             <input type="text" style={inp}  placeholder="0" className="form-control" id="ihr" onChange={this.handleChange}></input>
             <span style={inp}> hours </span>
             <input type="text" style={inp} className="form-control" placeholder="0" id="imin" onChange={this.handleChange}></input>
             <span style={inp}> minutes </span>
             <input type="text" style={inp} placeholder="0" className="form-control" id="isec"  onChange={this.handleChange}></input>
             <span style={inp}> seconds </span>
             <br></br>
             <br></br>
             <br></br>
             <button type="button" className="btn btn-success" style={spacing} onClick={this.handleStartClick}>Start</button>
             <button type="button" className="btn btn-warning" style={spacing}>Pause</button>
             <button type="button" className="btn btn-danger" style={spacing}>Stop</button>
             {/* <div className="count" onClick={this.handleIncrement}>{this.state.count}</div> */}
         </div>
          
        
        );
    }
}