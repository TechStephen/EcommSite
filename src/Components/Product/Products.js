import React from 'react';
import Product from './Product'
import { Grid } from '@material-ui/core';

const productlist = [
    {id: 1, name: 'Shoes', description:'running shoes', price: 5.99, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg'},    
    {id: 2, name: 'Shoes2', description:'running shoes', price: 5.99, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg'},   
    {id: 3, name: 'Shoes3', description:'running shoes', price: 5.99, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg'},
    {id: 4, name: 'Shoes4', description:'running shoes', price: 5.99, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg'}   
];

function Products () {
    return(
        <>
            <main>
                <Grid container justify="center" spacing={4}>
                {productlist.map((product) => 
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                )}
                </Grid>
            </main>
        </>
    );
}


export default Products;