import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {breakpoints} from "../GlobalStyles";
import {useState, useEffect} from "react";
import Loading from "./Loading";

const Homepage = () => {
  window.scrollTo(0, 0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Topdiv>
            <H1>Les Constructions S.A.</H1>
            <div>
              <Ptop>Construire avec passion, livrer avec fierté</Ptop>
              <Ptop2>Construction neuve et rénovation</Ptop2>
              <Links to="/about">
                <PtopInfo>plus D'info</PtopInfo>
              </Links>
            </div>
          </Topdiv>
          <Section>
            <h2>Nos Project</h2>
            <Middiv>
              <ImgDivMid src="/constructiontemplate/pictures/project1.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project2.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project2.1.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project3.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project3.1.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project3.2.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project3.3.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project4.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project4.1.jpg" />
              <ImgDivMid src="/constructiontemplate/pictures/project4.2.jpg" />
            </Middiv>
          </Section>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4e4e4e;
`;

const Topdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-image: url("pictures/back1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 700px;
  text-transform: uppercase;
  @media screen and (max-width: ${breakpoints.phone}) {
    height: 600px;
  }
`;

const H1 = styled.h1`
  color: orange;
  font-size: 80px;
  padding-left: 20px;
  padding-top: 200px;
  margin-bottom: 0px;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    font-size: 60px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: ${breakpoints.phone}) {
    font-size: 50px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 35px;
  }
`;

const Ptop = styled.p`
  color: white;
  font-size: 35px;
  margin-bottom: 0px;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    font-size: 35px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: ${breakpoints.phone}) {
    font-size: 20px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 15px;
  }
`;

const Ptop2 = styled.p`
  color: white;
  font-size: 30px;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: ${breakpoints.phone}) {
    font-size: 15px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 10px;
  }
`;

const PtopInfo = styled.p`
  color: orange;
  font-size: 20px;
  padding: 10px 15px;
  width: fit-content;
  border: 1px solid orange;
  :hover& {
    color: white;
    background-color: orange;
  }
`;

const Links = styled(Link)`
  text-decoration: none;
`;

const Section = styled.div`
  background-color: #4e4e4e;
  margin-bottom: 50px;
  margin-left: 50px;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    margin-left: 50px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    margin-left: 30px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    margin-left: 30px;
  }
`;

const Middiv = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: repeat(auto, 1fr);
  background-color: #4e4e4e;
  gap: 5px;
  width: 100%;
  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 1349px) and (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1049px) and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 799px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
  }
`;

const ImgDivMid = styled.img`
  width: 250px;
  height: 333px;
  margin-top: 25px;
  border: 2px solid orange;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    width: 250px;
    height: 333px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
    width: 200px;
    height: 275px;
  }
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    width: 150px;
    height: 225px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    width: 150px;
    height: 225px;
  }
`;
export default Homepage;

// "homepage": "https://timdeslo.github.io/constructiontemplate",
