import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userid} = useParams()
  return (
    <div className='text-center bg-gray-500 text-3xl p-4 text-white font-bold'>User: {userid}</div>
  )
}

export default User