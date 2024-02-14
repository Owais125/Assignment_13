import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updtae } from '../Store/userSlice';



const Edit = () => {
  const {id}= useParams();
  const users = useSelector((state)=>state.user)
  const esist = users.filter(f=>f.id == id)
  const {name,email} =esist[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
 const dispatch = useDispatch()
 const navigate = useNavigate()

  const sunmitHandle =(e)=>{
    e.preventDefault()
    dispatch(updtae({
      id:id,
      name:uname,
      email:uemail
    }))
    navigate('/')


  }

  return (
    <div>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <h3>Update Value </h3>
          <div>
            <form onSubmit={sunmitHandle}>
              <div>
                <label htmlFor="name">Title</label>
                <input className='form-control' type="text"
                value={uname}
                  onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email">Description</label>
                <input className='form-control' type="text"
                value={uemail}
                  onChange={e => setEmail(e.target.value)} />
              </div> <br />
              <button type='submit' className='btn btn-info'>Update</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export { Edit }