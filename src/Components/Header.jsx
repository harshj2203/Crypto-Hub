import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from "../CryptoContext";

function Header() {
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#ffffff"
            },
            mode: "dark"
        }
    });
    const {currency,setCurrency}=CryptoState();
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container >
                    <Toolbar>
                        <Typography onClick={() => navigate("/")} className="title" style={{
                            fontFamily: 'Montserrat',
                            fontWeight: "bold"
                        }} variant="h5">
                            CRYPTO HUB
                        </Typography>
                        <FormControl >
                            <InputLabel >Currency</InputLabel>
                            <Select variant="outlined" style={{ width: 110, height: 45}} label="Currency" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                                <MenuItem value="USD">USD</MenuItem>
                                <MenuItem value="INR">INR</MenuItem>
                            </Select>
                        </FormControl>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
export default Header;