import { Box, Stack } from "@mui/material";

import { useResolvedPath } from "react-router-dom";
import DarkLightSwitch from "./DarkLightSwitch";

import Logo from "./Logo";
import TopNavItem from "./TopNavItem";
import { navItems } from "../navItems";

type NavbarProps = {
  toggleTheme: () => void;
};

function BigScreenNavbar({ toggleTheme }: NavbarProps) {
  const pathname = useResolvedPath().pathname;

  return (
    <Box
      mt={{ xs: 2, sm: 2, md: 5 }}
      height="80px"
      width="80%"
      maxWidth={1200}
      display={{ xs: "none", sm: "none", md: "flex" }}
      flexDirection="row"
      alignItems="center"
      position="relative"
    >
      <Logo />
      <Box flexGrow={1}></Box>
      <Stack
        direction="row"
        gap={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
        alignItems="center"
      >
        {navItems.map((item, i) => {
          return (
            <TopNavItem
              key={i}
              pathname={pathname}
              to={item.to}
              path={item.path}
            />
          );
        })}

        <DarkLightSwitch toggleTheme={toggleTheme} />
      </Stack>
    </Box>
  );
}

export default BigScreenNavbar;
