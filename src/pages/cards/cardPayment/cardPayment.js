import React,{useState} from "react";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardPayment.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import validateCard from "./validateCard";


const CardPayment = () => {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardType: '',
    cardExpiration: '',
    cardSecurityCode: '',
    cardPostalCode: '',
    focus: ''
})

const [errors, setErrors] = useState({})

const handleFocus = (e) => {
    setValues({ 
        ...values,
        focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
    });
}

const handleChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
}

const handleSubmit = e => {
    e.preventDefault()
    setErrors(validateCard(values))

};


  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          </div>
          <h5>Add new card</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Row>
                <Col sm={6}>
                  <div>
                    <label style={{marginBottom:'0px'}} className='form-label'>Card Owner</label>
                    <label className='form-label2'>Enter the name on the Card</label>
                  </div>
                </Col>
                <Col sm={6}>
                  <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col sm={6}>
                  <div>
                    <label style={{marginBottom:'0px'}} className='form-label'>Card Number</label>
                    <label className='form-label2'>Enter the 16-digit card number on the card</label>
                  </div>
                </Col>
                <Col sm={6}>
                  <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                  />
                </Col>
              </Row>
            </Form.Group>
            
            <Row>
              <Col sm={8}>
                <Form.Group>
                  <Row>
                    <Col sm={9}>
                      <div>
                        <label style={{marginBottom:'0px'}} className='form-label'>Expiry date</label>
                        <label className='form-label2'>Enter the expration date of the card</label>
                      </div>
                    </Col>
                    <Col sm={3} >
                      <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiry"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group>
                <Row>
                    <Col sm={6}>
                      <div>
                        <label style={{marginBottom:'0px'}} className='form-label'>CVV2</label>
                        <label className='form-label2'>Security code</label>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Security Code"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                    </Col>
                  </Row>
                  
                </Form.Group>
              </Col>
            </Row>
                <Form.Group>
                <Row>
                    <Col sm={6}>
                      <div>
                        <label style={{marginBottom:'0px'}} className='form-label'>Postal Code</label>
                        <label className='form-label2'>Enter your Postal Code</label>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                      type="text"
                      id="cardPostalCode"
                      data-testid="cardPostalCode"
                      name="cardPostalCode"
                      placeholder="Postal Code"
                      value={values.cardPostalCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cpostal}
                      />
                    </Col>
                  </Row>
                </Form.Group>

            <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Validate
            </Button>
          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardPayment;