import React from "react";
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


function Notifications() {
   // function to handel click
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <button onClick={handleButtonClick} style={{ position: 'absolute', right: '0'  }} aria-label="Close">
                <img src={closeIcon} alt="Close" />
            </button>
            <p>Here is the list of notifications </p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent" style={{ color: 'red' }}>New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;