import React from 'react';

import MenuLinks from '../MenuLinks'

import * as S from './slyled';

export default function Header() {
  return (
    <S.Header>
      <S.Centraliza>
        <MenuLinks />
      </S.Centraliza>

    </S.Header>
  )
}

