import { useEffect, useState } from "react";

export const CountdownMinutes = () =>
{
    const [minutes, setMinutes] = useState(() => calculateMinutesLeft());

    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setMinutes(calculateMinutesLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return <>{ Math.floor(minutes) }</>
}

const calculateMinutesLeft = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const dateString = date.toDateString();
    const difference = + new Date(`${dateString} 00:00:00:0`) - +new Date();
    const result = (difference / 1000 / 60) % 60;
    console.log(`${result} minutes left`); 
    return result;
}