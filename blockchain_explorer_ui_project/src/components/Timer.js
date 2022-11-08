import React from "react";
import Moment from 'react-moment';
export default class Timer extends React.Component {
    render() {
        return (
            <time><Moment format="YYYY-MM-DD HH:MM:SS" /></time>
        );
    }
}