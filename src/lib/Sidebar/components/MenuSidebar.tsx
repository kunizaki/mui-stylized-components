import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

const MenuSidebar = (props: any) => {
  const {sideBarMenuItems} = props;

  // Inicio do código do submenu ainda em desenvolvimento
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);;
  const [subMenu, setSubMenu] = useState<any>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, clickFunction: any) => {
    setAnchorEl(event.currentTarget);
    clickFunction();
  };

  const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>, subMenuItems: any) => {
    if (Array.isArray(subMenuItems)) {      
      alert("Submenu em desenvolvimento...");
      renderSubMenu(subMenuItems);
    } else {
      handleClick(event, subMenuItems);
    }
  }

  const renderSubMenu = (subMenuItems: any) => {
    const subMenuRendered = (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subMenuItems && subMenuItems.map((sIten: any, index: any) => (
          <MenuItem key={index} onClick={(event) => handleSubMenuOpen(event, sIten.btnEvent)}>{sIten.btnText}</MenuItem>
        ))}
      </Menu>
    );
    setSubMenu(subMenuRendered);
  }
  // Fim do código do submenu ainda em desenvolvimento

  return (
    <>
      <List>
        {sideBarMenuItems && sideBarMenuItems.map((menuItem: any, index: number) => {
          return (
          <ListItem key={index} disablePadding style={{ height: 40 }}>
            <ListItemButton style={{ height: 45 }} onClick={(event) => handleSubMenuOpen(event, menuItem.btnEvent)}>
              <ListItemIcon>
                {menuItem.btnIcon}
              </ListItemIcon>
              <ListItemText primary={menuItem.btnText} />
            </ListItemButton>
          </ListItem>
        )})}
      </List>

      {/* injeção do submenu ainda em desenvolvimento */}
      {subMenu}
    </>
  )
}

export default MenuSidebar;
