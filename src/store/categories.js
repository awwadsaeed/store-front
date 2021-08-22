const initialState ={
    categories:[{name:'electronics',description:'varies from PCs to laptops'},{name:'food',description:'mostly fruits and vegetables'}],
    activeCategory:{name:'electronics',description:'varies from PCs to laptops'},
}
/*{
    name,
    discreption,
}*/

export default function categoriesReducer(state=initialState,action){
    const {payload,type} = action;
    switch(type){
        case 'CHANGE_ACTIVE':
            let modified={};
            console.log('called');
            state.categories.forEach(item=>{
                if(item.name === payload){
                    modified=item;
                }
            });
            return {
                categories:state.categories,
                activeCategory:modified
            };
        default:
            return state;
    }
}


export function changeActive(name){
    return {
        type:'CHANGE_ACTIVE',
        payload:name
    }
}


