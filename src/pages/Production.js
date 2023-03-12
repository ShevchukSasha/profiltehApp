import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {PRODUCTION_ROUTE, PRODUCTS_ROUTE} from "../utils/consts";

const Production = () => {
    const navigate = useNavigate();
    const {production} = useContext(Context);

    return (<div className='products container'>
        {production.types.map(type => <div className="product_type" id={type.id} key={type.id}>
            <div className="product_type_name display-4 text-center">{type.name}</div>
            <Row>
                {production.data.filter(product => product.type === type.id).map(product => <Col
                    className="product_item" id={product.id} key={product.id}>
                    <Card style={{width: '18rem'}} className="cursor_pointer card-hover"
                          onClick={() => navigate(PRODUCTION_ROUTE + '/' + product.id)}>
                        <Card.Img className="img-card-square" variant="top"
                                  src={require('../images/production/' + product.id + '.jpg')}></Card.Img>
                        <Card.Body>
                            <Card.Title className="text-center">{product.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>

        </div>)}

    </div>);
};

export default Production;