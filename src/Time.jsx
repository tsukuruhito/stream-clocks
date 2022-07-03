import { useState } from "react";

const Time = (props) => {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [time, setTime] = useState("");
    const [day, setDay] = useState(new Date().toLocaleString("en-US", { weekday: "long" }));

    setInterval(()=>{
        const datetime = new Date().toLocaleTimeString().slice(0, -3);
        if(datetime.length===4){
            setTime("0"+datetime);
        }else{
            setTime(datetime);
        }
    },1000);
    
    return(
        <div className={props.selectedType}>
            <div className="date_body">
                <div className="date_day">{day}</div>
                <div className="date_date">{date}</div>
                <div className="date_time">{time}</div>
            </div>
        </div>
    )
}

export default Time;