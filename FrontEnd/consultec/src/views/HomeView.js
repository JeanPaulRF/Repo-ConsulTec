import React, { useState } from 'react';
import mateGe from "../images/mateGeneral.jpg"


function HomeView({ onClickMaterial, handleChangePassword, handleLogout, courses }) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const onClickCourse = (course, title) => {
        onClickMaterial(course, title);
    }
    return (
        <div style={{ backgroundImage: "url('https://th.bing.com/th/id/R.8f11c679e5dac264326985cd4419f975?rik=n%2bnPpJrHK72m9g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f9%2f2%2f94254.jpg&ehk=rfeXjwbaITK5Sv1h0%2boMsgAN0shLtxuK5et51esIWJk%3d&risl=&pid=ImgRaw&r=0')" }}>
            <header className="w-full text-gray-700 bg-blue-400 border-t bg-opacity-50 border-gray-100 shadow-sm body-font">
                <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                    <a href="#_" class="flex items-center order-first mb-4 text-4xl font-semibold text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-start lg:justify-start md:mb-0">
                        ConsulTec
                    </a>
                    <div className="ml-auto relative">
                        <div onClick={toggleMenu} className="cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="bi bi-person-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                        </div>
                    </div>
                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                            <ul>
                                <li
                                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                    onClick={handleChangePassword}
                                >
                                    Cambiar Contraseña
                                </li>
                                <li
                                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    Cerrar Sesión
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>
            <h1 style={{ fontSize: '1.6rem', textAlign: 'center' }}>Seleccione un curso a consultar: </h1>
            <div className="h-screen w-full  justify-center bg-cover bg-no-repeat">
                <div className="rounded-xl bg-gray-800 bg-opacity-50 px-12 py-10 shadow-lg backdrop-blur-md max-sm:px-8 mt-[40px] ">
                    {
                        courses.length > 0 ? (
                            <div >
                                <ul className="flex flex-wrap justify-center">
                                    {courses.map((course) => (
                                        <li
                                            className="rounded-xl bg-gray-600 bg-opacity-50 mx-16 mb-8 p-8"
                                            onClick={() => onClickCourse(course.id, course.nombre)}
                                            key={course.id}
                                        >
                                            <div className="mx-2">
                                                <img src={course.imagenURL} alt={course.nombre} style={{ width: '200px', height: '150px' }} />
                                                <button >{course.nombre}</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="mx-2">
                                <img alt="Cargando" style={{ width: '200px', height: '150px' }} />
                                <button >
                                    Cargando
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )




}

export default HomeView;