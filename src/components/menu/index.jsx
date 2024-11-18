import './index.scss'
import {Link} from 'react-router-dom'

export default function Menu (){

    return(
        <div className='menu'>
            <div className='parte1'>
                <div className="logo">
                    <img className='logoinsf' src='/assets/images/logoinsfhd.png'/>
                </div>

                <div className="msg">
                    <h2>Bem vindo</h2>
                </div>
            </div>

            <div className="parte2">
                <div className="logout">
                    <h2 className='sair'>Sair</h2>
                </div>
            </div>
        </div>
    )
}