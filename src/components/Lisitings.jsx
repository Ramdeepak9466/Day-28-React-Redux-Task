import { Link } from "react-router-dom";
import CartData from "../CartData.json";
import { useState } from "react";
const Listings = () => {
  //State to get data from CartData.JSON
  const [data] = useState(CartData.products);

  return (
    <>
      <div className="container">
        {data.map((cart) => (
          <div
            key={cart.id}
            className="d-sm-flex mt-3 p-3 text-primary-emphasis bg-secondary-subtle border border-primary-subtle rounded-3"
          >
            <div className="col">
              <img
                src={cart.thumbnail}
                alt="Dummy Images"
                style={{ objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="col ms-3">
              <h2>{cart.title}</h2>
              <p>{cart.category}</p>
              <p style={{ width: "80%" }}>{cart.description}</p>
              <p>Ratings : {cart.rating}</p>
              <p>In Stock : {cart.stock}</p>
            </div>
            <div className="col">
              <h2>
                INR :{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {cart.price}
                </span>
              </h2>
              <p>Disc (%) : {cart.discountPercentage}</p>
              {/* Calculated Total price from Discounted Percentage */}
              <h3>
                Total Price :{" "}
                {(
                  cart.price -
                  (cart.price * cart.discountPercentage) / 100
                ).toFixed(2)}{" "}
              </h3>
              <div className="col p-2 mt-3">
                {/* Got ID as the search Params to get individual item */}
                <Link to={`/${cart.id}`} className="btn btn-success">
                  Buy Item
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Listings;
