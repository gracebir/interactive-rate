import styled from "styled-components";

type rateProps={
    rateNumber: number;
}

const ButtonRate = styled.button`
    padding: .9em 1.2em;
    border: none;
    background-color: var(--color-dark-blue);
    color: var(--color-white);
    border-radius: 50%;
    cursor: pointer;
    :hover{
        background-color: var(--color-medium-grey);
    } 
    @media (min-width:40em) {
        padding: 1.5em 1.8em;
    }
`

function RateButton({rateNumber}: rateProps) {
  return (
    <ButtonRate>
      {rateNumber}
    </ButtonRate>
  )
}

export default RateButton
