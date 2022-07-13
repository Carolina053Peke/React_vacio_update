import React from "react";
import translogo from "../img/Formando.png"

function Footer () {
    const pie = {
        display: 'flex',
        backgroundColor: 'rgb(249,186,201)',  
        justifyContent: 'space-around',
        paddingBottom: '40px',
        alignItems: 'center',
        fontSize: '20px',
        fontStyle: 'italic',   
        position: 'relative',
        bottom: '0',
    }

    const imgLogo = {
        width: '260px',
    }

    const der = {
        marginTop: '20px',

    }

    const izq = {
        marginTop: '60px',
        marginBottom: '-30px'

    }

    const aLink = {
        a:{
            'link': {
                textDecoration: 'none'
            },
            'hover':{
                color: 'rgb(235, 14, 62)',
                backgroundColor: 'rgb(241, 163, 193)'
            },
            'visited':{
                textDecoration: 'none'
            }
        }
    }

    return (

        <>
        <div style={pie} id="pie">
        <div className="izq">
            <img style={imgLogo} src={translogo} alt="yy" /> 
            <br />
            <p className="derRes"> Derechos reservados.</p>
        </div>



        <div style={izq}>
        
        
        <p className="text"><b>Mail:</b> </p>
        <br />
        <p className="text"> transformando@gmail.com</p>
        <br />
        <p className="text"><b>Telefonos: </b></p>  
        <br />
        <p className="text">0800-5235-5235</p>
        <br />
        <p className="text">011-9583-3526</p>
        


        
        </div>



        <div style={der}>

        <p className="text"><b className="redes">Redes sociales:</b></p> 
        <br />
        <p className="text"><b>Instagram: </b> <a style={aLink.a} href="https://www.instagram.com/" >@trans_formando</a></p>
        <br />
        <p className="text"><b>Twitter: </b> <a style={aLink.a} href="https://twitter.com/">@transformand0_</a></p>
        <br />
        <p className="text"><b>Facebook: </b> <a style={aLink.a} href="https://www.facebook.com/">TransFormando</a> </p>
        </div>
        </div>
       </>

    )



}

export default Footer;