import React from 'react';
import { Container, Header, Title, Map, Button } from './styles.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link} from 'react-router-dom';


const Visu1 = () => {
  return (
    <Container>
      <Header>
        <Button>
          <Link to="/">Visualização 1</Link>
        </Button>
        <Button>
          <Link to="/visu2">Visualização 2</Link>
        </Button>
      </Header>
      <Title>
        <h1>Estatística de Gols na Temporada</h1>
      </Title>
      <Map>
        <AliceCarousel autoHeight='true' autoWidth='true'>
          <>
          <iframe src='https://flo.uri.sh/visualisation/5818291/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style={{width:"100%",marginTop:"4px",textAlign:"right"}}><a class='flourish-credit' href='https://public.flourish.studio/visualisation/5818291/?utm_source=embed&utm_campaign=visualisation/5818291' target='_top' ><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style={{width:"105px",height:"16px",border:"none",margin:"0"}}/> </a></div>
          </>
          <>
          <iframe src='https://flo.uri.sh/visualisation/5818822/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style={{width:"100%",marginTop:"4px",textAlign:"right"}}><a class='flourish-credit' href='https://public.flourish.studio/visualisation/5818291/?utm_source=embed&utm_campaign=visualisation/5818291' target='_top' ><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style={{width:"105px",height:"16px",border:"none",margin:"0"}}/> </a></div>
          </>
          <>
          <iframe src='https://flo.uri.sh/visualisation/5818830/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style={{width:"100%",marginTop:"4px",textAlign:"right"}}><a class='flourish-credit' href='https://public.flourish.studio/visualisation/5818291/?utm_source=embed&utm_campaign=visualisation/5818291' target='_top' ><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style={{width:"105px",height:"16px",border:"none",margin:"0"}}/> </a></div>
          </>
        </AliceCarousel>
      </Map>
    </Container>
  );
}

export default Visu1;
