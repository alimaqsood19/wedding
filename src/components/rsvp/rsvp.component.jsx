import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import './rsvp.styles.scss'

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Please enter your full name.';
  } 

  if (!values.rsvp) {
    errors.rsvp = 'Please RSVP!';
  } 

  if (values.rsvp === 'true' && !values.mealType) {
    errors.mealType = 'Please select a meal type.';
  } 

  return errors;
};

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: '',
      rsvp: '',
      mealType: '',
    },
    validate,
    onSubmit: async (values) => {
        try {
          await axios.post('https://xho7utpkuf.execute-api.us-east-1.amazonaws.com/prod', values);
          formik.resetForm();
          setSubmitted(true);
        } catch (error) {
          setSubmitted(false);
        }
    },
    validateOnChange: false,
    validateOnBlur: false
  });

  if (submitted) {
    return (
    <div className='information-body'>
      Thank you! Add another guest?
      <button className='submit-again' onClick={() => setSubmitted(false)}>Yes</button>
    </div>
    )
  }
  return (
    <>
    <h1><strong>RSVP</strong></h1>
    <form onSubmit={formik.handleSubmit}>
      <div className='input-box'>
      <label htmlFor='firstName'>Full Name</label>
      <input
        id='fullName'
        name='fullName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      {formik.errors.fullName ? <div className='error'>{formik.errors.fullName}</div> : null}
      </div>
      <div className='input-box'>
      <label htmlFor='rsvp'>RSVP</label>
      <select
        name="rsvp"
        value={formik.values.rsvp}
        onChange={formik.handleChange}
      >
        <option value="" disabled>Are you able to attend</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {formik.errors.rsvp ? <div className='error'>{formik.errors.rsvp}</div> : null}
      </div>
      {formik.values.rsvp === 'true' && (
        <div className='input-box'>
      <label htmlFor='mealType'>Meal Type</label>
      <select
        name="mealType"
        value={formik.values.mealType}
        onChange={formik.handleChange}
      >
        <option value="" disabled>Select a meal</option>
        <option value="fish">Seabass</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="chicken">Chicken Supreme</option>
        <option value="kids">Kids Meal</option>
      </select>
      {formik.errors.mealType ? <div className='error'>{formik.errors.mealType}</div> : null}
      </div>
      )}
      <button type='submit' disabled={formik.isSubmitting}>Submit</button>
      <div style={{marginTop: '20px'}}>You can add more guests on the next page.</div>
    </form>
    </>
  );
};

export default RSVPForm;
