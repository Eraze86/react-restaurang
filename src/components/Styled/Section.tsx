import styled from "styled-components";

export const Section = styled.section`
  background-color: #FBEDD4;
  color: #1F2D32;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 7rem 3rem;
  padding: 3rem;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  top: -7rem;
  z-index: 2;

  section{
    width:65%;
    text-align: left;
    padding-left: 3rem;
    padding-right: 4rem;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    top: 1rem;
    margin: 0 1rem 3rem;
    padding: 0.6rem;
    flex-direction: column;
    section{
      padding-left: 0.5rem;
      padding-right: 0.5em;
      width:100%;

    }
  }
`

export const SectionAdmin = styled(Section)`
  max-width:100vw;
`

export const BookingSection = styled(Section)`
  margin-top: 5rem;
  padding: 0;
  box-sizing: border-box;
  top: 0;

  img{
    max-width: 50%;
  }

  div.confirmed{
    padding-top: 2rem;
    flex-direction: column;
    font-size: 1.4rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 7rem;
    img{
      max-width: 100%;
      height: 8rem;
      object-fit: cover;
    }
  }
`

export const SectionEditBooking = styled(Section)`
  box-sizing: border-box;
  position: fixed;
  flex-direction: column;
  top: 15vh;
  width: 40vw;

  @media (max-width: 768px) {
    margin-top: 0rem;
    width: 90%;
    img{
      max-width: 100%;
      height: 8rem;
      object-fit: cover;
    }
  }
`

export const NotFoundSection = styled(Section)`
  margin-top: 5rem;
  padding: 0;
  box-sizing: border-box;
  top: 0;

  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`