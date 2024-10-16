import LogoutIcon from '@mui/icons-material/Logout';

import Image from "next/image";
import Navegacion from './Navegacion';

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
                <Navegacion/>
            </div>

            <div className="mt-10 w-full bg-indigo-800 py-4 flex justify-center">
                <LogoutIcon className='text-white mr-4'/>
                <button className='text-white text-center text-xl'>Cerrar sesión</button>
            </div>
        </div>
        
    )
}

export default Sidebar;