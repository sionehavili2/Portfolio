import { useRef, useState} from "react";
import PostContactInfo from "../components/PostContactInfo";
import classes from "./Contact.module.css";

const Contact = () => 
{
  const [isEmphasizeWarning, setIsEmphasizeWarning] = useState(false);
  const [isPostDisplay, setIsPostDisplay] = useState(null);
  const [inputValidator, setInputValidator] = useState({
    firstNameInput: true,
    lastNameInput: true,
    emailInput: true,
    phoneNumberInput: true,
    contactReasonInput: true,
  });

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const contactReasonInput = useRef();

  const contactParagraph =
    "If you have any inquiries or would like to connect, don't hesitate to reach out through the convenient contact form below. Your feedback, questions, and collaboration proposals are not only welcomed but highly valued. Feel free to inquire, whether it be to address your queries or explore potential collaborative opportunities. Your interest in my work is truly appreciated, and I am excited about the prospect of meaningful discussions and collaborations that may arise. Thank you for considering and taking the time to connect with me!";
  const submitHandler = async (event) => 
  {
    event.preventDefault();

    // A. Check if all inputs are valid
    let isFnameValid = firstNameInput.current.value.trim().length > 0;
    let isLnameValid = lastNameInput.current.value.trim().length > 0;
    let isEmailValid = emailInput.current.value.trim().length > 0;
    let isPhoneNumberValid = phoneNumberInput.current.value.trim().length>0;
    let isContactReasonValid = contactReasonInput.current.value.trim().length>0;

    // B. Update InputValidator to give userfeedback
    setInputValidator({
      firstNameInput: isFnameValid,
      lastNameInput: isLnameValid,
      emailInput: isEmailValid,
      phoneNumberInput: isPhoneNumberValid,
      contactReasonInput: isContactReasonValid,
    });

    // C. Update Input ClassNames (to show user which inputs are invalid)
    classNameChangeHandler(firstNameInput);
    classNameChangeHandler(lastNameInput);
    classNameChangeHandler(emailInput);
    classNameChangeHandler(phoneNumberInput);
    classNameChangeHandler(contactReasonInput);

    //A. Emphasize Text if any input is already/still invalid
    if (!inputValidator.firstNameInput || !inputValidator.lastNameInput || !inputValidator.emailInput || !inputValidator.phoneNumberInput || !inputValidator.contactReasonInput) 
    {
      setIsEmphasizeWarning(true);
      setTimeout(() => {setIsEmphasizeWarning(false)}, 200);
    }

    //If all inputs are valid, post data    
    if(isFnameValid && isLnameValid && isEmailValid && isPhoneNumberValid && isContactReasonValid)
    {
      const contactData = 
      {
        firstName: firstNameInput.current.value.trim(),
        lastName: lastNameInput.current.value.trim(),
        email: emailInput.current.value.trim(),
        phone: phoneNumberInput.current.value.trim(),
        message: contactReasonInput.current.value.trim(),
        timestamp: new Date().toISOString(), // Include a timestamp if needed
      };
    
      const returnedResponse = await PostContactInfo({dataToPost: contactData});
      
      if(returnedResponse)
      {
        setIsPostDisplay("You have succesfully submitted your contact information. You will be contacted promptly. Thank you for your time and patience.");
        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        emailInput.current.value = "";
        phoneNumberInput.current.value = "";
        contactReasonInput.current.value = "";
      }
      else
      {
        setIsPostDisplay("Contact Submission FAILED. We apologize for the inconviencence. Please try again.");
      }
    }
    
  }

  const classNameChangeHandler = (inputRef) => { inputRef.current.className = inputRef.current.value.trim() <= 0 ? classes.invalidInput : classes.validInput};

  return (
    <div className={classes.mainContainer}>
      {isPostDisplay && (
        <div className={classes.submissionWinow}>
          <h3>{isPostDisplay}</h3>
          <button className={classes.button}
            onClick={() => {
              setIsPostDisplay(null);
            }}
          >
            Ok
          </button>
        </div>
      )}
      <div className={classes.titleContainer}>
        <h2>Contact Info</h2>
        <div className={classes.contactParagraph}> {contactParagraph}</div>
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={submitHandler}>
          <>
            {!inputValidator.firstNameInput && (
              <p
                className={
                  isEmphasizeWarning ? classes.growingText : classes.normalText
                }
              >
                First name cannot be blank
              </p>
            )}
          </>

          <div className={classes.formChildContainer}>
            <label classes={classes.label} htmlFor="fName">
              First Name
            </label>
            <input
              className={classes.input}
              id="fName"
              ref={firstNameInput}
              onBlur={() => classNameChangeHandler(firstNameInput)}
            />
          </div>

          <>
            {!inputValidator.lastNameInput && (
              <p
                className={
                  isEmphasizeWarning ? classes.growingText : classes.normalText
                }
              >
                Last name cannot be blank
              </p>
            )}
          </>

          <div className={classes.formChildContainer}>
            <label classes={classes.label} htmlFor="lName">
              Last Name
            </label>
            <input
              className={classes.input}
              id="lName"
              ref={lastNameInput}
              onBlur={() => classNameChangeHandler(lastNameInput)}
            />
          </div>

          <>
            {!inputValidator.emailInput && (
              <p
                className={
                  isEmphasizeWarning ? classes.growingText : classes.normalText
                }
              >
                Email cannot be blank
              </p>
            )}
          </>
          <div className={classes.formChildContainer}>
            <label classes={classes.label} htmlFor="email">
              {" "}
              Email Address{" "}
            </label>
            <input
              className={classes.input}
              id="email"
              type="email"
              ref={emailInput}
              onBlur={() => classNameChangeHandler(emailInput)}
            />
          </div>

          <>
            {!inputValidator.phoneNumberInput && (
              <p
                className={
                  isEmphasizeWarning ? classes.growingText : classes.normalText
                }
              >
                Phone Number cannot be blank
              </p>
            )}
          </>
          <div className={classes.formChildContainer}>
            <label classes={classes.label} htmlFor="phoneNumber">
              {" "}
              Phone Number{" "}
            </label>
            <input
              className={classes.input}
              id="phoneNumber"
              type="tel"
              ref={phoneNumberInput}
              onBlur={() => classNameChangeHandler(phoneNumberInput)}
            />
          </div>

          <>
            {" "}
            {!inputValidator.contactReasonInput && (
              <p
                className={
                  isEmphasizeWarning ? classes.growingText : classes.normalText
                }
              >
                Contact Reason cannot be blank
              </p>
            )}
          </>
          <div className={classes.formChildContainer + " " + classes.reasonContainer}>
            <label classes={classes.label} htmlFor="contactReason">
              Reason for Contact
            </label>
            <textarea
              className={classes.input + " " + classes.textArea}
              id="contactReason"
              ref={contactReasonInput}
              onBlur={() => classNameChangeHandler(contactReasonInput)}
              rows="4"
              cols="50"
            />
          </div>

          <button className={classes.button} type="submit">
            Submit Contact Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
