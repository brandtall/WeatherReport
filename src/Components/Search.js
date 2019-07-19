import React, { Component } from 'react';
import Form from './Form'

export default class Search extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }
    async Weather(city, country) {
        try {
            const resp = await fetch('Http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=6abb46b7d4dff921996c81d2be8a1413');
            if ( resp.ok ) {
            const jsonFile = await resp.json();
            console.log(jsonFile)
            this.props.Box(city, country, jsonFile.main['humidity'], (jsonFile.main['temp'] - 273.15), ((jsonFile.main['temp'] * 9/5) - 459.67), jsonFile.weather['0']['description'])
        }
            else {
                throw Error(resp.statusText)
            }
    }
        catch (error) {
            alert(error);
        }
    }
    
    render() {
        return (
            <Form Weather={this.Weather.bind(this)}/>
        );
    }
}