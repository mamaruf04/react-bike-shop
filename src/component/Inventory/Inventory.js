import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import emptyOrderImg from "../../asset/20230202_161529_0000.png";
import inventoryImg from "../../asset/20230203_211213_0000.png";
import auth from "../../firebase.init";
import "./Inventory.css";

const Inventory = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState();
  const [rerender, setRerender] = useState(true);

  useEffect(() => {
    fetch(`https://bike-show-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  useEffect(() => {
    const itemsArray = order?.map((item) => item?.cartItem);

    const margeQuantity = itemsArray.reduce((acc, item) => {
      Object.entries(item).forEach(([id, quantity]) => {
        acc[id] = (acc[id] || 0) + quantity;
      });
      return acc;
    }, {});

    const items = Object.keys(margeQuantity);

    if (items) {
      fetch("https://bike-show-server.vercel.app/productsById", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(items),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedProducts = [];
          for (const id of items) {
            const catchProductToUpdate = data.find(
              (product) => product._id === id
            );
            const quantity = margeQuantity[id];
            catchProductToUpdate.quantity = quantity;
            updatedProducts.push(catchProductToUpdate);
          }
          setOrderedProducts(updatedProducts);
        });
    }
  }, [order]);

  // -------------------------------------------
  // const handleDelete = (id) => {
  //   console.log(id);
  //   fetch(`https://bike-show-server.vercel.app/orders?productId=${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(order),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // if (data.modifiedCount > 0) {
  //       //   alert("delete successfully!");
  //       //   setRerender(!rerender);
  //       // }
  //     });
  // };

  // ------------------------------------------------

  if (order.length === 0) {
    return (
      <div className="empty-order-img">
        <img width={"400px"} src={emptyOrderImg} alt="" />
        <h2>You haven't placed any order yet!</h2>
      </div>
    );
  }

  return (
    <div>
      <img className="inventory-img" src={inventoryImg} alt="" />
      <table>
        <tr>
          <th>image</th>
          <th>Product</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Status</th>
          {/* <th></th> */}
        </tr>
        {orderedProducts?.map((item) => {
          return (
            <tr key={item._id}>
              <td className="td-product-img">
                <img width={"80px"} src={item.img} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.seller}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>12-03-23</td>
              <td>pending</td>
              {/* <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="dlt-btn"
                >
                  delete
                </button>
              </td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Inventory;
