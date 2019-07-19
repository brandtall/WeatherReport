import React, {Component} from 'react'


export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            country: '',
        };
    }

    handleChangeA(e) {
        let target = e.target.value;
        this.setState({city:target} )
        
    }
    handleChangeB(e) {
        let target = e.target.value;
        this.setState({country: target})
    }

     submitHandler(e) {
        this.props.Weather(this.state['city'], this.state['country'])
    }

    render() {
        
        return (
            <div className='inputField'>
                <input name='city' placeholder='City ex. London' onChange={this.handleChangeA.bind(this)}/><br/>
                <input name='country' placeholder= 'Country ex. UK' maxLength='2' onChange={this.handleChangeB.bind(this)}/><br/>
                <button name='btn' onClick={this.submitHandler.bind(this)}>Search</button>
            </div>
        );
    }
}