function Logo() {
  return (

    <div style={{
      display:"flex",
      alignItems:"center",
      gap:"10px"
    }}>

      <svg width="40" height="40">

        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#ff7a00"
        />

        <text
          x="10"
          y="26"
          fill="white"
          fontSize="18"
          fontWeight="bold"
        >
          ₹
        </text>

      </svg>

      <h2 style={{color:"#ff7a00"}}>
        PriceDrop
      </h2>

    </div>

  );
}

export default Logo;