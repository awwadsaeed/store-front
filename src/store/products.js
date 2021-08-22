const initialState = {
    products: [
        { name: 'tv', description: 'something to watch stuff', category: 'electronics', inventoryCount: 1,price:100  },
        { name: 'pc', description: 'something to stuff with', category: 'electronics', inventoryCount: 2,price:200  },
        { name: 'orange', description: 'its a food for the love of god', category: 'food', inventoryCount: 3,price:300 },
        { name: 'apple', description: 'its a food for the love of god', category: 'food', inventoryCount: 4,price:400 }
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