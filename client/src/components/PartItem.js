import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../assets/star.png'
import PartsList from "./PartsList";

const PartItem = ({part}) => {
    return (
        <Col md={3} className="mt-3">
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={part.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>BorgWarner</div>
                    <div className="d-flex align-items-center">
                        <div>{part.rating}</div>
                        <Image width={14} height={14} src={star}/>
                    </div>
                </div>
                <div>{part.name}</div>
            </Card>
        </Col>
    );
};

export default PartItem;