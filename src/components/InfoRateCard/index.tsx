import styled from 'styled-components';
import Illutration from '../../illustration-thank-you.svg'

const H1 = styled.h1`
    font-weight: 400;
    margin: .7em 0;
    padding: 0;
    font-size: 1.4rem;
    @media (min-width: 40em) {
        font-size: 1.4rem;
    }
`

const Container = styled.div`
    max-width: 20rem;
    max-height: 25rem;
    border-radius: 5%;
    padding: 2em;
    background-color: var(--color-blue);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    @media (min-width: 40em) {
        max-width: 25rem;
    }
`

const RateIllustration = styled.div`
    background-color: var(--color-dark-blue);
    padding: .5rem 1em;
    font-size: 15px;
    color: var(--color-orange);
    border-radius: 50px;
    margin: 1.5em 0;
`
export const Paragraph = styled.p`
    font-size: 12px;
    text-align: center;
    color: var(--color-grey);
    @media (min-width: 40em) {
        font-size: 15px;
    }
`

function Rating() {
    return (
        <Container>
            <img src={Illutration} alt="" />
            <RateIllustration>
                You selected 4 out of 5
            </RateIllustration>
            <H1>Thank you!</H1>
            <Paragraph>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </Paragraph>
        </Container>
    )
}

export default Rating
