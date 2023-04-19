import React from "react";
import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

const About = () => {
  window.scrollTo(0, 0)
  return (
    <Container>
      <H1>A propos</H1>
      <Div>
        <P>
          Bienvenue chez Les Construction S.A., une entreprise de construction
          générale qui se spécialise dans la réalisation de projets résidentiels
          exceptionnels. Nous sommes fiers de notre réputation de service
          impeccable, d'expertise hors pair et de réalisations de grande qualité.
          <p></p>
          Notre priorité absolue est de répondre aux exigences de nos clients tout
          au long de leur projet. C'est pourquoi nous offrons une assistance
          personnalisée et une écoute constante à nos clients pour comprendre
          leurs besoins et s'assurer que chaque étape du projet est réalisée avec
          succès.
          <p></p>
          Nous sommes profondément reconnaissants envers tous nos clients pour
          leur confiance et leur fidélité au fil des ans, ce qui nous a encouragés
          à poursuivre notre engagement envers l'excellence et la qualité dans
          tous nos projets.
        </P>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4e4e4e;
  height: 100vh;
  padding: 0px 50px;
  
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
  padding-left: 50px;
      }
      @media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
        padding-left: 50px;
    }
    @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
      padding-left: 30px;
    }
    @media screen and (max-width: ${breakpoints.phone}) {
      padding-left: 30px;
      font-size: 20px;
    }
`;

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 30px;
@media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: ${breakpoints.phone}) {
    font-size: 25px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 20px;
  }
`;

const H1 = styled.h1`
color: orange;
font-size: 50px;
@media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    font-size: 50px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: ${breakpoints.phone}) {
    font-size: 40px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 35px;
  }
`;

const P = styled.div``;
export default About;
