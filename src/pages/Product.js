import {useContext, useEffect, useState} from "react";
import {Image, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Context} from "../index";

const Product = () => {
    const {products} = useContext(Context)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        setProduct(products.data.find(product => product.id.toString() === id))
        setLoading(false)
    }, [])

    return (<div className='product'>
        {loading ? <Spinner/> : <>
            <div className="img_container">
                <Image className="dimmed-img img-page-rectangle"
                       src={require('../images/products/' + product.id + '.jpg')}></Image>
                <div className="square"></div>
                <div className="product_name display-3 text-white">{product.name}</div>
            </div>
            <div className="container">
                <div className="product_description">{product.description}</div>
            </div>
        </>}
    </div>);
};

export default Product;
