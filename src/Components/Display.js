import React, {Component} from 'react';
import Search from './Search';



export default class Display extends Component{
    constructor() {
        super();
        this.state = {
            city: '',
            country: '',
            humidity: '',
            temp: '',
            tempType: '',
            description: '',
        }
    }
     Box = (city, country, humidity, temp, tempType, description) => {
        this.setState({city});
        this.setState({country});
        this.setState({humidity});
        this.setState({temp});
        this.setState({tempType});
        this.setState({description});
        }


    render() {


            return (
                <div className='container'>
                    <div className='grid'>
                        <div className='grid-item question'>City:</div>
                        <div className='grid-item answer'>{this.state["city"]}</div>
                        <div className='grid-item question'>Country: </div>
                        <div className='grid-item answer'>{this.state["country"]}</div>
                        <div className='grid-item question'>Humidity: </div>
                        <div className='grid-item answer'>{this.state["humidity"]}</div>
                        <div className='grid-item question'>Temperature in Celesius: </div>
                        <div className='grid-item answer'>{this.state["temp"]}</div>
                        <div className='grid-item question'>Temperature in Fahrenheit: </div>
                        <div className='grid-item answer'>{this.state["tempType"]}</div>
                        <div className='grid-item question'>Description: </div>
                        <div className='grid-item answer'>{this.state["description"]}</div>
                    </div>
                    <Search Box={this.Box.bind(this)}/>
                </div>
            );
    }
}