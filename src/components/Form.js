import { createRef, useCallback } from "react"

function Form(){
    const x = {
        emailregex : /^[A-z0-9.+_-]+@[A-z0-9._-]+\.[A-z]{2,4}$/,
        textregex : /^[A-z ]{2,20}$/
    }
    const firstName = createRef()
    const lastName = createRef()
    const email = createRef()
    const message = createRef()
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        firstName.current.value = e.target.name.value
        lastName.current.value = e.target.surname.value
        email.current.value = e.target.email.value
        message.current.value = e.target.message.value
        if((!x.textregex.test(firstName.current.value) && firstName.current.value.length >= 3) || firstName.current.value.length < 3){
            console.log('name not valid')
            firstName.current.className = 'error'
        }else{
            firstName.current.className = ''
        }if((!x.textregex.test(lastName.current.value) && lastName.current.value.length >= 2) || lastName.current.value.length < 2){
            console.log('surname not valid')
            lastName.current.className = 'error'
        }else{
            lastName.current.className = ''
        }if(!x.emailregex.test(email.current.value)){
            console.log('email not valid')
            email.current.className = 'error'
        }else{
            email.current.className = ''
        }if(message.current.value.length <= 10){
            console.log('not valid')
            message.current.className = 'error'
        }else{
            message.current.className = ''
        }
        if(firstName.current.className !== 'error' && lastName.current.className !== 'error' && email.current.className !== 'error' && message.current.className !== 'error'){
            console.log('submit successful')
        }
    },[email, firstName, lastName, message, x.emailregex, x.textregex])
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Prénom <br/>
                <input ref={firstName} type='text' id="name" name='name'></input>
            </label>
            <label htmlFor="surname">
                Nom <br/>
                <input ref={lastName} type='text' id="surname" name="surname"></input>
            </label>
            <label htmlFor='email'>
                E-mail* <br/>
                <input ref={email} type='email' id="email" name='email'></input>
            </label>
            <label htmlFor='message'>
                Contacter <br/>
                <textarea ref={message} id='message' name='message'></textarea>
            </label>
            <input className='submit-btn' type='submit' value='Envoyer'></input>
        </form>
    )
}

export default Form