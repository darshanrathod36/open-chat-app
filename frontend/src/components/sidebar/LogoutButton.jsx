import { BiLogOut } from "react-icons/bi";
import React from 'react'
import  useLogout  from '../../hooks/useLogout.js';



function LogoutButton() {

  const { loading, logout } = useLogout();
  return (
      <div className='pb-7 '>
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout}/>
      ) : (
          <span className="loading loading-spinner"></span>
          )}
    </div>
  )
}

export default LogoutButton