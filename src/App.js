import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
import Loading from './components/Loading';
import'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import Cart from './components/Cart';


const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
    const [userName,setUserName] = useState("");
    useEffect(()=>{
        const data = {
            name : "Arshath"
        }
        setUserName(data.name);
    },[]);
    return(
        <Provider store={AppStore}>
            <UserContext.Provider value={{loggedInUser:userName}}>
                <div className='App '>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
        
    );
}



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/about",
                element:<Suspense fallback= {<Loading />}><About /></Suspense>
            },{
                path:"/contact",
                element:<Contact />
            },{
                path:"/",
                element:<Body />
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },{
                path:"/Cart",
                element:<Cart />
            }
        ],
        errorElement:<Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);