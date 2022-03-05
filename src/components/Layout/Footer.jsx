import styled from "@emotion/styled";

const FooterStyle = styled.footer`
  background-color: var(--gris);
  height: 100px;
  color: var(--blanco);
  text-align: center;
  padding-top: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;

  transition-property: color;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;

  h1:hover {
    color: var(--secondary);
  }
  h3:hover {
    color: var(--secondary);
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <h1>Propiedad de Sergio - 2022</h1>
      <h3>MERN + Redux + StyledComponents</h3>
    </FooterStyle>
  );
};

export default Footer;
