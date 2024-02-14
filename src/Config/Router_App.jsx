import {createBrowserRouter
    ,createRoutesFromElements,
    Route,
    RouterProvider} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Edit } from '../Pages/Edit'
import { Create } from '../Pages/Create'




    const router =createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/' element={<Home/>}/>
                <Route path='create' element={<Create/>}/>
                <Route path='edit/:id' element={<Edit/>}/>
            </Route>  
        )
    )



const Router_App = () => {
  return (
    <div>
<RouterProvider router={router}/>
    </div>
  )
}

export  {Router_App}