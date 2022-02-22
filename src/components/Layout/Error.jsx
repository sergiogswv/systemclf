import styled from "@emotion/styled";

const ErrorStyle = styled.div`
  color: white;
  background-color: red;
  width: 80%;
  height: 3rem;
  margin: auto;
  text-align: center;
  p {
    padding-top: 0.75rem;
  }
`;

const Error = () => {
  return (
    <ErrorStyle>
      <p>Todos los campos son obligatorios</p>
    </ErrorStyle>
  );
};

export default Error;
