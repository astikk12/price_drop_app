import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { supabase } from "../utile/supabase";
import "../styles/theme.css"
function Hero() {

  const [link, setLink] = useState("");
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);

  // check logged user
  useEffect(() => {

    supabase.auth.getUser()
    .then(({ data }) => {
      setUser(data.user);
    });

  }, []);

  // Google login
  const login = async () => {

    await supabase.auth.signInWithOAuth({
      provider: "google"
    });

  };

  // when input clicked
  const handleInputClick = () => {

    if (!user) {
      login();
    }

  };

  // search product
  const handleSearch = async () => {

    if (!user) {
      login();
      return;
    }

    // demo API
    const res =
      await axios.get(
        "https://dummyjson.com/products/1"
      );

    setProduct(res.data);

  };

  return (

    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <h1>💰 Track Product Price Drops</h1>

      <p>
        Paste product link to track price instantly
      </p>

      {/* SEARCH BAR */}

      <div className="searchContainer">

        <input
          placeholder="Enter the product link..."
          value={link}
          onClick={handleInputClick}
          onChange={(e)=>
            setLink(e.target.value)
          }
        />

        <button
          className="btn"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

      {/* USER */}

      {user && (

        <div className="userBox">

          <img
            src={user.user_metadata.avatar_url}
            width="40"
          />

          <p>
            {user.user_metadata.full_name}
          </p>

        </div>

      )}

      {/* PRODUCT */}

      {product && (

        <div className="card">

          <img
            src={product.thumbnail}
            width="200"
          />

          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>

        </div>

      )}

    </motion.div>

  );

}

export default Hero;