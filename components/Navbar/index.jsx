import { 
  NavBar,
  NavBarContainer,
  NavItem,
  NavBarLinks,
  NavBarLogo,
  NavLink,
  NavBarIcons,
  NavBarIconLink
} from "./Navbar.style";
import Image from "next/image";

import system76logo from '../../assets/system76logo.png';
import { FaComments, FaUserAlt } from 'react-icons/fa';
import { RiLifebuoyFill } from 'react-icons/ri';

export default function Navbar(){
  return(
    <NavBar>
      <NavBarContainer>
        
        <NavBarLogo href="https://system76.com">
          <div className="imageWrapper">
            <Image src={system76logo}/>
          </div>
        </NavBarLogo>

        <NavBarLinks>
          
          <NavItem>
            <NavLink>
              laptops
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              desktops
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              mini
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              servers
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              pop!_os
            </NavLink>
          </NavItem>

        </NavBarLinks>

        <NavBarIcons>

          <NavBarIconLink>
            <FaComments />
          </NavBarIconLink>

          <NavBarIconLink>
            <RiLifebuoyFill />
          </NavBarIconLink>

          <NavBarIconLink>
            <FaUserAlt />
          </NavBarIconLink>

        </NavBarIcons>

      </NavBarContainer>
    </NavBar>
  );
}