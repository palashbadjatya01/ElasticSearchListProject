import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../common/Styles.css';

function List(props) {
    let fname = props.ListAsset.fname
    let lname = props.ListAsset.lname
    let name = fname + " " +lname
    let email = props.ListAsset.email
    let company = props.ListAsset.company
    let skill = props.ListAsset.skill
    let average = props.ListAsset.average
    let pic = props.ListAsset.pic
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <img src={pic} alt="Picture" width="500" height="600"/> 
                </Col>
                <Col>
                    <h2>{name}</h2>
                    <p>Email: {email}</p>
                    <p>Company: {company}</p>
                    <p>Skill: {skill}</p>
                    <p>Average: {average} %</p>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default List;