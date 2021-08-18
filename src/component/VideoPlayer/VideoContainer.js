import React, { useRef, createRef } from 'react';
import SmallVideo from '../common/SmallVideo.js';
import { Col, Row, Button } from 'react-bootstrap';
import '../common/Styles.css';

function VideoContainer(props) {
    return (
        <React.Fragment>
            <div className="VideoPlayerHead">
                <h2 className="VideoPlayerTitle">{props.containerTitle}</h2>
            </div>
            <Row>
                <Col style={{ width: "85%" }}>
                    <div ref={videoContainerRef} className="VideoContainerVertical">
                        <Col lg={4} className="VideoContainerCol">
                            {kalturaAssets.map(asset => renderVideo(asset))}
                        </Col>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

function renderVideo(asset) {
    return (
        <div>
            <SmallVideo kalturaAsset={asset} />
        </div>
    )
}

export default VideoContainer;