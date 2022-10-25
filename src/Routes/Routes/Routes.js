import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../component/Home'
import Login from '../../component/Login'
import Register from '../../component/Register'
import Category from "../../component/Category";
import Catagorydetails from "../../component/Catagorydetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/product-catagories')
            },
            {
                path:'/category/:name',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.name}`)

            },
            {
                path:'/product/:id',
                element:<PrivateRouter><Catagorydetails></Catagorydetails></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
               path:'/register',
               element:<Register></Register>
            }
        ]
    }
])