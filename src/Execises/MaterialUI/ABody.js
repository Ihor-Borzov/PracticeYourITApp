import React, { useState } from "react"
import Sidebar from "./SidebarMUI"
import Feed from "./FeedMUI"
import RightBar from "./RightBarMUI"
import { Box, Container, Stack, ThemeProvider, createTheme } from "@mui/material"
import NavbarMUI from "./NavbarMUI"

let ABody = () => {
const [mode, setMode] = useState("dark")

 {/* this is the way to apply a dark mode in 3 steps, and this is step #1 */}
    const darkTheme = createTheme({     
        palette:{
            mode:mode
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>    {/*step #2 - this is the way to apply a dark mode */}
        <Box bgcolor={"background.default"}  color={"text.primary"} sx={{position:"relative"}}  >    {/* step #3 - this is the way to apply a dark mode */}
            <NavbarMUI/>
            <Stack direction="row" spacing={2} justifyContent="space-between" >
                <Sidebar setMode={setMode} mode={mode} />
                <Feed />
                <RightBar />
            </Stack>
        </Box>
        </ThemeProvider>
    )
}

export default ABody