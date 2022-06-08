import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from './stepCard'
import CardInfo from '../cardInfo/cardInfo';
import CardPayment from '../cardPayment/cardPayment';
import CardSuccess from '../cardSuccess/cardSuccess';

const steps = [
  { component: <CardInfo /> },
  { component: <CardPayment /> },
  { component: <CardSuccess /> },
]

// custom styles
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }

const Step = () => (
  <div className='container'>
    <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
  </div>
)

export default Step;