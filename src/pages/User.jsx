import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/User.scss'

const User = ({ product }) => {
  const {id} = useParams()
  const [pueblo, setPueblo] = useState([])
  
  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      const users = await data.json()
      setPueblo(users)
    }
    getData()
  }, [id])

  return (
    <>
    <article className='User-flex'>
      <div className="User">
        <Link className='btn' to='/'>Regresa</Link>
          <img className='User-img' src={pueblo.images} alt={pueblo.title} />  
      </div>
      <div>
          <div className='User-infro'>
            <span>Title:</span> <small>{pueblo.title}</small>
            <span>Price:</span> <small>{pueblo.price}</small>
            <span>Description:</span> <small>{pueblo.description}</small>
          </div>
      </div>
    </article>
    </>
  )
}

export default User