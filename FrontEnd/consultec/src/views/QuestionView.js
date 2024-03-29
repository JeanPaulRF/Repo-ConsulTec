import React, { useState, useEffect } from 'react';
import QuestionForm from '../components/questionScreen/QuestionForm';
import QuestionList from '../components/questionScreen/QuestionList';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

function QuestionView({ handleChangePassword, handleLogout, subTheme, course, title, questions }) {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState("");
  const [hasFetchedUser, setHasFetchedUser] = useState(false);

  const handleUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser("anónimo@estudiantec.cr");
      }
      setHasFetchedUser(true);
    });
  };

  useEffect(() => {
    if (!hasFetchedUser) {
      handleUser();
    }
  }, [hasFetchedUser]);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-screen w-full" style={{ backgroundImage: "url('https://th.bing.com/th/id/R.8f11c679e5dac264326985cd4419f975?rik=n%2bnPpJrHK72m9g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f9%2f2%2f94254.jpg&ehk=rfeXjwbaITK5Sv1h0%2boMsgAN0shLtxuK5et51esIWJk%3d&risl=&pid=ImgRaw&r=0')" }}>
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
      <div className='flex h-full w-full'>
        <div className='w-1/4'>
          <QuestionForm
            subTheme={subTheme}
            user={user}
            course={course}
            courseTitle={title}
          />
        </div>
        <div className='w-2/3 mt-16'>
          <QuestionList
            questions={questions}
          />
        </div>
      </div>
    </div>
  )




}
export default QuestionView;