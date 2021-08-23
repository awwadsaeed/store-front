import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeActive } from '../store/categories';
import { getCategoryItems } from '../store/products';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
function Categories(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(()=>{
        props.changeActive("electronics");
    },[])
    
    return (<>
        <Paper className={classes.root}>
            <Tabs                
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
            {props.categories.map((element)=>{
                return <Tab key={element.name} label={element.name} onClick={() => { props.changeActive(element.name) }} />
            })}
            </Tabs>
        </Paper>
        <div style={{marginLeft:'30%'}}>
            <div style={{fontSize:'38px',marginLeft:'20%'}}>{props.activeCategory.name}</div>
            <div style={{fontSize:'24px',marginLeft:'17%'}}>{props.activeCategory.description}</div>
        </div>
    </>
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