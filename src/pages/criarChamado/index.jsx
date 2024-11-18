import { useState } from 'react'
import { useEffect } from 'react';
import './index.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';

export default function NovoChamado() {
    const [titulo, setTitulo] = useState('');
    const [infos, setInfos] = useState('');
    const [impacto, setImpacto] = useState('');
    const [dtOcorre, setDtOcorre] = useState('');
    const [atribuido, setAtribuido] = useState('');

    async function salvar() {
        const paramCorpo = {
            "titulo": titulo,
            "infos": infos,
            "impacto": impacto,
            "dataOcorrencia": dtOcorre,
            "atribuido": atribuido    
        }

        if (id== undefined) {
            const url = 'http://localhost:4004/';
            console.log(paramCorpo)
            let resp = await axios.post(url, paramCorpo);

            alert(`Chamado adicionado na tabela. Id: ${resp.data.novoId}`);
        } 
        else {
            const url = `http://localhost:4004//${id}`;
            console.log(paramCorpo)
            let resp = await axios.put(url, paramCorpo);

            alert('Chamado alterado na lista')
        }
    }

    const {id}= useParams();

    async function buscar() {
        const url = `http://localhost:4004//${id}`;
        let resp = await axios.get(url);
        
        console.log(resp.data);

        setTitulo(resp.data.titulo)
        setInfos(resp.data.infos)
        setImpacto(resp.data.impacto)
        setDtOcorre(resp.data.dtOcorre)
        setAtribuido(resp.data.atribuido)
    }

  useEffect(() => {

    buscar()

  }, [])

    return (
        <div className='pagina-cadastrar'>
            <div className="secaomae">

                <Menu/>

                <div className='form'>
                    <div className="alto">
                        <div>
                            <label>Titulo</label>
                            <input type='text' value={titulo} onChange={e => setTitulo(e.target.value)} />
                        </div>
                        <div>
                            <label>Informações</label>
                            <input type='text' value={infos} onChange={e => setInfos(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="baixo">
                        <div>
                            <label>Impacto</label>
                            <input type='text' value={impacto} onChange={e => setImpacto(e.target.value)} />
                        </div>
                        <div>
                            <label>Data da Ocorrência</label>
                            <input type='date' value={dtOcorre} onChange={e => setDtOcorre(e.target.value)} />
                        </div>
                        <div>
                            <label>Atribuir</label>
                            <input type='text' value={atribuido} onChange={e => setAtribuido(e.target.value)} />
                        </div>          
                    </div>
                                      
                </div>

                <div className="botoes">
                    <button className='volta'><Link to = '/'> Voltar </Link></button>
                    <button className='save' onClick={salvar}>Salvar</button>
                </div>
                
            </div>
        </div>
    )
}