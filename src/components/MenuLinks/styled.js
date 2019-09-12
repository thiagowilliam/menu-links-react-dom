import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MenuLinksWrapper = styled.nav`
  position: relative;
`;

export const MenuLinksList = styled.ul`
  display: flex;
	align-items: center;
`;

export const MenuLinksItems = styled.li`
  display: flex;
`;


export const MenuLinksLink = styled(Link)`
  color: #c5c5c5;
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	margin: 0 15px;
	transition: all 0.2s;
  text-decoration: none;
  &:hover{
    color: #fff;
  }

`;
