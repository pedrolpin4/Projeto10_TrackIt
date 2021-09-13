import { useContext } from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import PercentageContext from '../contexts/PercentageContext';

const ProgressBar = () => {
    const{
        percentage
    } = useContext(PercentageContext)
    
    return (
    <ProgressBarContainer>
        <CircularProgressbar
            value= {Math.round(percentage)}
            text= "Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
                width: "91px",
                height: "91px",
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
            })}
        />
    </ProgressBarContainer>
    )
}


const ProgressBarContainer = styled.div`
    margin-bottom: 35px;
    width: 91px;
    height: 91px;
`

export default ProgressBar

