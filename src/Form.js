import React, { useState, useEffect } from 'react';
import "./form.css";
import { Box, TextField, FormControl, Input, InputLabel, FormHelperText } from '@mui/material';

function Form1() {

    //Initial helper texts
    const [untxt, setUntxt] = useState(" UserName");
    const [emtxt, setEmtxt] = useState(" email");
    const [pwtxt, setPwtxt] = useState(" enter your Password");
    const [pwlength, setPwlength] = useState("At least 8 characters");

    //To check the Confirm Password
    const [pw, setPw] = useState("");

    //To change color based on Input
    const [uc, setUc] = useState("c0");
    const [ec, setEc] = useState("c0");
    const [pwc, setPwc] = useState("c0");
    

    //Handling the UserName Input
    const handleUn = (event) => {
        const val = event.target.value;

        if (val === "") {
            setUntxt("fill the column");
            setUc("c0");
        }
        else if (val === "Madhu") {
            setUntxt("Correct username");
            setUc("c4");
        }
        else {
            setUntxt("Incorrect Username");
            setUc("c2");
        }
    }

    //Handling the email Input
    const handleEm = (event) => {
        const val = event.target.value;

        if (val ===""){
            setEmtxt("Enter your Email");
            setEc("c0");
        }

        else if (val === "727721eucs064"){
            setEmtxt("Correct Email-Id");
            setEc("c4");
        }
        else {
            setEmtxt("Incorrect Email-Id");
            setEc("c2");
        }
    }

    //Handling the Password Input
    const handlePw = (event) => {
        const val = event.target.value;
        setPw(val);
        // handleCpw();

        if (val.length < 8) {
            setPwlength("At least 8 characters");
        }
        else if (val.length >= 8) {
            setPwlength("");
        }

        if (val === "") {
            setPwtxt("Please enter your Password");
            setPwc("c0");
        }
        else if (pwValidate(event.target.value) === 1) {
            setPwtxt("Password is weak");
            setPwc("c1");
        }
        else if (pwValidate(event.target.value) === 2) {
            setPwtxt("Password is good");
            setPwc("c2");
        }
        else if (pwValidate(event.target.value) === 3) {
            setPwtxt("Password is strong");
            setPwc("c3");
        }
        else if (pwValidate(event.target.value) === 4 && val.length >= 8) {
            setPwtxt("Password is very strong");
            setPwc("c4");
        }

    }

    

    //Validating the password
    const pwValidate = (pw) => {
        let strength = 0;

        if (pw.match(/(?=.*[a-z])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[A-Z])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[0-9])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[!@#\$%\^&\*])/)) {
            strength++;
        }

        return strength;
    }

    //Component to be rendered
    return (
        <Box className='box' sx={{
            backgroundColor: 'white',
            width: 500,
            height: 500,
            borderRadius: 10
        }}>
            <div className='box-conts'>
            

                <FormControl variant="standard">
                    <InputLabel htmlFor="uname">Your UserName</InputLabel>
                    <Input
                        id="uname"
                        onChange={handleUn}
                    />
                    <FormHelperText id={uc} sx={{ color: "black" }}>{untxt}</FormHelperText>
                </FormControl>
                <br /><br />


                <FormControl variant="standard">
                    <InputLabel htmlFor="email"> Your Email-ID</InputLabel>
                    <Input
                        id="email"
                        onChange={handleEm}
                    />
                    <FormHelperText id={ec} sx={{ color: "black"}}>{emtxt}</FormHelperText> 
                </FormControl>
                <br /><br />


                <FormControl variant="standard">
                    <InputLabel htmlFor="pw">Your Password</InputLabel>
                    <Input
                        type="password"
                        id="pw"
                        onChange={handlePw}
                    />
                    <FormHelperText id="pwl-text" sx={{ color: "black" }}>{pwlength}</FormHelperText>
                    <FormHelperText id={pwc} sx={{ color: { pwc } }}>{pwtxt}</FormHelperText>
                </FormControl>
                <br /><br />

                

            </div>
        </Box>
    )
}

export default Form1;