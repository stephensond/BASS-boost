import { EnterButton } from "./EnterButton";
import { Logo } from "./Logo";
import React from 'react';
import './landing.module.css';


export class Landing extends React.Component {
    render() {
        return (
            <div className="Landing" id="Landing">
                <Logo/>
                <div id="IntroText">
                    <h3>Everyone can Bass Boost</h3>
                    <h1>Few can 🐟 Boost!</h1>
                </div>
                <EnterButton />
            </div>            
        )
    }
}




