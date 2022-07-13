import Logo from '../img/Formando.png'

function Inicio() {

    const imgLogo = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const title = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'peach'
    };

    return (
        < >
    
            <h1 style={title}> Bienvenidxs a</h1>
            <img style={imgLogo} src={Logo} />
        </>
    )
}

export default Inicio;