import { Outlet, Navigate } from "react-router-dom"

export const PageLayout = ({user}) => {
    if (!user) {
        return <Navigate to="/login" />
    }
    
    return <Outlet/>
}