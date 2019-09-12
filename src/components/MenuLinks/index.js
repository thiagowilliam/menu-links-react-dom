import React from 'react';

import links from './content';
import * as S from './styled';

export default function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItems key={i}>
            <S.MenuLinksLink to={link.url}>{link.label}</S.MenuLinksLink>
          </S.MenuLinksItems>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
}
