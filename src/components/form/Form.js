function Form(props ) {

const value = (ev) => {
    props.handleChangE(ev.target.value)
    
}
const handleSubmit = (ev) => {
    ev.preventDefault();
  };

    return(
        <form className='form' onSubmit= {handleSubmit}>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoFocus
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={props.lastLetter}
              onKeyDown={props.handleKeyDowN}
              onChange={value}
            />
          </form>
        
        
    

    )
}

export default Form