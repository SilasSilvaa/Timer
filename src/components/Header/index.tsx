
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import {Timer, Scroll, Alarm} from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Alarm size={44}/>
      <nav>
        <NavLink to="/">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
