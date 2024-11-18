import { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Menu from '../../components/menu';

export default function Home() {
    const [listaChamados, setListaChamados] = useState([]);

    async function buscarChamado(){
        const url = 'http://localhost:4004/consultar';
        let resp = await axios.get(url);
        setListaChamados(resp.data);
    }

    return (
        <div className='pagina-consultar'>
            <div className="secaomae">

                <Menu/>

                <button className='seecalls' onClick={buscarChamado}>Ver Chamados</button>

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Impacto</th>
                            <th>Data da Ocorrência</th>
                            <th>Atribuído</th>
                            <th>Alterar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listaChamados.map(item => 
                            <tr>
                                <td>{item.titulo}</td>
                                <td>{item.impacto}</td>
                                <td>{new Date(item.dataOcorrencia).toLocaleDateString()}</td>
                                <td>{item.atribuido}</td>
                                <td><Link to={`/cadastrar/${item.id}`}><i id='edit' class="fa-solid fa-pen-to-square"></i></Link></td>
                                <td><Link to={`/cadastrar/${item.id}`}><i id='lixo' class="fa-solid fa-trash"></i></Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <button className='newcall'><Link to = '/criarChamado'>Novo chamado</Link></button>
            </div>
        </div>
    )
}