import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";
import { useContext } from "react";

const BrandBar = observer(() => {
    const {parts} = useContext(Context)
    return (
        <Row className="d-flex">
            {parts.brands.map(brand =>
                <Card 
                    style={{ width: '10rem', cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => parts.setSelectedBrand(brand)}
                    border={brand.id === parts.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;