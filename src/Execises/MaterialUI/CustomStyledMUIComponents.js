import styled from "@emotion/styled";
import Button from "@mui/material/Button"
import theme from "./theme"


export const BlueButton = styled(Button)({
    backgroundColor:"skyBlue",
    color:"#888",
    margin:5,
    "&:hover":{
        backgroundColor:"Lightblue"
    },
    "&:disabled":{
        backgroundColor:"lightGray",
        color:"white"
    }
    })



    export const ButtonWithTheme = styled(Button)((theme)=>({
        backgroundColor:theme.palette.otherColor.main,
        color:"#888",
        margin:5,
        "&:hover":{
            backgroundColor:"Lightblue"
        },
        "&:disabled":{
            backgroundColor:"lightGray",
            color:"white"
        }
        }))