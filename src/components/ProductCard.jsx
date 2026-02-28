import { motion } from "framer-motion";

function ProductCard({product}){

return(

<motion.div
className="card"
whileHover={{ scale:1.05 }}
initial={{ opacity:0,y:40 }}
animate={{ opacity:1,y:0 }}
transition={{ duration:0.4 }}
>

<img
src={product.thumbnail}
width="100%"
/>

<h3>{product.title}</h3>

<p>₹ {product.price}</p>

{product.discountPercentage > 10 && (

<span
style={{
color:"#ff7a00",
fontWeight:"bold"
}}
>
🔥 Price Drop
</span>

)}

</motion.div>

);

}

export default ProductCard;