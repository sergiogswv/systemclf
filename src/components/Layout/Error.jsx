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

const Error = ({ errorMsg }) => {
  return (
    <ErrorStyle>
      <p>{errorMsg}</p>
    </ErrorStyle>
  );
};

export default Error;
