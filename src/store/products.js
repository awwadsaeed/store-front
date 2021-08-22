const initialState = {
    products: [
        { name: 'tv', description: 'something to watch stuff', category: 'electronics', inventoryCount: 1,price:100,image:'https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'  },
        { name: 'pc', description: 'something to do stuff with', category: 'electronics', inventoryCount: 2,price:200,image:'https://images.unsplash.com/photo-1548874469-c32f9c95c564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'  },
        { name: 'orange', description: 'its a food for the love of god', category: 'food', inventoryCount: 3,price:300, image:'https://images.unsplash.com/photo-1547514701-42782101795e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { name: 'apple', description: 'its a food for the love of god', category: 'food', inventoryCount: 4,price:400,image:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' }
    ],
    activeProducts: [{ name: 'tv', description: 'something to watch stuff', category: 'electronics', inventoryCount: 1,price:100,image:'https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'  },
    { name: 'pc', description: 'something to do stuff with', category: 'electronics', inventoryCount: 2,price:200,image:'https://images.unsplash.com/photo-1548874469-c32f9c95c564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'  }]
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