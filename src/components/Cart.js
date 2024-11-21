import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const products = useSelector(state=> state.cart)

    const dispatch = useDispatch();
    const removeToCart=(id)=>{
            dispatch(remove(id));
    }


    const cards= products.map(product=>(
        <div className='col-md-3' style={{marginBottom:"10px"}}> 
         <Card style={{ width: '18rem', height: 'h-100' }} key={product.id} >
            <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
            </div>

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.price}
        </Card.Text>
       
      </Card.Body>
      <Card.Footer style={{background:'white'}}>
      <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
      </Card.Footer>
    </Card>
        </div>
    ) )
  return (
    <>
    <div className='row'>
        {cards}
    </div>
    </>
  )
}

export default Cart