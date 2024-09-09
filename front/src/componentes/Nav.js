import { Link } from "react-router-dom";


const Nav = (props) => {
    return (

        <nav>
            <div>
                <ul>
                    <li><Link to="/" >Inicio</Link></li>
                    <li><Link to="/publicados">Animales Publicados</Link></li>
                    <li><Link to="/perdidos">Denuncia Animal Perdido</Link></li>
                    <li><Link to="/encontrados">Denuncia Animal Encontrado</Link></li>
                    <li><Link to="/nosotros">Sobre el proyecto</Link></li>

                </ul>

            </div>

        </nav>
    )

}
export default Nav;