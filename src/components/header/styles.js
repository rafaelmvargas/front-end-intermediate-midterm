import styled from "styled-components";

export const Header = styled.header`
  header {
    height: 320px;
    background: url(../img/img.jpg) center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    header {
      height: 120px;
    }
  }
`;
