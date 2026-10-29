import { Outlet } from "react-router-dom"
import Nav from "../component/Nav"
import Footer from "../component/Footer"



export default function Layout() {
  return (
    <div>
<Nav/>
<Outlet/>
<Footer/>
    </div>
  )
}
