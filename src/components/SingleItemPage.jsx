import { useParams } from "react-router-dom";
import CartData from "../CartData.json";
import { useState } from "react";
import trash from "/trash.svg";
import plus from "/plus.svg";
import { useSelector, useDispatch } from "react-redux";

const SingleItemPage = () => {
  //Used Selector to get the count value from ReduxStore
  const CartCount = useSelector((state) => state.CartOpsReducer);

  //Used Dispatch to perform the Reducer actions
  const dispatch = useDispatch();

  //Params to get the ID of the Items
  const { Listingid } = useParams();
  //State to display Items
  const [data] = useState(CartData.products);
  //Filtered ID though ID is sequential below logic is used to display the item
  const [listingId] = useState(data[Listingid - 1]);
  //Simple Success message
  const placedSuccess = () => {
    alert("Order Placed Successfully");
  };

  return (
    <>
      <div className="container">
        <div
          key={listingId.id}
          className="row mt-3 p-3 text-primary-emphasis bg-secondary-subtle border border-primary-subtle rounded-3"
        >
          <div className="d-sm-flex">
            <div className="col">
              <img
                src={listingId.thumbnail}
                alt="Dummy Images"
                style={{ objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="col ms-3">
              <h2>{listingId.title}</h2>
              <p>{listingId.category}</p>
              <p style={{ width: "80%" }}>{listingId.description}</p>
              <p>Ratings : {listingId.rating}</p>
              <p>In Stock : {listingId.stock - CartCount.count}</p>
            </div>
            <div className="col ">
              <h2>
                INR :{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {listingId.price}
                </span>
              </h2>
              <p>Disc (%) : {listingId.discountPercentage}</p>
              {/* Calculated Total price from Discounted Percentage */}
              <h3>
                Price/Qty :{" "}
                {(
                  listingId.price -
                  (listingId.price * listingId.discountPercentage) / 100
                ).toFixed(2)}
              </h3>
              <div className="p-2 mt-3 inputWidth">
                <div className="input-group mb-3">
                  <button
                    className="btn btn-danger"
                    type="button"
                    id="button-addon1"
                    onClick={() =>
                      CartCount.count === 1
                        ? alert("All items removed from cart")
                        : dispatch({ type: "REMOVE_FROM_CART" })
                    }
                  >
                    <img src={trash} />
                  </button>
                  <input
                    value={CartCount.count}
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-success"
                    type="button"
                    id="button-addon1"
                    onClick={() =>
                      CartCount.count === listingId.stock
                        ? alert("Out of stock")
                        : dispatch({ type: "ADD_TO_CART" })
                    }
                  >
                    <img src={plus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row p-2 mt-4">
            <div className="col">
              {/* Calculated Total Disc price multiplied by number of item selected  */}
              <h4>
                Sub Total :{" "}
                {(
                  (listingId.price -
                    (listingId.price * listingId.discountPercentage) / 100) *
                  CartCount.count
                ).toFixed(2)}
              </h4>
              <h4>Shipping : Free</h4>
              <hr />
              <h2>
                Total :{" "}
                {(
                  (listingId.price -
                    (listingId.price * listingId.discountPercentage) / 100) *
                  CartCount.count
                ).toFixed(2)}
              </h2>
              <div className="col">
                <button onClick={placedSuccess} className="btn btn-success">
                  Proceed to buy {CartCount.count} items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItemPage;
