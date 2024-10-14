import PinIcon from '@mui/icons-material/Pin';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';

import Image from "next/image";
import Link from 'next/link';

const NavLinks = [
    {href:"/dashboard",nombre:"Dashboard",icon:<SpaceDashboardIcon className='w-10 h-10'/>},
    {href:"/dashboard/contador",nombre:"Contador",icon:<PinIcon className='w-10 h-10'/>},
    {href:"/dashboard/pokemones",nombre:"Pokemones",icon:<CatchingPokemonIcon className='w-10 h-10'/>},
    {href:"/dashboard/productos",nombre:"Productos",icon:<ShoppingCartIcon className='w-10 h-10'/>},
    {href:"/dashboard/analisis",nombre:"Analisis",icon:<EqualizerIcon className='w-10 h-10'/>},
    {href:"/dashboard/tareas",nombre:"Tareas",icon:<ListAltIcon className='w-10 h-10'/>}
]

const Sidebar = () =>{
    return(
        <div className="bg-indigo-900 w-1/4 h-full">

            <h2 className="text-white pt-5 pb-2 text-center text-3xl px-2">Dashboard NextApp</h2>
            <div >
                <div className="flex justify-center mt-3">
                    <Image src="https://github.com/DGMLX.png" width={250} height={250} alt="Foto usuario" className="rounded-full p-5"/>
                </div>
                <p className="text-center text-white text-xl">Diego Altamirano</p>
                <p className="text-center text-white">Desarrollador Web</p>
            </div>

            <div className="mt-5">
                {
                    NavLinks.map(link=>{
                        return(
                            <Link href={link.href} key={link.href}>
                                <div className="p-4 m-2 border-2 border-blue-300 rounded-xl flex items-center hover:bg-indigo-700 hover:border-white" >
                                    <div className="text-white mr-4 ">
                                        {link.icon}
                                    </div>
                                    <div>
                                        <p className="text-white text-xl">{link.nombre}</p>
                                        <p className="text-white text-sm">{link.href}</p>
                                    </div>
                                </div>
                            </Link>
                        )    
                    })
                }
            </div>

            <div className="mt-10 w-full bg-indigo-800 py-4 flex justify-center">
                <LogoutIcon className='text-white mr-4'/>
                <button className='text-white text-center text-xl'>Cerrar sesión</button>
            </div>
        </div>
        
    )
}

export default Sidebar;