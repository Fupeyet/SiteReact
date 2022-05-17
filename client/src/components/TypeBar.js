import React, { useContext }  from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {parts} = useContext(Context)
    return (
        <ListGroup>
            {parts.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}} 
                    active={type.id === parts.selectedType.id} 
                    onClick={() => parts.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
            
        </ListGroup>
    );
});


export default TypeBar;