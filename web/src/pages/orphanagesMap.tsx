import React from 'react'

import mapMarkerImg from '../images/map-marker.svg'

import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
    return (
        <div className="page-map">
            <aside>
                <header>

                <img src={mapMarkerImg} alt="Happy"/>

                <h2>Escolha um orfanato</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Colombo</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map 
                center={[-25.2941113,-49.2223862]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
            <FiPlus size="32" color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap

// pra criar variaveis de ambiente no react cria um arquivo com a extensão .env, colocar o nome da variavel mas tem que começar com react ex: REACT_API_TOKEN=valor, NÃO ESQUECER DE ADICIONAR NO GITIGNORE

// pra usar o token faz assim: propriedade={'link?acess_token=${process.env.REACT_APP_TOKEN}'}