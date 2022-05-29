import { Box, CardContent, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './cardInfo.css';
import 'boxicons';

const CardInfo = (callback) => {

  const [values, setValues] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Address1: '',
    Address2: '',
    City:'',
    PostalCode: '',
    Phone:'',
    Card:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

const formValidation = () =>{
  let newErrors = {};

  if (!values.FirstName.trim()) {
    newErrors.FirstName = 'FirstName required';
  }
  if (!values.LastName.trim()) {
    newErrors.LastName = 'LastName required';
  }
  if (!values.Email) {
    newErrors.Email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
    newErrors.Email = 'Email address is invalid';
  }
  if (!values.Address1.trim()) {
    newErrors.Address1 = 'Address1 required';
  }
  if (!values.City.trim()) {
    newErrors.City = 'City required';
  }
  if (!values.PostalCode.trim()) {
    newErrors.PostalCode = 'PostalCode required';
  }
  if (!values.Phone) {
    newErrors.Phone = 'Phone Number is required';
    } else if (values.Phone.length !== 10 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.Phone)) {
    newErrors.Phone = 'Phone Number needs to be 10 characters or Invalid Phone';
  }
  if (!values.Card.trim()) {
    newErrors.Card = 'Card Owner required';
  }
  setErrors(newErrors)
}

  const handleSubmit = e => {
    e.preventDefault();
    formValidation();
    setIsSubmitting(true);
  };
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );
  

  return (
    <>
    <h1>Payments Card</h1>
    
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <div>
            <label className='form-label'>First Name</label>
            <label className='form-label2'>Enter your first name</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='FirstName'
            placeholder='Enter your First Name'
            value={values.FirstName}
            onChange={handleChange}
          />
          {errors.FirstName && <p>{errors.FirstName}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Last Name</label>
            <label className='form-label2'>Enter your last name</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='LastName'
            placeholder='Enter your Last Name'
            value={values.LastName}
            onChange={handleChange}
          />
          {errors.LastName && <p>{errors.LastName}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Email</label>
            <label className='form-label2'>Enter your Email</label>
          </div>
          <input
            className='form-input'
            type='Email'
            name='Email'
            placeholder='Enter your Email'
            value={values.Email}
            onChange={handleChange}
          />
          {errors.Email && <p>{errors.Email}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Address 1</label>
            <label className='form-label2'>Enter your Address 1</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='Address1'
            placeholder='Enter your Address1'
            value={values.Address1}
            onChange={handleChange}
          />
          {errors.Address1 && <p>{errors.Address1}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Address 2</label>
            <label className='form-label2'>Enter your Address 2</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='Address2'
            placeholder='Enter your Address2'
            value={values.Address2}
            onChange={handleChange}
          />
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>City</label>
            <label className='form-label2'>Enter your city</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='City'
            placeholder='Enter your City'
            value={values.City}
            onChange={handleChange}
          />
          {errors.City && <p>{errors.City}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Postal Code</label>
            <label className='form-label2'>Enter your Postal Code</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='PostalCode'
            placeholder='Enter your Postal Code'
            value={values.PostalCode}
            onChange={handleChange}
          />
          {errors.PostalCode && <p>{errors.PostalCode}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Phone Number</label>
            <label className='form-label2'>Enter your Phone Number</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='Phone'
            placeholder='Enter your Phone Number'
            value={values.Phone}
            onChange={handleChange}
          />
          {errors.Phone && <p>{errors.Phone}</p>}
        </div>

        <div className='form-inputs'>
          <div>
            <label className='form-label'>Card Owner</label>
            <label className='form-label2'>Enter your card owner</label>
          </div>
          <input
            className='form-input'
            type='text'
            name='Card'
            placeholder='Enter your Card Owner'
            value={values.Card}
            onChange={handleChange}
          />
          {errors.Card && <p>{errors.Card}</p>}
        </div>
      </form>
      <img className='form-img-2' src='cardCredit.png' alt=''/>
    </div>
    


    <div style={{display:'flex'}}>
      <CardContent className='card1'>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          STANDARD
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          1 More/ 1 Month
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          $4.9
        </Typography>
        <box-icon name='medal' color='white' rotate='180' ></box-icon>      
      </CardContent>

      <CardContent className='card2'>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          PREMIUM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          1 More/ 3 Months
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          $13.9
        </Typography>
        <box-icon name='diamond' color='white' ></box-icon>
      </CardContent>

      <CardContent className='card3'>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          SUPER IDOL
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          1 More/ 12 Months
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          $56.9
        </Typography>
        <box-icon name='crown' type='solid' color='white' ></box-icon>      
      </CardContent>
    </div>
    
    <button className='form-input-btn' type='submit'>
          Next Step...
    </button>
    </>
    
  );
};

export default CardInfo;