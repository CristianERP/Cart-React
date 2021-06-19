import React, { useContext, useEffect, useState} from 'react';
import data from './shared/data'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [products, setProducts] = useState(data);

    useEffect(() =>{
      
    })

    const priceTotal = () =>{
        let prices = products.map(product => product.price * product.amount).reduce((acu, curr) => acu+curr, 0);
        return prices.toFixed(2)
      }

    const amountTotal = () =>{
        let amounts = products.map(product => product.amount).reduce((acu, curr) => acu+curr, 0);
        return amounts
    }

    const moreAmount = (id) =>{
        console.log('click on more')
        let newArr = products.map(product => {
          if(id === product.id){
            product.amount += 1;
            return product
          }
          return product
        })
        setProducts(newArr);
    }
    
    const lessAmount = (id) =>{
        
        let newArr = products.map(product => {
          if(id === product.id){
            product.amount -= 1;
            return product   
          }
          return product
        }).filter(product => product.amount > 0)
        setProducts(newArr);
    }
    
    const removeItem = (id) =>{
        let newArr = products.filter(product => product.id !== id);
        setProducts(newArr);    
      }

    return(
        <AppContext.Provider
        value={{
            products,
            priceTotal,
            amountTotal,
            moreAmount,
            lessAmount,
            removeItem
        }} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};