import React from 'react';
import List from '../common/List.js';
import { Col, Row } from 'react-bootstrap';
import '../common/Styles.css';

let ListAsset = [
    {
        "fname": "Palash",
        "lname": "Badjatya",
        "email": "palash.badjatya@yahoo.com",
        "company": "GIES Business School",
        "skill": "React & Data Visualization",
        "average": "98",
        "pic":"https://media-exp1.licdn.com/dms/image/C4E03AQFoqoc-C9hw7w/profile-displayphoto-shrink_800_800/0/1625681532614?e=1634774400&v=beta&t=DirBC7Fr7cexEGQoXJ8jK8rBGr7iz53_FR15DNM3veA",
    },
]

function ListContainer(props) {
    return (
        <React.Fragment>
            <Row>
                <Col style={{ width: "85%" }}>
                    <div>
                        <Col lg={4}>
                            {ListAsset.map(asset => renderVideo(asset))}
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
            <List ListAsset={asset} />
        </div>
    )
}

export default ListContainer;