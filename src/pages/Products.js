import React, {useContext, useEffect} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {PRODUCTION_ROUTE, PRODUCTS_ROUTE} from "../utils/consts";

const Products = () => {
    const navigate = useNavigate();
    const {products} = useContext(Context);
    let rowsCount = 0

    useEffect(() => {
        rowsCount = Math.ceil(products.data.length / 4)
    }, [])

    return (<div className='products container'>
        <Row>
            {products.data.map(product => <Col md={4}
                className="product_item" id={product.id}>
                <Card style={{width: '18rem'}} className="cursor_pointer card-hover"
                      onClick={() => navigate(PRODUCTS_ROUTE + '/' + product.id)}>
                    <Card.Img className="img-card-square" variant="top"
                              src={require('../images/products/' + product.id + '.jpg')}></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">{product.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>

    </div>);
};

export default Products;
