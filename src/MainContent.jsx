
import React from 'react';
import ReactDOM from 'react-dom/client'
export default function MainContent(){
    return (
    <div className='mainSection'>
        <h2 className='mainSection-title'></h2>
        <div className='mainSection-detail'>
            <ul className='detail-list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
    )
}