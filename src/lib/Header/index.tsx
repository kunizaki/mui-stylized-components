import * as React from 'react';
import { styled } from '@mui/material/styles';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 12,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = (props: any) => {
  const { helpFunction, logo, menuApps, menuUser, notifications, title, userAvatar } = props;
  const [anchorElUserMenu, setAnchorElUserMenu] = React.useState<null | HTMLElement>(null);
  const [anchorElAppsMenu, setAnchorElAppsMenu] = React.useState<null | HTMLElement>(null);
  const [anchorElNotifications, setAnchorElNotifications] = React.useState<null | HTMLElement>(null);

  const isMenuUserOpen = Boolean(anchorElUserMenu);
  const isMenuAppsOpen = Boolean(anchorElAppsMenu);
  const isNotificationsOpen = Boolean(anchorElNotifications);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUserMenu(event.currentTarget);
  };
  const handleAppsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAppsMenu(event.currentTarget);
  };
  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorElUserMenu(null);
  };
  const handleAppsMenuClose = () => {
    setAnchorElAppsMenu(null);
  };
  const handleNotificationsClose = () => {
    setAnchorElNotifications(null);
  };

  const renderUserMenu = (
    <Menu
      anchorEl={anchorElUserMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={'primary-search-account-menu'}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuUserOpen}
      onClose={handleUserMenuClose}
      sx={{ zIndex: 10000}}
    >
      {menuUser && menuUser.map((mItem: any) => (
        <MenuItem key={mItem.name} onClick={mItem.click}>{mItem.name}</MenuItem>
      ))}
    </Menu>
  );

  const renderAppsMenu = (
    <Menu
      anchorEl={anchorElAppsMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={'primary-search-apps-menu'}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuAppsOpen}
      onClose={handleAppsMenuClose}
      sx={{ zIndex: 10000}}
    >
      {menuApps && menuApps.map((aItem: any) => (
        <MenuItem key={aItem.name} onClick={aItem.click}>{aItem.name}</MenuItem>
      ))}
    </Menu>
  );

  const renderNotifications = (
    <Menu
      anchorEl={anchorElNotifications}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={'primary-search-notifications'}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isNotificationsOpen}
      onClose={handleNotificationsClose}
      sx={{ zIndex: 10000}}
    >
      {notifications && notifications.map((nItem: any) => (
        <MenuItem key={nItem.name} onClick={nItem.click}>{nItem.name}</MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 10000 }} color="inherit">
        <Toolbar>
          <img src={logo} height={45} alt="logo" style={{ padding: 10 }} />
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', alignContent: 'center' }}>
            <IconButton
              size="large"
              aria-label="Notificações"
              aria-controls={'primary-search-notifications'}
              aria-haspopup="true"
              onClick={handleNotificationsOpen}
              color="default"
              sx={{ width: 40, height: 40 }}
            >
              <StyledBadge badgeContent={notifications ? notifications.length : 0} color="error">
                <NotificationsOutlinedIcon style={{ width: 25, height: 25 }} />
              </StyledBadge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="Ajuda"
              color="default"
              onClick={helpFunction}
              sx={{ width: 40, height: 40 }}
            >
              <HelpOutlineOutlinedIcon style={{ width: 25, height: 25 }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="Menu de Aplicações"
              aria-controls={'primary-search-apps-menu'}
              aria-haspopup="true"
              onClick={handleAppsMenuOpen}
              color="default"
              sx={{ width: 40, height: 40 }}
            >
              <AppsOutlinedIcon style={{ width: 25, height: 25 }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="Menu do Usuário"
              aria-controls={'primary-search-account-menu'}
              aria-haspopup="true"
              onClick={handleUserMenuOpen}
              color="inherit"
            >
              {userAvatar ? <Avatar src={userAvatar} alt="Foto do Usuário" sx={{ width: 45, height: 45 }} /> : <Avatar alt="Usuário" sx={{ width: 45, height: 45 }}><AccountCircleIcon sx={{ fontSize: 44, }} color="inherit" /></Avatar>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {menuUser && renderUserMenu}
      {menuApps && renderAppsMenu}
      {notifications && renderNotifications}
    </>
  );
}

export default Header;