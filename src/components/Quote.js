import quoteLeft from '../assets/quote.svg'
import quoteRight from '../assets/quote-mirror.svg'

function Quote(props) {
    const {title, text} = props
    return (
        <>
            <div className='quote'>
                <h4>{title}</h4>
                <p className='quote-text'>{text}</p>
            </div>

        </>
    )
}

export default Quote;