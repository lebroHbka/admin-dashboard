import { useContext } from "react";
import { Box, useTheme, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ThemeModeContext, themeColors } from "../../theme";

export const Topbar = () => {
    const theme = useTheme();
    const colors = themeColors(theme.palette.mode);
    const context = useContext(ThemeModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p="2">
            <Box display="flex" borderRadius="3px" backgroundColor={colors.primary[400]}>
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            <Box display="flex ">
                <IconButton onClick={context.toggleThemeMode}>
                    {theme.palette.mode === "light"
                        ? (<LightModeOutlinedIcon />)
                        : (<DarkModeOutlinedIcon />)
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
                <IconButton>
                    
                </IconButton>
            </Box>
        </Box>
    );
};