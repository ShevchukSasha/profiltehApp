import React, {useContext, useEffect, useState} from 'react';
import {Image, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Context} from "../index";

const ProductionProduct = () => {
    const {production} = useContext(Context)
    const [productionItem, setProductionItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        setProductionItem(production.data.find(production => production.id.toString() === id))
        setLoading(false)
    }, [])

    return (<div className='product'>
        {loading ? <Spinner/> : <>
            <div className="img_container">
                <Image className="dimmed-img img-page-rectangle"
                       src={require('../images/production/' + productionItem.id + '.jpg')}></Image>
                <div className="square"></div>
                <div className="product_name display-3 text-white">{productionItem.name}</div>
            </div>
            <div className="container">
                <div className="product_description">{productionItem.description}</div>
            </div>
        </>}
    </div>);
};

export default ProductionProduct;