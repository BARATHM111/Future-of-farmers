import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';
import {Row , Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating'; 
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProduct] = useState({}) // Change from Product to product

    const {id : productId} = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${productId}`)
            setProduct(data); 
        }
        
        fetchProduct(); 
    }, [productId] );
    
    return (
        <>
            <Link className='btn btn-light mu-3' to='/'>Go back</Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>Price :${product.price}</ListGroup.Item>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>${product.countInStock > 0 ? 'In stock' : 'out of stock' }</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className='btn-black'
                                    type ='button'
                                    disabled={product.countInStock === 0}
                                >
                                    Add to cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
