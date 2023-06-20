import {Box, Button, Container,  TextField, Typography} from "@mui/material";
import Title from "./components/Title";
import Input from "./components/Input";
import {task} from "./components"

function App() {
    return(
        <Container>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",my:"3rem"}}>
                <Title />
                <Input />

            </Box>
        </Container>
    )
}

export default App
