import { Link } from 'react-router-dom'
import Button from './Button'

export default function Header() {
  return (
        <header className="sticky top-0 z-50 bg-base-100 backdrop-blur-sm">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Inicio</Link></li>
                            <li>
                                <Link to="/sobre">Sobre o projeto</Link>
                                <ul className="p-2">
                                    <li><Link to="/sobre">O projeto</Link></li>
                                    <li><Link to="/equipe">A equipe</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                    <Button variant="ghost" className="text-xl" asLink to="/">
                        <span className="font-display">Iyá Oromiô</span>
                    </Button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Inicio</Link></li>
                        <li>
                            <details>
                                <summary>Sobre o projeto</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><Link to="/sobre">O projeto</Link></li>
                                    <li><Link to="/equipe">A equipe</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Button asLink to="/map">
                        Explorar mapa
                    </Button>
                </div>
            </div>
        </header>
    )
}