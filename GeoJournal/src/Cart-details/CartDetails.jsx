import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementnew, decrementnew } from "../redux-slice/cartSlice";
import "../assets/Styles/cartdetails.css";  

const CartDetails = () => {
    const cartItems = useSelector((state) => state.cartcount.cartcountnew);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.price * item.quantity;
        });
        setTotal(sum);
    }, [cartItems]);

    const handleIncrement = (item) => {
        dispatch(incrementnew(item));
    };

    const handleDecrement = (item) => {
        dispatch(decrementnew(item));
    };

    const handleProceed = async () => {
        const discount = 15;
        const totalPayable = total - discount;

        try {
            const response = await fetch('http://localhost:5000/cart/save-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems.map(item => ({
                        title: item.title,
                        quantity: item.quantity,
                        price: item.price,
                        img: item.image
                    })),
                   
                    toPay: totalPayable.toFixed(2),
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                console.error('Failed to save cart:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (cartItems.length === 0) return <div className="img-container"><img src="https://www.adasglobal.com/img/empty-cart.png" alt="Empty Cart"></img></div>

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart">
                    <div className="cart-header">
                        <div>Magazine</div>
                        <div>Quantity</div>
                        <div>Price</div>
                    </div>
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className="item-details">
                                <div>{item.title}</div>
                                <div className="quantity">
                                    <button onClick={() => handleIncrement(item)}>+</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleDecrement(item)}>-</button>
                                </div>
                                <div className="price"><p>${item.price}</p></div>
                            </div>
                        </div>     
                    ))}
                </div>
                <div className="order-summary">
                    <div className="price-card">
                        <p>Quantity: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
                        <p>Total: ${total.toFixed(2)}</p>
                        <p>Discount: -$15</p>
                        <p>To Pay: ${(total - 15).toFixed(2)}</p>
                        <button onClick={handleProceed}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;
