import { Link } from 'gatsby'
import React from 'react'
import { ArrowLeft } from 'react-feather'
export default function HomeButton(){
return (
    <div className="home-button">
        <Link to={"/"} replace className="custom-button">
        <ArrowLeft/>
        </Link>
    </div>

)
}