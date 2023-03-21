import React, { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Box, Divider, IconButton, Typography } from '@mui/material';

import MuiDrawer from '@mui/material/Drawer';

import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    paddingTop: 12,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = (props: any) => {
    const { MenuSidebar } = props;
    const [open, setOpen] = useState(true);

    const handleSideBar = () => setOpen(!open);

    return (
        <>
            <Drawer variant="permanent" open={open}>
                <Box sx={{ paddingTop: 10 }}>
                  {MenuSidebar}
                </Box>
                <Box sx={{ position: "absolute", bottom: 0, width: '100%' }}>
                  <Divider />
                  <Box sx={{ display: 'flex', alignContent: 'center', alignItems: 'center', width: '100%', paddingY: "10px" }}>
                        <IconButton onClick={() => handleSideBar()} sx={{ marginX: 0.5 }}>
                            {open ? <KeyboardDoubleArrowLeftOutlinedIcon sx={{ width: 30, height: 30 }} /> : <KeyboardDoubleArrowRightOutlinedIcon sx={{ width: 30, height: 30 }} />}
                        </IconButton>
                        <Typography sx={{ fontSize: "16px", fontWeight: "700", paddingX: 2, color: 'grey' }}>Esconder Menu</Typography>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

export default Sidebar;