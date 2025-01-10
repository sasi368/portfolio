import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
    }
    p {
      color: #94c248;
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: #94c248;
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img {
        width: 4rem;
      }
      a {
        color: var(--black);
        font-weight: 500;
      }
      &:hover {
        background-color: var(--green);
        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
`;
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/