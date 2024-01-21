import { createRef, useRef } from "react"
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Form(){
    const x = {
        emailregex : /^[A-z0-9.+_-]+@[A-z0-9._-]+\.[A-z]{2,4}$/,
        textregex : /^[A-z ]{2,20}$/
    }
    const form = useRef();
    const firstName = createRef()
    const lastName = createRef()
    const email = createRef()
    const message = createRef()
    const telephone = createRef()
    const surface = createRef()
    const budget = createRef()
    const location = createRef()
    const locationType = createRef()
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        telephone: '',
        surface: '',
        budget: '',
        location: '',
        locationType: '',
        message: '',
      });
    const handleSubmit = (e) => {
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
            emailjs.sendForm('service_3eaxa4s', 'template_n5dytit', form.current, 'EN3TL27HPi3nDsrnz')
            .then((result) => {
                console.log(result.text);
                alert('email envoyée')
            }, (error) => {
                console.log(error.text);
            });
        }
    }   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return(
        <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Prénom <br/>
                <input ref={firstName} type='text' id="name" name='name' onChange={handleChange}></input>
            </label>
            <label htmlFor="surname">
                Nom <br/>
                <input ref={lastName} type='text' id="surname" name="surname" onChange={handleChange}></input>
            </label>
            <label htmlFor='email'>
                E-mail* <br/>
                <input ref={email} type='email' id="email" name='email' onChange={handleChange}></input>
            </label>
            <label htmlFor='telephone'>
                Téléphone <br/>
                <input ref={telephone} type='tel' id="telephone" name='telephone'  pattern="[0-9]{10}" onChange={handleChange}></input>
            </label><label htmlFor='location'>
                Localisation <br/>
                <input ref={location} type='text' id="location" name='location' onChange={handleChange}></input>
            </label>
            <label htmlFor='locationType'>
                Type de bien <br/>
                <input ref={locationType} type='text' id="locationType" name='locationType' onChange={handleChange}></input>
            </label>
            <label htmlFor="surface">
                Surface <br/>
                <input ref={surface} type='text' id="surface" name="surface" onChange={handleChange}></input>
            </label>
            <label htmlFor='budget'>
                Budget <br/>
                <input ref={budget} type='number' id="budget" name='budget' onChange={handleChange}></input>
            </label>
            <label htmlFor='message'>
                Dites nous en plus... <br/>
                <textarea ref={message} id='message' name='message' onChange={handleChange}></textarea>
            </label>
            <div className="submit-container">
                <input className='submit-btn' type='submit' value='Envoyer'></input>    
            </div>
        </form>
    )
}

export default Form