import { styled } from 'styled-components';

export const SkeletonSidebarItem = styled.div`
width: 250px;
height: 150px;
background: #313131;
margin-bottom: 30px;
`;

export const SidebarItem = styled.div`
width: 250px;
height: 150px;
&:not(:last-child) {
  margin-bottom: 30px;
}
`;

export const SidebarLink = styled.a`
width: 100%;
height: 100%;
`;

export const SidebarImg = styled.img`
width: 100%;
height: auto;
`;