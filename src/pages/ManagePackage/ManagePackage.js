import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import loader from '../../images/loader.gif'
import './ManagePackage.css'

const ManagePackage = () => {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState('')
  useEffect(() => {
    fetch('https://travel-pro-agency.herokuapp.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  //delete a single user
  const handleDelete = (id) => {
    const makeSure = window.confirm('Are you sure to want to delete this user??')
    if (makeSure) {
      fetch(`https://travel-pro-agency.herokuapp.com/users/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged === true) {
            const remain = users.filter(user => user._id !== id)
            setUsers(remain)
          }
        })
    }
  }

  //uodate user status
  const updateStatus = (id) => {
    if (users.length) {
      const matched = users.find(user => user._id === id)
      matched.status = 'approved'
      fetch(`https://travel-pro-agency.herokuapp.com/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(matched)
      })
        .then(res => res.json())
        .then(data => {
          setStatus(data.status)
        })
    }
  }

  if (users.length === 0) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }


  return (
    <div className='manage pt-28'>
      <div className="container">
        <table className='w-full'>
          <thead className='bg-secondary'>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Package Name</td>
              <td>Date</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.packagename}</td>
                <td>{user.date}</td>
                <td>
                  <button onClick={() => updateStatus(user._id)} className='px-2 py-1 text-white rounded-sm bg-primaryBg'>{status || user.status}</button>
                </td>
                <td className='delete-icon'>
                  <div onClick={() => handleDelete(user._id)}>
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePackage;