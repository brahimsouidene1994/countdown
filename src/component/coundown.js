import React from 'react'
import './countdown.css'
class Countdown extends React.Component {
    constructor(){
        super();
        this.state = {
            day : 0,
            hour : 0,
            minute :0,
            second : 0
        }
        this.countdown = this.countdown.bind(this);
    }
    countdown = () =>{
        const countDate = new Date("May 17, 2021 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24 ;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        this.setState({
            day : textDay,
            hour : textHour,
            minute : textMinute,
            second : textSecond
        })
    }
    
    render(){
        setInterval(this.countdown, 1000);
        return (
            <>
                <section className="coming-soon">
                    <div>
                        <h2>This event start soon...!</h2>
                        <div className="countdown">
                            <div className="container-day">
                                <h3 className="day">{this.state.day}</h3>
                                <h3>Days</h3>
                            </div>
                            <div className="container-hour">
                                <h3 className="hour">{this.state.hour}</h3>
                                <h3>Hours</h3>
                            </div>
                            <div className="container-minute">
                                <h3 className="minute">{this.state.minute}</h3>
                                <h3>Minutes</h3>
                            </div>
                            <div className="container-second">
                                <h3 className="second">{this.state.second}</h3>
                                <h3>Seconds</h3>
                            </div>
                        </div>
                    </div>
                    <img className="waiting" src="https://media3.giphy.com/media/lP4jmO461gq9uLzzYc/giphy.gif" alt=""/>
                </section>
            </>
        )
    }
    
}

export default Countdown
