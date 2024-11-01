import s from './Card.module.css';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 

import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
 
export function Cards({img, name, price, description, count}) { 
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return ( 

    
<>
    <Card style={{ width: '400px' }}> 
      <Card.Img variant="top" src={img} className={s.img} /> 
      <Card.Body> 
        <Card.Title>{name}</Card.Title> 
        <Card.Text> 
            {description} 
            <br /> 
            <div className={s.qwe}>
                <div className={s.prise}>{price} руб.</div> 
                Кол-во: {count}
            </div>
            
        </Card.Text> 
        {
            count>0?(
            <Button variant="primary">В корзину</Button> 
            ): (
            <Button variant="primary" onClick={handleShow} >Заказать</Button> 
        )
        }
        
      </Card.Body> 
    </Card> 
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="email"
                placeholder="8 (999) 999-99-99"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

</>

  ); 
}