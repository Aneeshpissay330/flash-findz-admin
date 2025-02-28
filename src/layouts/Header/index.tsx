import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  ShoppingBag as ShoppingBagIcon,
  Category as CategoryIcon,
  ShoppingCart as ShoppingCartIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon
} from '@mui/icons-material';
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { colors } from '../../colors';
import { AppBar } from '../../components/AppBar';
import { Drawer } from '../../components/Drawer';
import { DrawerHeader } from '../../components/DrawerHeader';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const theme = useTheme();
  const isDarkMode = true;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sidebarItems = [
    { title: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { title: "Users", icon: <PeopleIcon />, path: "/users" },
    { title: "Products", icon: <ShoppingBagIcon />, path: "/products" },
    { title: "Categories", icon: <CategoryIcon />, path: "/categories" },
    { title: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar sx={{ backgroundColor: isDarkMode ? colors.darkBackground : colors.lightBackground }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
                color: isDarkMode ? colors.darkTextColor : colors.lightTextColor
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: isDarkMode ? colors.darkTextColor : colors.lightTextColor, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Flash Findz
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <IconButton onClick={() => null} sx={{ color: isDarkMode ? colors.darkTextColor : colors.lightTextColor }}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: isDarkMode ? colors.darkTextColor : colors.lightTextColor }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block', color: isDarkMode ? colors.darkTextColor : colors.lightTextColor }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: isDarkMode ? colors.darkTextColor : colors.lightTextColor
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

export default Header;