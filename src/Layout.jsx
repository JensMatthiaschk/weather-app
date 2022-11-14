import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
//import CityResults from './components/CityResults';


export default function Layout({ setCity }) {
    return (
        <div>
            <Outlet />
        </div>
    )
}