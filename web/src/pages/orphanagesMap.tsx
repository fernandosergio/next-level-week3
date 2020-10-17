import React ,{useEffect, useState}from 'react'

import mapMarkerImg from '../images/map-marker.svg'

import { Link } from 'react-router-dom'

import { FiPlus, FiArrowRight } from 'react-icons/fi'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaftlet from 'leaflet'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

import mapIcon from '../utils/mapIcon'

interface Orphanage{
    id:number,
    latitude:number,
    longitude:number,
    name: string
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {
        api.get('orphanages').then(response => {
             setOrphanages(response.data)
        })
    },[])

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
                center={[-27.2892852,-49.6481892]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (<Marker
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                        key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF"/>
                                </Link>
                            </Popup>
                        </Marker>)
                })}
                {console.log(orphanages)}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size="32" color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap

// pra criar variaveis de ambiente no react cria um arquivo com a extensão .env, colocar o nome da variavel mas tem que começar com react ex: REACT_API_TOKEN=valor, NÃO ESQUECER DE ADICIONAR NO GITIGNORE

// pra usar o token faz assim: propriedade={'link?acess_token=${process.env.REACT_APP_TOKEN}'}