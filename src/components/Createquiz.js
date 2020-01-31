import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import './Createquiz.css'
import Instructions from './Instructions'

export default class Createquiz extends Component{
    render(){
        return(
      
        <button id ="but" onClick="/Instructions" type="button">
            Create Now
                </button>       
        )
    }
}