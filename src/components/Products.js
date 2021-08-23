import React from 'react'
import { connect } from 'react-redux';
import { getCategoryItems } from '../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { addToCart } from '../store/cart';
import { CardActionArea,CardActions } from '@material-ui/core';
import {reduceInventory} from '../store/products';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
function Products(props) {
    const classes = useStyles();


    function handleClick(element){
        props.addToCart(element);
        props.reduceInventory(element);
        props.getCategoryItems(props.category.name);

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {props.products.activeProducts.map(element => {
                return <Card className={classes.root} style={{ display: "inline-block", marginLeft: '5px', width: '20%', height: '350px', }}>
                    <CardMedia
                        style={{ height: '200px' }}
                        className={classes.media}
                        image={element.image}
                        title="Contemplative Reptile"
                    />
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {element.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {element.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={()=>{handleClick(element)}}>
                            Add To Cart
                        </Button>
                        <Button size="small" color="primary">
                            View Details
                        </Button>
                    </CardActions>
                </Card>

            })}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        category:state.categories.activeCategory,
        products: state.products,
        cartProducts: state.cart
    };
}
const mapDispatchToProps = {
    getCategoryItems,
    addToCart,
    reduceInventory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)






















// export default function MediaCard() {


//     return (
//         <Card className={classes.root}>
//             <CardActionArea>
                // <CardMedia
                //     className={classes.media}
                //     image="/static/images/cards/contemplative-reptile.jpg"
                //     title="Contemplative Reptile"
                // />

//             </CardActionArea>
//         </Card>
//     );
// }
