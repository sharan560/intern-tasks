import React, { useState, useMemo, useCallback, useEffect } from "react";

const FilterableProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartView, setIsCartView] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const switchView = () => {
    setIsCartView(!isCartView);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">{isCartView ? "Your Cart" : "Product List"}</h1>

        {!isCartView && (
          <>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />

            {/* Clear Search Button */}
            <button className="clear-btn" onClick={clearSearch}>
              Clear Search
            </button>
          </>
        )}

        {/* View Toggle Button */}
        <button className="view-toggle-btn" onClick={switchView}>
          {isCartView ? "Back to Products" : "Go to Cart"}
        </button>

        {isCartView ? (
          <div className="cart-container">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-img" />
                  <div className="cart-details">
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="product-container">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterableProductList;
