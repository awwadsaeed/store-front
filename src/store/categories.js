const initialState ={
    categories:[{name:'electronics',description:'electornic stuff'},{name:'food',description:'food stuff'}],
    activeCategory:{},
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


