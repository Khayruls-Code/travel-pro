import React, { useEffect, useState } from 'react';
import useAuht from '../../hooks/useAuth';
import loader from '../../images/loader.gif'
import PackageDetails from '../PackageDetails/PackageDetails';

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const [matchOrder, setMatchOrder] = useState([])
  const { user } = useAuht()

  useEffect(() => {
    fetch("https://travel-pro-agency.herokuapp.com/users")
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  useEffect(() => {
    if (orders.length) {
      const matched = orders.filter(singleUser => singleUser.email === user.email)
      setMatchOrder(matched)
      console.log(matched)
    }
  }, [orders])

  if (orders.length === 0) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }

  const handleDelete = (id) => {
    const makeSure = window.confirm("Are you sure to want to delete this package ?")
    if (makeSure) {
      fetch(`https://travel-pro-agency.herokuapp.com/users/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged === true) {
            alert('Successfully Deleted')
            const remain = matchOrder.filter(order => order._id !== id)
            setMatchOrder(remain)
          }
        })
    }
  }

  return (
    <div className='mt-28 myPackage'>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          {
            matchOrder?.map(order => <PackageDetails
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default MyOrders;