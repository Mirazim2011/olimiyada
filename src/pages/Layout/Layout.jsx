import React from 'react'
import Main from '../Main/Main'
import Login from '../../components/Login/Login'

export default function Layout() {

    return (
        <>
            {
                localStorage.getItem("token") ? <Main /> : <Login />
            }
        </>
    )
}
