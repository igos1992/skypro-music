import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.div`
margin-bottom: 30px;
`;

export const SkeletonSidebarItem = styled.div`
width: 250px;
height: 150px;
background: #313131;

`;

export const SidebarItem = styled.div`
width: 250px;
&:not(:last-child) {
  margin-bottom: 30px;
}
`;

export const SidebarLink = styled(NavLink)`
width: 100%;
height: 100%;
`;

export const SidebarImg = styled.img`
width: 100%;
height: auto;
`;