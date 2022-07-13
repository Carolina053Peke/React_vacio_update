import styles from './styles.css';

function Soporte() {

    const h1S ={

        textAlign: 'center',
        backgroundColor: 'rgb(249,186,201,0.5)',
        padding: '5px',
        alignItems: 'center',
        fontSize: '15px',
        fontStyle: 'italic',   
        position: 'relative',
        display: 'Block',
        marginBottom: '30px'

    }

    return (
        <>
        <section style={h1S} id="soporte">


            <h1>Soporte</h1>
            <hr />
            <h5>Ante cualquier duda con la página, contactate en uno de nuestros medios:<pre/>
                Mail: maildeEjemplo@gmail.com <pre/>
                Tel: 110000000
            </h5>
            <hr />
            <h5>Línea Salud Sexual Ministerio de Salud de la Nación: 0800 222 3444. <pre/> Correo electrónico: saludsexual@msal.gov.ar <pre/>
                Superintendencia de Servicios de Salud: 0800 222 72583 para reclamos de Obras sociales (nacionales) y prepagas <pre/>
                Defensoría LGBT: 4338-4900 internos 8106/8109. <pre/> <a href="mailto:defensoria@lgbt.org.ar?Subject=Interesado%20en%20el%20curso">Contactar por correo</a> <pre/>
                Instituto Nacional contra la Discriminación, la Xenofobia y el Racismo (INADI): 0800 999 2345
            </h5>
            </section>
        </>
    )
}

export default Soporte;