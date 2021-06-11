import * as S from './styles'
import Link from 'next/link'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { AirplaneTicket as TicketIcon } from '@styled-icons/material-outlined/AirplaneTicket'
import { Home as HomeIcon } from '@styled-icons/material-outlined/Home'
import { Stars as StarsIcon } from '@styled-icons/material-outlined/Stars'
import { VerifiedUser as UserCircleIcon } from '@styled-icons/material-outlined/VerifiedUser'
import Logo from '../Logo'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import Button from 'components/Button'
import Wave from './Wave'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.WrapperIcon onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abrir Menu" />
        </S.WrapperIcon>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/">
            <S.MenuLink>
              <MediaMatch lessThan="medium">
                <HomeIcon />
              </MediaMatch>
              Início
            </S.MenuLink>
          </Link>
          <S.MenuLink href="#">
            <MediaMatch lessThan="medium">
              <TicketIcon />
            </MediaMatch>
            <MediaMatch lessThan="medium">Palestras</MediaMatch>
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.WrapperIcon>
          <MediaMatch lessThan="medium">
            <SearchIcon aria-label="Pesquisar" />
          </MediaMatch>
        </S.WrapperIcon>
        <Link href="/cart">
          <S.WrapperIcon>
            <ShoppingCartIcon aria-label="Carrinho de compras" />
          </S.WrapperIcon>
        </Link>
        {
          <MediaMatch greaterThan="medium">
            <Link href="sign-in">
              <Button>Entrar</Button>
            </Link>
          </MediaMatch>
        }
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Wave />
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/">
            <S.MenuLink href="#">
              <HomeIcon />
              Início
            </S.MenuLink>
          </Link>
          <S.MenuLink href="#">
            <TicketIcon />
            Palestras
          </S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">
                <StarsIcon />
                Favoritos
              </S.MenuLink>
              <S.MenuLink href="#">
                <UserCircleIcon />
                Perfil
              </S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Entrar
            </Button>
            <span>Ou</span>
            <S.CreateAccount href="#" title="Cadastrar">
              Criar conta
            </S.CreateAccount>
          </S.RegisterBox>
        )}
        {!!username && <span>Sair</span>}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
