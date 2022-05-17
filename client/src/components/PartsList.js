import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import PartItem from "./PartItem";
import { Row } from "react-bootstrap";

const PartsList = observer( () => {
    const {parts} = useContext(Context)

    return (
        <Row className="d-flex">
            {parts.parts.map(part => 
                <PartItem key={part.id} part={part}/>
            )}
        </Row>
    );
});

export default PartsList;