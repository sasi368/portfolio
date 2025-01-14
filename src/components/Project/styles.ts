import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

  .project {
    padding: 1.5rem 1.2rem; /* Reduced padding for better mobile fit */
    background-color: #2b2b2b;
    border-radius: 1rem; /* Slightly reduced border radius */
    transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;

  &:hover {
    transform: translateY(-5px);
    background-color: var(--green);
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 1rem; /* Further reduce padding on smaller screens */
    border-radius: 0.8rem; /* Adjust border radius for mobile */
  }

  @media (max-width: 480px) {
    padding: 0.8rem; /* Even smaller padding for very small screens */
    flex-direction: column;
    gap: 0.5rem; /* Add gap between child elements */
    font-size: 0.85rem; /* Reduce font size for smaller screens */
  }
}



      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a {
          color: #ffff;
          border-bottom: 1px solid var(--) green;
          transition: color 0.25s;
          &:hover {
            color: #94c248;
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
