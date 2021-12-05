import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '');
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== '');
  const {
    value: enteredEmailAdress,
    isValid: enteredEmailAdressIsValid,
    hasError: emailAdressHasError,
    valueChangeHandler: emailAdressChangeHandler,
    inputBlurHandler: emailAdressBlurHandler,
    reset: resetEmailAdress
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailAdressIsValid) { // && adiing another parametes
    formIsValid = true
  }
  const formSubmitHanlder = event => {
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmailAdress();
  }


  const firstNameInputClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameInputClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailAdressInputClasses = emailAdressHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmitHanlder}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='FirstName' 
          onChange={firstNameChangeHandler} 
          onBlur={firstNameBlurHandler} 
          value={enteredFirstName}
          />
          {firstNameHasError && <p>First name don't have to be empty, because you have to fill in the first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='LastName' 
          onChange={lastNameChangeHandler} 
          onBlur={lastNameBlurHandler} 
          value={enteredLastName}
          />
          {lastNameHasError && <p>Last name don't have to be empty, because you have to fill in the last name.</p>}
        </div>
      </div>
      <div className={emailAdressInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='EmailAdress' 
        onChange={emailAdressChangeHandler} 
        onBlur={emailAdressBlurHandler} 
        value={enteredEmailAdress}
        />
        {emailAdressHasError && <p>Email adress don't have to be empty or be wriiten without '@gmail.com', because you have to fill in the email adress.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
