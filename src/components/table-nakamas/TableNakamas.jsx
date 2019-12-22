import React, { Component } from 'react';
import { Nakamas } from './../../utils/mock-data';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import './TableNakamas.css';

/**
 * TableNakamas
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {*} Nakamas
 * 
 */
class TableNakamas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nakamas,
        }
    }

    /* Alive */ 

    getAlive = alive => alive ? 'Si' : 'No';
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
                    <Col sm="12">
                        <Table>
                            <thead>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>¿Vivo?</th>
                                <th>Fruta del Diablo</th>
                                <th>Matar/Revivir</th>
                                <th>Dar/Quitar</th>
                            </thead>
                            <tbody>
                                {
                                    this.state.Nakamas.map( elm => (
                                        <tr key={ elm.id }>
                                            <td>{ elm.id }</td>
                                            <td>{ elm.name }</td>
                                            <td>{ elm.age }</td>
                                            <td>{ this.getAlive( elm.alive ) }</td>
                                            <td>{ this.getAkumanomi( elm.akumanomi ) }</td>
                                            <td>
                                                <Button color={ this.getAliveButtonType( elm.alive ) } onClick={ this.handlerToggleAlive( elm ) } >
                                                    { this.getAction(elm.alive) }
                                                </Button>
                                            </td>
                                            <td>
                                                <Button color={ this.getAkumanomiTypeButton( elm.akumanomi ) } onClick={ this.handlerToggleAkumanomi( elm ) } >
                                                    { this.getAkumanomiAction(elm.akumanomi) }
                                                </Button>
                                            </td>
                                        </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TableNakamas;