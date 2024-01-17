import { useState, useEffect } from "react";

function Quote(props) {
    const {quotes} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 7000);
        return () => {
            clearInterval(intervalId);
          };
        }, [quotes.length]);
    return (
        quotes.map((quote, index) => {
            return <div className={`quote ${index === currentIndex ? 'active' : ''}`}>
            <h4>{quote.title}</h4>
            <p className='quote-text'>{quote.text}</p>
        </div>
        })
    )
}
/*if(currentQuote.style.opacity === '0'){
        currentQuote.style.opacity = '1'
        nextQuote.style.opacity = '0'
      }else{
        currentQuote.style.opacity = '0'
        nextQuote.style.opacity = '1'
      }*/

export default Quote;