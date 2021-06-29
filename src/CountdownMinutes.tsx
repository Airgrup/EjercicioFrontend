import { useEffect, useState } from "react";

export const CountdownMinutes = (props: { date: Date }) =>
{
    const [minutes, setMinutes] = useState(() => calculateMinutesLeft(props.date));

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setMinutes(calculateMinutesLeft(props.date));
        }, 1000);

        return () => clearInterval(timer);
    }, [props.date]);

    return <>{ Math.floor(minutes) }</>
}

let fakeCounter = 0;

const calculateMinutesLeft = (date: Date) => 
{
    console.log(date);
    return fakeCounter++;
}