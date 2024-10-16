'use client'

import PinIcon from '@mui/icons-material/Pin';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';

import Link from "next/link"
import { usePathname } from "next/navigation"


const Navegacion = () =>{
    
    const NavLinks = [
        {href:"/dashboard",nombre:"Dashboard",icon:<SpaceDashboardIcon className='w-10 h-10'/>},
        {href:"/dashboard/contador",nombre:"Contador",icon:<PinIcon className='w-10 h-10'/>},
        {href:"/dashboard/pokemones",nombre:"Pokemones",icon:<CatchingPokemonIcon className='w-10 h-10'/>},
        {href:"/dashboard/productos",nombre:"Productos",icon:<ShoppingCartIcon className='w-10 h-10'/>},
        {href:"/dashboard/analisis",nombre:"Analisis",icon:<EqualizerIcon className='w-10 h-10'/>},
        {href:"/dashboard/tareas",nombre:"Tareas",icon:<ListAltIcon className='w-10 h-10'/>}
    ]
    
    const pathName = usePathname()
    
    return(
        
            NavLinks.map((link)=>{

                const isActive = pathName === link.href ? true : false; 

                return(
                    <Link href={link.href} key={link.href}>
                        <div className={`p-4 m-2 border-2 border-blue-300 rounded-xl flex items-center hover:bg-indigo-700 hover:border-white ${isActive && "bg-indigo-950 "}`} >
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
        
    
    )
}

export default Navegacion