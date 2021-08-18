import React from 'react'
import ListContainer from '../component/ListContainer/ListContainer.js';
import {Col, Row} from 'react-bootstrap';

function Home() {
    return (
        <React.Fragment>
            <div  style={{ padding: "20"}}>
                <Row>
                    <Col sm={12}>
                        <ListContainer/>
                    </Col>
                </Row>
            </div>
        </React.Fragment>)
}

export default Home;
