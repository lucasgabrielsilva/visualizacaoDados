import React, { Component } from 'react';
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
        <h1>Quantidade de Jogadores por Pais</h1>
      </Title>
      <Map>
        <AliceCarousel autoHeight='true' autoWidth='true'>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/fqvin/2/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/DsSzR/2/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/k82jI/3/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/a36aA/2/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/21xuG/2/"  scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/pSFVq/2/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/QH2Be/2/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/meZ1x/2/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/V2f9Y/3/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>
        <iframe title="2010" aria-label="Map" id="datawrapper-chart-fqvin" src="https://datawrapper.dwcdn.net/xUM7X/3/" scrolling="no" frameborder="0" style={{height:"74vh", width:"50vw"}}></iframe>


        </AliceCarousel>
      </Map>
    </Container>
  );
}

export default Visu1;
