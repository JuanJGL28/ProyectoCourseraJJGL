const FormField = ({ children, hasError, errorMessage }) => {
    return (
      <div className="form-field">
        {children}
        {hasError && errorMessage ? <p>{errorMessage}</p> : null}
      </div>
    );
  };
  
  export default FormField;