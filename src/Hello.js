import React, { Component } from 'react';
import './Hello.css';
import 'tachyons';

if (1>2) {
    class Hello extends Component {
        render(){
            return (
            <div>
                <h1 className="f1 tc">Hello World</h1>
                <p>{this.props.greeting}</p>
            </div>
            );
        }
    }
} else {
    class Hello extends Component {
        render(){
            return (
            <div>
                <h1 className="f1 tc">Welcome!</h1>
                <p>{this.props.greeting}</p>
            </div>
            );
        }
    }
}

export default Hello;