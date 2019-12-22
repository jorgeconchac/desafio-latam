import React, { Component } from 'react';
import { Nakamas } from './../../utils/mock-data';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './CardNakamas.css';

/**
 * CardNakamas
 * @version v1.0.0
 * 
 * @param {*} props 
 */
class CardNakamas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nakamas
        }
    }

    /* Alive */ 

    getAlive = alive => alive ? 'Si' : 'No';
    getColorAlive = alive => alive ? 'light' : 'secondary';
    getAliveButtonType = alive => alive ? 'danger' : 'success';
    getAction = alive => alive ? 'Matar' : 'Revivir';

    handlerToggleAlive = ( nakama ) => {
        const a = this.state.Nakamas.findIndex( e => e.id === nakama.id );
        return ( event ) => {
            const nA = this.state.Nakamas;
            nA[a].alive = !nA[a].alive;
            this.setState({
                nakama : nA,
            });
        }
    } 

    /* Akuma no mi */ 

    getAkumanomi = akumanomi => akumanomi ? 'Si' : 'No';
    getAkumanomiTypeButton = akumanomi => akumanomi ? 'danger' : 'success';
    getAkumanomiAction = akumanomi => akumanomi ? 'Quitar' : 'Dar';
    
    handlerToggleAkumanomi = ( nakama ) => {
        const ak = this.state.Nakamas.findIndex( e => e.id === nakama.id );
        return ( event ) => {
            const nAk = this.state.Nakamas;
            nAk[ak].akumanomi = !nAk[ak].akumanomi;
            this.setState({
                nakama : nAk, 
            });
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    { this.state.Nakamas.map( elm => (
                            <Col xs="12" sm="6" md="4" lg="3" className="mb-3">
                                <Card color={ this.getColorAlive( elm.alive ) } key={ elm.id } >
                                    <CardImg src="https://via.placeholder.com/150"/>
                                    <CardBody>
                                        <CardTitle> ID : { elm.id } </CardTitle>
                                        <CardSubtitle> Nombre : { elm.name } </CardSubtitle>
                                        <CardText>
                                            <p>¿Vivo? : { this.getAlive( elm.alive ) }</p>
                                            <p>¿Fruta del Diablo? : { this.getAlive( elm.akumanomi ) }</p>
                                        </CardText>
                                        <div className="text-center">
                                            <Button className="mr-1" color={ this.getAliveButtonType( elm.alive ) } onClick={ this.handlerToggleAlive( elm ) } > { this.getAction( elm.alive ) } </Button>
                                            <Button color={ this.getAkumanomiTypeButton( elm.akumanomi ) } onClick={ this.handlerToggleAkumanomi( elm ) } > {this.getAkumanomiAction( elm.akumanomi )} </Button>
                                        </div>
                                    </CardBody>
                                </Card>  
                            </Col>                           
                        )
                      )
                    }
                </Row>
            </Container>
        );
    }
}

export default CardNakamas;