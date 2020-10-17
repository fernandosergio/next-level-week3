import React from 'react'

// É o route do Reactjs
import { NavigationContainer } from '@react-navigation/native'

// Pra criar o link entre as paginas
import { createStackNavigator } from '@react-navigation/stack'
// Navigator é pra navegar, screen sao as telas
const { Navigator, Screen } = createStackNavigator()

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import OrphanageData from './pages/createOrphanage/OrphanageData'
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition'

import Header from './components/header'

export default function Routes(){

    return (
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }}>
            <Screen name="OrphanagesMap" component={OrphanagesMap}/>

            <Screen 
            name="OrphanageDetails" 
            component={OrphanageDetails} 
            options={{
                headerShown: true,
                header: () => <Header showCancel={false} title="Orfanato" />
            }}
            />

            <Screen 
            name="OrphanageData" 
            component={OrphanageData} 
            options={{
                headerShown: true,
                header: () => <Header title="Informe os dados" />
            }}
            />

            <Screen 
            name="SelectMapPosition" 
            component={SelectMapPosition} 
            options={{
                headerShown: true,
                header: () => <Header title="Selecione no mapa" />
            }}
            />

        </Navigator>
    </NavigationContainer>
    );
}

/* 
NavigationContainer é o Router
screenOptions={{ headerShown: false }} desabilitar o header do Routes, pra desabilitar em todas as paginas usa no Navigator ou pra algumas usa no screen como options={{ headerShown: false }}
cardStyle é a cor de fundo enquanto não tem nada
*/