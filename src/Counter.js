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
            counter : 0,
        };

        this.updateUI = this.updateUI.bind(this);
    }

  
    handleIncrement = ()=>
    {
        // this.setState
    }

    updateUI()
    {
        var ms  = String(parseInt((this.state.counter) % 100, 10));
        // console.log(ms)
        if(ms.length ==1)
        {
            ms = "0" + ms
        }
     
        var s =  String(parseInt((this.state.counter/ 1000) % 60));

        if(s.length==1)
        {
            s = "0" + s
        }
     

        var min = String(parseInt((this.state.counter / 60000) % 60 , 10)); 

        if(min.length == 1)
        {
            min = "0" + min
        }
    
        var hr = String(Math.floor((this.state.counter/ 3600000))); 

    

        if(hr.length == 1)
        {
            hr = "0" + hr
        }


        this.setState(
            {
                counter : this.state.counter + 33,
                milsec : ms,
                sec : s,
                min : min,
                hr : hr
            });
    }

    componentDidMount()
    {
        
        if(this.timer)
        {
            this.timer = setInterval(this.updateUI, 33);
        }
    }
    
    handleStartClick = ()=>
    {   
      
        if(!this.timer)
        {
          this.timer = setInterval(this.updateUI, 33);
        }
      
        
    }

    handlePauseClick = ()=>
    {
        // clearInterval(this.timer);
        // this.setState({
        //     hr : "00",
        //     min : "00",
        //     sec : "00",
        //     milsec : "00"
        // })
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
             <input type="text" style={inp} placeholder="0" className="form-control" id="isec"  onChange={this.handleChange} value={this.state.sec}></input>
             <span style={inp}> seconds </span>
             <br></br>
             <br></br>
             <br></br>
             <button type="button" className="btn btn-success" style={spacing} onClick={this.handleStartClick}>Start</button>
             <button type="button" className="btn btn-warning" style={spacing}>Pause</button>
             <button type="button" className="btn btn-danger" style={spacing}>Stop</button>
             <br>
             </br>
             {/* <h3>{this.state.counter}</h3> */}
             {/* <div className="count" onClick={this.handleIncrement}>{this.state.count}</div> */}
         </div>
          
        
        );
    }
}