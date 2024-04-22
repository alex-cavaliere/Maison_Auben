
function Quote(props) {
    const {quotes, currentIndex} = props
    //console.log(currentIndex)
    return (
        quotes.map((quote, index) => {
            return <div key={`quote-${index}`} className={`quote ${index === currentIndex ? 'active' : ''}`}>
            <h4>{quote.attributes.title}</h4>
            <div>
              <p className='quote-text'>{quote.attributes.content}</p>
            </div>
        </div>
        })
    )
}

export default Quote;