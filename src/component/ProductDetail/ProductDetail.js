import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {productId} = useParams();
  const [product, setproduct] = useState([]);
    
      //   const products = data.find((getProduct) => getProduct.id === productId);
      //   console.log(data);
      // });
      useEffect(() => {
        fetch('products.json')
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, []);
  

  return (
    <div>
      <h1>This is Products detail of : {productId}</h1>
    </div>
  );
};

export default ProductDetail;