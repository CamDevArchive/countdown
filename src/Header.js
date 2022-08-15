import { useEffect, useState } from "react";


function calcuateProgramWeek() {
    let year = new Date().getFullYear();
    let difference = +new Date("3/31/" + year) - +new Date();
    let weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    return weeks;
}

const quotes = [
    "You're a nerd. :D 🎉",
    "Static void main string args",
    "Youre either blue or not blue",
    "AHHHHHHHHHHHHHHHH", 
    "Black Air Force Energy 🤔",
    "Try not to get hit by a bus",
    "Try Minecraft",
    "Im not like other people, im literally a program" ,
    "Something funny - Jules"
]


const getRandomQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

export default function Header() {
    const [countWeeks, setCountWeeks] = useState(0);
    const [quote , setQuote] = useState('');



    useEffect(() => {
        setCountWeeks(calcuateProgramWeek());
        let randomNumber = Math.random();
        if (randomNumber < 0.5) {
            setQuote(getRandomQuote());
        } else {
            fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                setQuote(data.content);
            }
            )
        }

    }, [])

    
    return (
        <header className="header">
            <h1 className="header__title">Countdown</h1>
            <p className="header__counter">Week {Math.abs(countWeeks) + 1}</p>
            <p className="header__quote">{quote}</p>
        </header>
    );
}