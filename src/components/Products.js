import React from 'react'
import {connect} from 'react-redux';
import {getCategoryItems} from '../store/products';
function Products(props) {
    return (
        <div>
            <ul>
            {props.activeProducts.map(element=>{
                return <li onClick={()=>{getCategoryItems(element.category)}}>{element.name} {element.price}</li>
            })}
            </ul>
        </div>
    )
}
function mapStateToProps(state){
    return state.products;
}
const mapDispatchToProps = {
    getCategoryItems,
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)
