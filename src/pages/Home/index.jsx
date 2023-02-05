import React, {useEffect, useState ,useRef} from 'react';
import { Container , Row , Col , InputGroup , FormControl } from 'react-bootstrap';
import { useThemeHook } from '../../globalComponents/ThemeProvider';

import {BiSearch } from 'react-icons/bi';
import {BsCartPlus } from 'react-icons/bs';
import SearchFilter from 'react-filter-search';
import "./style.scss";

const index = () => {

const [theme] = useThemeHook();
const [searchInput , setSearchInput] = useState('');
const [productData , setProductData] = useState([]);
const [cart , setCart] = useState([]);
const [categoriesData , setCategoriesData] = useState([]);
const [Api , setApi] = useState('https://api.escuelajs.co/api/v1/products');







   async function fetchProducts() {
      const response = await fetch (Api)
                  .then(response => response.json())
                 setProductData( await response)
   }

            useEffect(() => {
      fetchProducts();
   }, []);

   async function fetchCategories() {
      const res = await fetch ('https://api.escuelajs.co/api/v1/categories/')
                  .then(res => res.json())
                   setCategoriesData( await res)
   }


   useEffect(() => {
      fetchCategories();
   }, []);







   const quits=useRef()

   const Quit = () => {
      quits.current.classList.add('d-none')
  }
  const Open = () => {
   quits.current.classList.toggle('d-none')
}





   return (

      <div style={{height:'100%' , width:'100%' , }} >
         <div className=" ">
      <div  ref={quits} className={ theme? 'zen bg-light-black border-bottom d-none container w-25 position-fixed end-0 top-0 bottom-0' :'zen bg-light border-bottom d-none container w-25 position-fixed end-0 top-0 bottom-0'}>
      <div className="d-flex justify-content-between align-items-center mt-3">
         <button className="btn btn btn-danger" onClick={Quit}>X</button>
      <h5 className='text-danger'>Cart</h5>
      </div>
      <div className=" mt-2">
      {cart.map((item , i) => (
      <div key={i}  className="mt-2" >
      <div className="card" >
      <img src={item.images[1]} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.description}</p>
      <p className="card-text">{item.price}</p>
      <button key={i}
      onClick={() => {
         if(cart.includes(item)){
         
            alert('Product removed from cart')
            setCart(cart.filter((cartItem) => cartItem.id !== item.id))

                        
         }else{
            
         }
      }
       }
      className="btn btn-danger">
         Remove</button>

      </div>
      </div>
      </div>

   ))}
      </div>


      </div>
    </div>

<div className="container">
   <button className={theme? 'text-light btn  position-fixed tops':'text-light-primary btn  position-fixed tops' }>
      <BsCartPlus size="2rem" onClick={Open}  />
   </button>
</div>


    
    <Container className="py-4">

<Row className="justify-content-center">


<Col lg={6} md={7} xl={4} xs={10} className="mb-3 mx-auto text-center">
<h1 className={theme? 'text-light my-5' : 'text-black my-5'}>Search Products</h1>
<InputGroup className="mb-3">
        <InputGroup.Text className={theme? 'bg-black text-dark-primary': 'bg-light text-light-primary' }>
   <BiSearch size="2rem" />
        </InputGroup.Text>
        <FormControl
          placeholder="Search Products"
          className={theme? 'bg-light-black text-dark-primary': 'bg-light text-light-primary' }
          value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
        />
      </InputGroup>
    <h2 className={theme? 'text-light' : 'text-black' }>{searchInput}</h2>

   </Col>
   <Col lg={6} md={7} xl={4} xs={10} className="mb-3 mx-auto mt-5 text-center">
<select name="" id="" className='form-select mt'>
   {
      categoriesData.map((item , i) => (
         <option key={i}
         onChange={
            (e) => {
               setApi(`https://api.escuelajs.co/api/v1/products/${e.target.value}`)
            }
         } 
          value={item.id}>{item.name}</option>
      ))
   }

</select>
</Col>
<SearchFilter
value={searchInput}
data={productData}
renderResults={results => (
   <Row className="justify-content-center">
   {results.map((item , i) => (
      <div key={i} className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
      <div className="card">
      <img src={item.images[1]} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.description}</p>
      <p className="card-text">{item.price}</p>
      <button key={i}
      onClick={() => {
         if(cart.includes(item)){
         
            alert('Product already added to cart')
                        
         }else{
            setCart([...cart , item])
            localStorage.setItem('cart' , JSON.stringify(cart))
            alert('Product added to cart')
         }
      }
       }
      className="btn btn-primary">
         <BsCartPlus size="2rem" />
         Add to Cart</button>

      </div>
      </div>
      </div>

   ))}





</Row>
)}
/>





</Row>


    </Container>

         
      </div>
   );
};

export default index;