// Pure React Stuff
import React, {Component} from 'react';
// Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
// Spicy components and design assets
import './HomeScreen.css';
import MafiaHomeLogo from './../../images/MafiaHomeLogo.png'; 

class Home extends Component{

  render() {
    return (
      <Card bg="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={MafiaHomeLogo} />
          
          <Card.Body>
            <Accordion>

              <Card border="dark" bg="secondary">
                <Accordion.Toggle as={Button} variant="secondary" eventKey="0" block>
                  HOST
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="Home-body">
                    <Form>
                      <Form.Group controlId="formPlayerName">
                        <Form.Control type='text' placeholder="Enter Player Name"/>
                      </Form.Group>
                      <Form.Group controlId="formNumPlayers">
                        <Form.Control type='text' placeholder="Enter Number of Players"/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Confirm
                      </Button>
                    </Form>
                  </div>
                </Accordion.Collapse>
              </Card>

              <Card border="dark" bg="secondary">
                <Accordion.Toggle as={Button} variant="secondary" eventKey="1" block>
                  JOIN
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <div className="Home-body">
                    <Form>
                      <Form.Group controlId="formPlayerName">
                        <Form.Control type='text' placeholder="Enter Player Name"/>
                      </Form.Group>
                      <Form.Group controlId="formNumPlayers">
                        <Form.Control type='text' placeholder="Enter Room ID"/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Confirm
                      </Button>
                    </Form>
                  </div>
                </Accordion.Collapse>
              </Card>
              
            </Accordion>
          </Card.Body>

      </Card>
    );
  }
}
export default Home;