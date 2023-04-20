import React from "react";
import styled from "styled-components";
import {breakpoints} from "../GlobalStyles";
import {FiSmartphone} from "react-icons/fi";
import {useForm, ValidationError} from "@formspree/react";
import {useNavigate} from "react-router-dom";

const Contact = () => {
  window.scrollTo(0, 0);
  const [state, handleSubmit] = useForm("xdovyoqk");
  const Navigate = useNavigate();

  if (state.succeeded) {
    return Navigate("/");
  }
  return (
    <Container>
      <H1>Nous Joindre</H1>
      <DivWrapper>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Nom:</Label>
            <Input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <Label htmlFor="number">Numéro de téléphone:</Label>
            <Input id="number" type="number" name="number" />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
            <Label htmlFor="email">Courriel:</Label>
            <Input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Label htmlFor="message">Message</Label>
            <textarea id="message" name="message" rows={4} />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              disabled={state.submitting}
              onClick={() => {
                alert("Votre message a été envoyé avec succès!");
              }}
            >
              Envoyer
            </Button>
          </Form>
          <Div>
            <P>
              Ou Contacter nous par téléphone au
              <p></p>
              <FiSmartphone />: 514-585-6192
              <p></p>
              Et par courriel à<p></p>
              lesconstructionS.A@gmail.com
            </P>
          </Div>
        </Wrapper>
      </DivWrapper>
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
    margin-bottom: 50px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    padding-left: 30px;
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px;
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    padding: 30px;
    gap: 10px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    padding: 30px;
    gap: 10px;
  }
`;

const Input = styled.input`
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 27px;
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    font-size: 25px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 25px;
  }
`;

const Label = styled.label`
  font-size: 30px;
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    font-size: 25px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 7px;
  border: none;
  color: black;
  border: 1px solid black;
  background-color: white;
  :hover& {
    cursor: pointer;
    background-color: orange;
  }
`;

const Div = styled.div`
  display: flex;
  background-color: #4e4e4e;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: ${breakpoints.phone}) {
    font-size: 25px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

const H1 = styled.h1`
  color: orange;
  margin-bottom: 5px;
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

const P = styled.p``;
export default Contact;
