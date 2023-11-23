import { Container} from './style'


const Home = () => {
    return (
        <div style={{height:"100%",width:"100vw", display:"flex"}}>
            <Container>
            <h1>Olá, você está na Home Page</h1>
            <h2>Teste flex</h2>
            </Container>
            <div style={{backgroundColor:"blue", width:"30vw"}}>
            <h1>Olá, você está na Home Page</h1>
            <h2>Teste flex</h2>
            </div>
        </div>
    )
}

export default Home;