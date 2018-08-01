import React from "react";

import Box from "../../../components/box";
import { green, orange } from "../../../components/colors";
const margeIcones = "30";  

class Principe extends React.Component {
  componentDidMount() {
    if (window.location.href === window.location.origin+'/#video') {
      history.pushState({}, null, window.location.origin+'/');
      let tesNode = document.getElementById('video'); 
      if (tesNode){
        window.scrollTo(0, tesNode.offsetTop -75);
      }
    }
  }
   render() {
     return (
    <div id='video' style={{    'align-items': 'center',
      'display': 'flex',
      'flex-direction': 'column'}}>
    <Box
    largeurMax={1}
    texte="UNE EXPÉRIENCE DE DON INNOVANTE"
    padding='50'
    couleur="#37515b"
    complementStyle={{
      "fontSize": "30px"
    }}
  />

    <iframe width="560" height="315" id='videoFb' src="https://www.youtube.com/embed/7K7lpTWMWQs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <Box largeurMax={1} enLigne={1} margeHaut={20} margeBas={20} hauteur={50}>
      <Box texte="Vous trouvez notre solution pertinente ? Soutenez notre campagne de financement afin de développer l'application de l'écran tactile et retrouvez bientôt les bornes chez vos commerçants !"
        couleur="#37515b"
        complementStyle={{
          "fontSize": "15px"
        }}
      />
      <Box
      type="bouton"
      image='pulss.png'
      hauteur='50'
      largeur='81'
      imageEntiere='1'
      action={() => {
          window.location.href = 'https://pulsss.fr/projects/donation/72be1230-5406-4203-8de3-2e00a7440198';
      }}
      />

    </Box>
  <Box largeurMax={1} enLigne={1} margeHaut={20} margeBas={20} hauteur={50} cacher={1}>
    <Box
      type="bouton-maj"
      couleur={orange}
      bordure={"2px solid " + orange}
      bordureArrondi="5"
      largeur="200"
      padding="5"
      margeDroite="30"
      texte="Où retrouver les bornes ?"
      cacher={1}
    />
    <Box
      type="bouton-maj"
      couleur={orange}
      bordure={"2px solid " + orange}
      bordureArrondi="5"
      largeur="200"
      padding="5"
      margeDroite="30"
      texte="Les bornes plus en détail"
      cacher={1}
    />
  </Box> 
    </div>
      )}
};


export default Principe;