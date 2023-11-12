import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import logo_arrow from 'assets/img/arrow.png'
import loading_dots from 'assets/img/loading-dots.gif'

function Navbar(){

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return(
        <nav id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <Link to='/' className="ml-4 mt-1.5">
                <img 
                src={logo_arrow}
                width={35}
                height={30}
                className=""/>
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-celestial-button mx-4">Casos</NavLink>
                <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-celestial-button mx-4">Servicios</NavLink>
                <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-celestial-button mx-4">Nosotros</NavLink>
                <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-celestial-button mx-4">Carreras</NavLink>
                <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-celestial-button mx-4">Blog</NavLink>
                <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-celestial-button mx-4">Contacto</NavLink>
                <Link
                    to="/contacto"
                    className="ml-14 relative inline-flex items-center rounded-md border border-transparent bg-celestial-button px-6 py-2 text-l font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                >
                    Hire us! 
                    <img src={loading_dots} className='w-7 h-2 mt-1 ml-2' />
                </Link>
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

}) (Navbar)