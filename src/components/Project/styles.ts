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
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 1.5rem 1.2rem; /* Reduced padding for better mobile fit */
      background-color: #2b2b2b;
      border-radius: 1rem;
      transition: transform 0.25s ease, background-color 0.25s ease,
        color 0.25s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      /* Hover effect for desktop */
      &:hover {
        transform: translateY(-5px);
        background-color: var(--green);
        color: #000;
      }

      /* Header styles */
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        font-size: 1.5rem; /* Reduced font size for h3 */
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
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
          flex-wrap: wrap;
          gap: 1rem; /* Adjusted gap */
          font-size: 1.2rem;
          opacity: 0.6;
        }
      }
    }
  }

  /* For screens smaller than 960px (tablets and below) */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr; /* 2 columns on smaller screens */
    }
  }

  /* For screens smaller than 740px (mobile devices) */
  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr; /* Single column on very small screens */
    }

    .project {
      padding: 1rem; /* Reduce padding for smaller screens */
      border-radius: 0.8rem; /* Slightly reduce border radius */
      font-size: 0.9rem; /* Adjust font size for mobile */
    }

    .project header {
      flex-direction: column; /* Stack the header content on mobile */
      align-items: flex-start;
    }

    .project-links a > img {
      width: 4rem; /* Reduce icon size for mobile */
    }

    .tech-list {
      font-size: 1rem; /* Smaller font size for tech list */
    }

    h3 {
      font-size: 1.25rem; /* Smaller font size for project title */
    }

    p {
      font-size: 0.9rem; /* Adjust paragraph font size */
    }
  }

  /* Further tweaks for very small screens (less than 480px) */
  @media (max-width: 480px) {
    .project {
      padding: 0.8rem; /* Even smaller padding */
    }

    .project header {
      gap: 0.8rem; /* Reduce gap in header for small screens */
    }

    h3 {
      font-size: 1.1rem; /* Smaller title size */
    }

    p {
      font-size: 0.85rem; /* Adjust paragraph font size further */
    }

    .tech-list {
      font-size: 0.9rem; /* Further reduce tech list font size */
    }
  }
`;
