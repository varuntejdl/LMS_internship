import React, { useState, useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';

const AllCourses = () => {
    const [orderID, setOrderID] = useState();

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount, courseName) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert("You are Offline");
            return;
        }

        try {
            const amountRequest = await axios.post(`http://localhost:8080/ct/${amount}`, null);
            console.log(amountRequest.data);

            // Directly use the order ID from the response
            const options = {
                key: "rzp_test_TmccVtYk270x2a",
                currency: "INR",
                amount: amountRequest.data.amount,
                name: courseName,
                description: "Thanks for purchasing.",
                image: '',
                handler: function (response) {
                    alert(amountRequest.data.orderid);
                    const amountSuccess = async (orderID, transactionid) => {
                        const amountData = {
                            orderid: orderID,
                            transactionid: transactionid
                        };
                        try {
                            const amountRequest = await axios.post(`http://localhost:8080/successtrans`, amountData);
                            console.log(amountRequest.data);
                        } catch (error) {
                            console.log(error);
                        }
                    };
                    amountSuccess(amountRequest.data.orderid, response.razorpay_payment_id);
                },
                prefill: {
                    name: "Purchase now"
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };

    const allcourse = [
   {
            name: 'Java FullStack',
            price: 28000
        },
        {
            name: 'MERN Stack',
            price: 20999
        },
        {
            name: 'Python FullStack',
            price: 28000
        },
        {
            name: 'AWS',
            price: 19999
        },
        {
            name: 'Devops',
            price: 25000
        },
        {
            name: 'MEAN Stack',
            price: 28000
        },
        {
            name: 'React',
            price: 9000
        },
        {
            name: 'Angular',
            price: 12000
        },
        {
            name: 'Java',
            price: 9999
        },
        ];

    return (
        <div>
            <Header />
            <div className='mt-5'>
                <h1>All courses</h1>
                <div className='container border-bottom'>
                    <div className='row singlecourse p-3 pb-2'>
                        <h3 className='col-8 text-start fs-3'>Course Name</h3>
                        <div className='col-2 fs-3'><h3>Price</h3></div>
                        <div className='col-2 fs-3'><h3>Checkout</h3></div>
                    </div>
                </div>
                <div className='container'>
                    {allcourse.map((singleCourse, index) => (
                        <div className='row singlecourse p-3' key={index}>
                            <div className='col-sm-8'><h3 className='text-start fs-5'>{singleCourse.name}</h3></div>
                            <div className='col-sm-2'><h3 className='fs-5 text-secondary'>₹ {singleCourse.price}</h3></div>
                            <div className='col-sm-2 text-center'>
                                <button className='btn btn-info' onClick={() => displayRazorpay(singleCourse.price, singleCourse.name)}>Buy Course</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
