import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletee } from '../Store/userSlice'


const Home = () => {
    const statess = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletee({


            id: id

        }))

    }



    return (

        <div className='container'>
            <Link to="/create" className='btn btn-success my-3'>Add +</Link>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        statess.map((m, i) => (

                            <tr key={i}>
                                <td>{m.id}</td>
                                <td>{m.name}</td>
                                <td>{m.email}</td>
                                <td>
                                    <Link to={`/edit/${m.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={() => handleDelete(m.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    )
}

export { Home }