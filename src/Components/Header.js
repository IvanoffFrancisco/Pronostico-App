import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
        <header className='col-lg-12'>
            <NavLink to="/">
                <div className='contenedortitulo'>
                        <img style={{margin:"30px 0"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kqhh8UFQdp_ZKKo_B-qdyHe1HCHvGGeoLQ&usqp=CAU" alt="" />
                </div>
            </NavLink>
        </header>
  )
}
