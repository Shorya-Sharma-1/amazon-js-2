import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'
import { loadProducts, loadProductsFetch } from '../data/products.js'
import { loadCart} from '../data/carts.js'
//import '../data/backend-practice.js'
//import '../data/cart-class.js'

async function loadPage(){
    try{
        //throw'error1'
        
        await loadProductsFetch();

        const value = await new Promise ((resolve)=>{
            loadCart(()=>{
            resolve();
            });
        });
    } catch {
        console.log('eror. Try again')
    }
    
    renderPaymentSummary();
    renderOrderSummary();
}

loadPage();


/*
Promise.all([
  loadProductsFetch(),
  new Promise ((resolve)=>{
     loadCart(()=>{
        resolve('value 2');
     });
   })
]).then((values)=>{
    console.log(values);
   renderPaymentSummary();
    renderOrderSummary();
})
*/


/*
new Promise ((resolve) => {
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    return new Promise ((resolve)=>{
        loadCart(()=>{
           resolve();
        });
    });
}).then(()=>{
   renderPaymentSummary();
    renderOrderSummary();
})
*/

/*

loadProducts(()=>{
    loadCart(()=>{
        renderPaymentSummary();
        renderOrderSummary() ;
    });
});
    
*/