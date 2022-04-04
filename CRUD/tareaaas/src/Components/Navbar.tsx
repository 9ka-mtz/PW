import React from "react";

export const Navbar =() =>{
    return(
        <>
        <body>
            <nav className='nav-container'>
                <div className="logo">
                    <span>NUBE BLANCA</span>
                </div>
                <div className="menu">
                    <span>Inicio</span>
                    <span>Eventos</span>
                    <span>Agendar</span>
                </div>
                <div className="options">
                    <div>
                        <input className="options_iput" type="text" />
                        <input className="options_btn" type="button" value="buscar"/>
                    </div>
                </div>
            </nav>
        </body>
        </>
    )
}