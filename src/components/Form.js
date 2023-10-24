
function Form(){
    return(
        <form>
            <label id='name'>
                Prénom <br/>
                <input type='text'></input>
            </label>
            <label id='surname'>
                Nom de Famille <br/>
                <input type='text'></input>
            </label>
            <label id='e-mail'>
                E-mail* <br/>
                <input type='text'></input>
            </label>
            <label id='message'>
                Contact <br/>
                <textarea></textarea>
            </label>
        </form>
    )
}

export default Form