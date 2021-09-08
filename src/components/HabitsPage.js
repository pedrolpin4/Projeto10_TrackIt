import{
    Menu
} from "./style2"

const HabitsPage = () => (
    <Menu image = "https://veja.abril.com.br/wp-content/uploads/2016/05/alx_guerra-dos-tronos-sexta-20160211-024_original-e1539650842412.jpeg">
        <p>TrackIt</p>
        <img src = {props => props.image}/>
    </Menu>
)

export default HabitsPage