import styled from 'styled-components';
// export const _NavLink = styled(NavLink)`
import {Link} from 'react-router-dom';


export const Nav_ = styled.div`
display:flex;
align-items:center;
margin-left: 40px;
margin-right: 424px;
`;

export const NavLink_ = styled(Link)`
color: #fff;
text-decoration:none;
margin-right: 35px;
font-size: 16px;
line-height: 19px;
font-weight:400;
`;
