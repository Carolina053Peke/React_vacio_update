import React from "react";
import '../../index.css'

import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api"



function Hospitales () {

    const  {isLoaded} = useLoadScript({ googleMapsApiKey: "AIzaSyD5kTg-TYh8QzOR9ikpswBTVXTZlAamI98" })

    if (!isLoaded) return <div><b>Cargando mapa...</b></div>

    return (
       

        <>
        <hr />
        <h1 id="tituloHospitales">Hospitales</h1>

        <div className="hospitalListado"> <a href="https://infohospitaldurand.blogspot.com/?m=1"><h2>Hospital Durand</h2></a> <p> Grupo de atencion de niñez y adolescencia trans.</p> <p>diversidadesdurand@gmail.com</p> 
        <div className="mapa1"><Mapa1/></div> </div>

        <hr />
        
        <div className="hospitalListado"> <a href="https://www.buenosaires.gob.ar/hospitalpedroelizalde"><h2>Hospital Elizalde</h2></a> <p> Endocrinología.</p> <p>endocrinoelizalde@gmail.com</p> 
        <div className="mapa2"><Mapa2/></div> </div>


        <hr />

        <div className="hospitalListado"> <a href="https://www.buenosaires.gob.ar/salud/centro-de-salud-villa-soldati"><h2>CeSAC N°6</h2></a> <p> Consultorio amigable para la diversidad sexual.</p> <p>diversidadsexualsesac6@gmail.com</p> 
        <div className="mapa3"><Mapa3/></div> </div>

        <hr />

        

        </>

    )
}

const center = {lat: -34.611819767100776, lng: -58.42709384035795};

function Mapa1(){

    

    return <GoogleMap zoom={11} center={center} mapContainerClassName="map-container">
        
        <MarkerF key={1} position={{lat: -34.609915955428434, lng: -58.43778682972035}} />
        
    </GoogleMap>
}

function Mapa2(){

    return <GoogleMap zoom={11} center={center} mapContainerClassName="map-container">
        
        <MarkerF key={1} position={{lat: -34.62897084323194, lng: -58.37650723119073}} />
        
    </GoogleMap>

}

function Mapa3(){

    return <GoogleMap zoom={11} center={center} mapContainerClassName="map-container">
        
        <MarkerF key={1} position={{lat: -34.66632113238496, lng: -58.44201170394411}} />

    </GoogleMap>

}



export default Hospitales;