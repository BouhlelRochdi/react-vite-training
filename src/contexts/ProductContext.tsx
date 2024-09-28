// import React, { createContext, useState } from 'react';

// // 1. Créer le contexte
// const ProductContext = createContext(null);

// // 2. Créer le fournisseur de contexte
// const ProductProvider = ({ children }: any) => {
//   // 3. État local pour stocker les produits
//   const [products, setProducts] = useState<any>([]);

//   // 4. Fonction pour ajouter un produit
//   const addProduct = (product: any) => {
//     setProducts([...products, product]);
//   };

//   // 5. Valeurs fournies par le contexte
//   const value = {
//     products,
//     addProduct
//   };

//   return (
//     <ProductContext.Provider value={value as any}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export { ProductContext, ProductProvider };

// ProductContext.js
import { createContext, useState } from 'react';

interface ProductContextType {
    products: any[];
    addProduct: (product: any) => void;
    getProducts: () => any[];
}


const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: any }) => {
    const [products, setProducts] = useState<any>([]);

    const addProduct = (product: any) => {
        setProducts((prevProducts: any) => [...prevProducts, product]);
    };

    const getProducts = () => {
        return products;
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, getProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider, ProductContext };
