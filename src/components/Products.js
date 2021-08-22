import React from 'react'
import { connect } from 'react-redux';
import { getCategoryItems } from '../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    return (
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            {props.activeProducts.map(element=>{
            return <Card className={classes.root} style={{display:"inline-block",marginLeft:'5px',width:'20%',height:'350px',}}>
                  <CardMedia
                  style={{height:'200px'}}
                    className={classes.media}
                    image={element.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {element.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {element.description}
                    </Typography>
                </CardContent>
            </Card>

            })}
        </div>
    )
}
function mapStateToProps(state) {
    return state.products;
}
const mapDispatchToProps = {
    getCategoryItems,
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
