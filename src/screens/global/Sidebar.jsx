import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { themeColors } from "../../theme";

export const Sidebar = () => {
    const theme = useTheme();
    const colors = themeColors(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");


    return (
        <ProSidebar 
            backgroundColor={colors.primary[400]}
            rootStyles={{border: 0}}>
             <Menu>
                <MenuItem>
                    {
                        !isCollapsed && 
                        (<Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px">
                                <Typography variant="h3" color={colors.primary[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton>
                                    <MenuOutlinedIcon />
                                </IconButton>
                        </Box>)
                    }
                </MenuItem>

                {/* USER */}
                <Box>

                </Box>

            </Menu>
        </ProSidebar>);
};