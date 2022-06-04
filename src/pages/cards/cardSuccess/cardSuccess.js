import React from 'react'
import './cardSuccess.css'
import { Col, Row } from 'react-bootstrap'
const CardSuccess = () => {
  return (
    <div>
        <Row>
            <Col sm={6}>
                <div className='textSuccess'>
                    <h1>Payment Successfull</h1>
                    <label>Thank you for choosing REMO, your custom Reports will be generated within two business days</label>
                    <div>
                        <button>Again</button>
                    </div>
                </div>
            </Col>
            <Col sm={6}>
                <div>
                    <img className='imgSuccess' src='cardCredit.png' alt=''/>
                </div>
            </Col>
        </Row>


    </div>
  )
}

export default CardSuccess