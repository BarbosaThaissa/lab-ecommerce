import React from "react";
import styled from "styled-components";

const FooterStelyd = styled.footer`
  background-color: #212529;
  color: white;
  padding: 1.5rem 0;
  width: 100%;
  text-align: center;
`;

const ContainerFooter = styled.div``;

const Footer = () => {
  return (
    <FooterStelyd>
      <p>
        Copyright &copy; Thaissa Barbosa 2022. Todos os direitos reservados.
      </p>
    </FooterStelyd>
  );
};

export default Footer;
