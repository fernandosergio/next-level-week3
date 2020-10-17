import React from 'react';


// Importando a fonte, expo install @expo-google-fonts/nunito expo-font
// nunito é a fonte que eu quero expo-font e a dependencia
import { useFonts } from 'expo-font' 

// Escolhendo as fontes
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito' 

import Routes from './src/routes'

export default function App() {


  // Carrega as fontes para serem usadas
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  // Faz verificacao pra ver se as fontes estao carregadas, quando carregar manda o app inteiro senao uma tela branca
  if(!fontsLoaded){
    return null
  }

  return (
    <Routes />
  );
}




/* 
View é tudo que é uma caixa ex: div, ul, section, header, footer, article, etc
Text é tudo que é texto ex: p, h1, h2, span, strong, etc
TouchableOpacity é tipo um botão 

Não estiliza usando class e id, usa o style={variavel.objeto}
Não existe herança, tem que fazer 1 por 1
Não existe hifen, usa que nem no JS: backgrounColor
Por padrão todos elementos tem display: flex;
elevation faz uma sombra embaixo do container
*/


/* 
Pra usar o mapa instala expo install react-native-maps
Depois import MapView from 'react-native-maps' usa com <MapView/>
<Marker> pra adicionar icones
<Callout> Pra colocar texto quando clica

longitudeDelta e latitdeDelta é o zoom
Tooltip={true} ou tooltip diz que eu vou fazer o estilo do callout
*/

/* 

*/