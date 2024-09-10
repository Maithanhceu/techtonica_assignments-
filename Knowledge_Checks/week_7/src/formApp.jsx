import { useRef } from "react";
//documentation: https://www.youtube.com/watch?v=t2ypzz6gJm0
//documentation for forms: https://dev.to/sobhandash/react-forms-and-useref-hook-4p1l
// what is useRef: useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const FormApp = (props) => {
  const userName = useRef();
  const userEmail = useRef();
  const userOrderNum = useRef();
  const reasonForReturn = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    //get user data 
    const allUserInfo = {
        name: userName.current.value,
        email: userEmail.current.value,
        orderNumber: userOrderNum.current.value,
        reason: reasonForReturn.current.value
      
    };

    props.newSubmit(allUserInfo);
  };

  return (
    // 
    <form onSubmit={handleSubmit}>
      <h2>Please be specific in your reasons for returning your item</h2>

      <label>Name*:</label>
      <input type="text" required placeholder="Name" ref = {userName} />

      <label>Email*:</label>
      <input type="email" required placeholder="Email" ref = {userEmail} />

      <label>Order Number:</label>
      <input
        type="number"
        required
        min="0"
        placeholder="Please Enter the Number of your ticket"
        ref = {userOrderNum}
      />

      <label>Reason for Return: </label>
      <textarea name="reason" required ref ={reasonForReturn} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormApp;
