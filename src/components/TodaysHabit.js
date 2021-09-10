import styled from "styled-components"

const TodaysHabit = () =>(
    <TodaysHabitContainer>
        <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
        <HabitSequence>
            <p>Sequencia Atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
        </HabitSequence>
    </TodaysHabitContainer>
)

const TodaysHabitContainer = styled.div`
    width: calc(100vw - 34px);
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
`

const HabitTitle = styled.p`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`

const HabitSequence = styled.div`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    margin-top: 7px;
`


export default TodaysHabit