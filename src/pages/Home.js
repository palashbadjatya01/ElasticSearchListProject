import React from 'react'
import VideoContainer from '../component/VideoPlayer/VideoContainer.js';
import {Col, Row} from 'react-bootstrap';

function Home() {
    return (
        <React.Fragment>
            <div  style={{ padding: "20"}}>
                <Row>
                    <Col sm={12}>
                        <VideoContainer containerTitle="My Assets" />
                    </Col>
                </Row>
            </div>
        </React.Fragment>)
}

export default Home;
