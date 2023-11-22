// import React, { useState, useEffect } from "react";

const products  = [
    {
        id: '1',
        name: 'Adornos',
        price: 350,
        category: 'decoracion',
        img: 'https://www.haydetodo.com.uy/content/images/thumbs/0013884_adorno-buda-125125cm_600.jpeg',
        stock: 13,
        description: 'Descripcion del buda'
    },
    {
        id: '2',
        name: 'Inciensos',
        price: 150,
        category: 'saumos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_972830-MLU50765182948_072022-O.webp',
        stock: 30,
        description: 'Descripcion de inciensos'
    },
    {
        id: '3',
        name: 'Velas',
        price: 50,
        category: 'velas',
        img: 'https://m.media-amazon.com/images/I/61Cp5mr5eyL._AC_SL1200_.jpg',
        stock: 60,
        description: 'Descripcion de las velas'
    },
  ]
  
  export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
  }
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
  }


export default getProductsByCategory;