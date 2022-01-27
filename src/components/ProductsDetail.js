import { useLocation } from "react-router-dom";
import styles from './modules/styles.module.css'


const ProductsDetail = () => {   
    
    const {state} = useLocation();
    console.log(state)
    console.log(state.rating.rate)


    return(
        <div className={styles.flexContainerCardAbout}> 
            <li> Rate:{state.rating.rate} </li>
            <li> Count:{state.rating.count} </li>  
                        
            <h2> Price: $/.{state.price} </h2>
            <h3> Description: {state.description} </h3>
            <h4> Category: {state.category} </h4> 
            <h1 className={styles.flexContainerBottomTitleAbout}>{state.title}</h1>        
            <p> </p>
            <img className={styles.flexContainerImage} src={state.image} alt=""/>
            
        </div>
        
        // <div className={styles.flexContainerMain}>
        //     <h1>hola</h1>
        //     {users.map(({id, title})=>
        //         <ProductCard key={id} title={title}></ProductCard>
        //     )}
        // </div>
    );

 }

export default ProductsDetail;