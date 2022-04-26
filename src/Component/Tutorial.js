import React, { Component } from 'react';

class Tutorial extends Component {
    render() {
        return (
            <div className='content'>
                <ul data-uk-accordion>
                    <li className='accordionopen'>
                        <a className='uk-accordion-title' href='#'>Backend Login</a>
                        <div className='uk-accordion-content'>
                            <p>log in to the backend platform, <a href='https://dev.youssefouar.com/wp-admin'>https://dev.youssefouar.com/</a></p>
                            <p>Login: Test</p>
                            <p>Passwort: 123456789</p>
                            <img className='smallimg' src={require("../Tuto/1.png")}></img>
                        </div>
                    </li>
                    <li className='accordionopen'>
                        <a className='uk-accordion-title' href='#'>add new Product</a>
                        <div className='uk-accordion-content'>
                            <p>Click Products at The menu and add new Product</p>
                            <img className='smallimg' src={require("../Tuto/3.png")}></img>
                        </div>
                    </li>
                    <li className='accordionopen'>
                        <a className='uk-accordion-title' href='#'>Publish</a>
                        <div className='uk-accordion-content'>
                            <p>add Product Info and publish it</p>
                            <img className='smallimg' src={require("../Tuto/4.png")}></img>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Tutorial;