import React from 'react'
import { connect } from 'react-redux';
import { changeActive } from '../store/categories';
import { getCategoryItems } from '../store/products';
function Categories(props) {
    return (
        <div>
            {props.categories.map(element => {
                return <div key={element.name} onClick={() => { props.changeActive(element.name) }}>{element.name}</div>
            })}
            <div>{props.activeCategory.name}</div>
            <div>{props.activeCategory.description}</div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return state.categories;
}
const mapDispatchToProps = {
    changeActive,
    getCategoryItems
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

