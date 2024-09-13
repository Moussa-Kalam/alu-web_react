import React from "react";
import "./Notifications.css";
import close from "./assets/close.png"
import { getLatestNotifications } from "../utils";

const Notifications = () => {
    return (
        <div className="Notifications">
            <p style={{ display: "flex", justifyContent: 'space-between'}}>Here is the list of notifications <button aria-label="close" style={{ textAlign: 'right', display: 'inline'}} onClick={() => console.log('Close button has been clicked')}>
                <img src={close} alt="close" height={20} width={20} />
            </button></p>
            <ul>
                <li>New course available</li>
                <li data-priority="1">New resume available</li>
                <li data-priority="1" dangerouslySetInnerHTML={{__html: getLatestNotifications()}}></li>
            </ul>
            
        </div>
    );
};

export default Notifications;