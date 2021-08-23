const initialState = {
    products: [
        { name: 'tv', description: 'something to watch stuff', category: 'electronics', inventoryCount: 10,price:100,image:'https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'  },
        { name: 'pc', description: 'something to do stuff with', category: 'electronics', inventoryCount: 10,price:200,image:'https://images.unsplash.com/photo-1548874469-c32f9c95c564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'  },
        { name: 'orange', description: 'its a food for the love of god', category: 'food', inventoryCount: 10,price:300, image:'https://images.unsplash.com/photo-1547514701-42782101795e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { name: 'apple', description: 'its a food for the love of god', category: 'food', inventoryCount: 10,price:400,image:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' }
    ],
    activeProducts: []
}

export default function getItems(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_ACTIVE':
            const modified = state.products.filter(item => {
                return item.category === payload
            })
            return {
                products: state.products,
                activeProducts: modified
            }
        case 'DECREASE_INVENTORY':
            const afterAdd = state.products.map((element)=>{
                if(element.name == payload.name&&element.inventoryCount>0){
                    element.inventoryCount=element.inventoryCount-1;
                }
                if(element.inventoryCount===0){
                    element.description='out of stock'
                }
                return element;
            });
            console.log('called in products');
            return {
                products:afterAdd,
                activeProducts:state.activeProducts
            }

        default:
            return state;
    }

}


export function getCategoryItems(name) {
    return {
        type: 'CHANGE_ACTIVE',
        payload: name
    }
}
export function reduceInventory(product){
    return{
        type:'DECREASE_INVENTORY',
        payload:product
    }
}