import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import PartsList from "../components/PartsList";

const Shop = () => {
    return(
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col >
                <Col md={9}>
                    <BrandBar/>
                    <PartsList/>
                </Col >
            </Row>
        </Container>
    )
}

export default Shop;