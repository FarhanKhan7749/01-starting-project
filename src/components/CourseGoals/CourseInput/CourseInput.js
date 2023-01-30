import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  // inline style
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <label style={{color: !isValid ? 'red':'black'}}>Course Goal</label>
  //       <input style={{
  //         borderColor: !isValid ? 'red':'#ccc',
  //         background: !isValid ? 'salmon':'transparent'
  //         }} type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit" style={{background:!isValid ? '#da4949':'#8b005d'}}>Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button className={`${!isValid ? 'invalid':''}`} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
