import { useEffect, useState } from "react";

export const CountdownHours = () =>
{
    const [hours, setHours] = useState(() => calculateHoursLeft());


    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setHours(calculateHoursLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return <>{ Math.floor(hours) }</>
}

const calculateHoursLeft = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const dateString = date.toDateString();
    const difference = + new Date(`${dateString} 00:00:00:0`) - +new Date();
    const result = (difference / (1000 * 60 * 60)) % 24;
    console.log(`${result} hours left`); 
    return result;
}