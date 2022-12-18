import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Topbar() {

    const toggleMenu = () => {
        document.body.classList.toggle("open");
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        window.sessionStorage.clear();
        navigate("/")
    }

    const id = window.sessionStorage.getItem("userId");

    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

            <Link to={"/portal/home"} id='options'><i class="fa-solid fa-house mr-2"></i>Home</Link>
            <Link to={"/portal/shorten-url"} id='options'><i class="fa-solid fa-filter mr-2"></i>Shorten Url</Link>
            <Link to={`/portal/your-url/${id}`} id='options'><i class="fa-solid fa-earth-americas mr-2"></i>Your Url's</Link>
            <Link to={"/portal/pricing"} id='options'><i class="fa-solid fa-tag mr-2"></i>Pricing</Link>
            
            <ul class="navbar-nav ml-auto">

                <div class="topbar-divider d-none d-sm-block"></div>
                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <button onClick={handleLogout} className='btn btn-light'><i class="fa-solid fa-right-from-bracket mr-2"></i>Log out</button>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default Topbar