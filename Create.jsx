import React, { useState } from 'react'
import { addUser } from '../Store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'




const Create = () => {
    const navigate = useNavigate()

    const users = useSelector((state)=>state.user)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch =useDispatch()




    const submitHamdle = (event) => {
        event.preventDefault()
        dispatch(addUser({id:users[users.length - 1].id + 1,name,email}))
      navigate('/')
        
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New</h3>
                <div>
                    <form onSubmit={submitHamdle}>
                        <div>
                            <label htmlFor="name">Title</label>
                            <input className='form-control' type="text"
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Description</label>
                            <input className='form-control' type="type"
                                onChange={e => setEmail(e.target.value)} />
                        </div> <br />
                        <button type='submit' className='btn btn-info'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Create }