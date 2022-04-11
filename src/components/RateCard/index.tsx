import styled from "styled-components";
import Star from '../../icon-star.svg'
import RateButton from "./RateButton";

const Container = styled.div`
    max-width: 20rem;
    max-height: 25rem;
    border-radius: 5%;
    padding: 2em;
    background-color: var(--color-blue);
    margin: auto;
    @media (min-width: 40em) {
        max-width: 25rem;
    }
`
const RatingStar = styled.button`
    padding: 10px;
    background-color: var(--color-dark-blue);
    border-radius: 50%;
    border: none;
    @media (min-width: 40em) {
        padding: 15px;
    }
`

const H1 = styled.h1`
    font-weight: 700;
    margin: .7em 0;
    padding: 0;
    font-size: 1.6rem;
    @media (min-width: 40em) {
        font-size: 2rem;
    }
`
const Paragraph = styled.p`
    font-size: 12px;
    color: var(--color-grey);
    @media (min-width: 40em) {
        font-size: 15px;
    }
`

const Rate = styled.div`
    display: flex;
    gap: .9em;
    margin: 1em 0;
    width: 100%;
`

const SubmitButton = styled.button`
   width : 100%;
   padding: .8em 0;
   text-transform: uppercase;
   font-weight: 700;
   color: var(--color-white);
   background-color: var(--color-orange);
   border: none;
   border-radius: 50px;
   cursor: pointer;
   :hover{
    background-color: var(--color-white);
    color: var(--color-orange);
   }
`

function RateCard() {
  return (
    <Container>
     <RatingStar>
         <img src={Star} alt="" />
     </RatingStar>
     <H1>How did we do?</H1>
     <Paragraph>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
     </Paragraph>
     <form>
     <Rate>
        <RateButton rateNumber={1}/>
        <RateButton rateNumber={2}/>
        <RateButton rateNumber={3}/>
        <RateButton rateNumber={4}/>
        <RateButton rateNumber={5}/>
     </Rate>
     <SubmitButton type="submit">
         Submit
     </SubmitButton>
     </form>
    </Container>
  )
}

export default RateCard
