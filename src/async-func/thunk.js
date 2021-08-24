import { CompassCalibrationOutlined } from "@material-ui/icons";

// Thunk will give us the ability to return a function that will have access to dispach
export const getRemoteData = () => {
    return async (dispatch) => {
        const raw = await fetch('https://api-js401.herokuapp.com/api/v1/products');
        const results = await raw.json();
        console.log(results);
      dispatch(loadProducts(results.results));
    };
  };
  
  export const loadProducts = (payload) => {
    return {
      type: 'LOAD_PRODUCTS',
      payload,
    };
  };
