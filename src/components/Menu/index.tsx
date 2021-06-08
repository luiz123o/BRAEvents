import * as S from './styles'
import { Menu as MenuIcon } from '@styled-icons/ionicons-outline/Menu'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/ionicons-outline/Search'
import { Close as CloseIcon } from '@styled-icons/ionicons-outline/Close'
import { Ticket as TicketIcon } from '@styled-icons/entypo/Ticket'
import { Home as HomeIcon } from '@styled-icons/evaicons-solid/Home'
import { Stars as StarsIcon } from '@styled-icons/bootstrap/Stars'
import { UserCircle as UserCircleIcon } from '@styled-icons/fa-solid/UserCircle'
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
    <S.Wrapper>
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
          <S.MenuLink href="#">
            <HomeIcon />
            Início
          </S.MenuLink>
          <S.MenuLink href="#">
            <TicketIcon />
            Palestras
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.WrapperIcon>
          <SearchIcon aria-label="Pesquisar" />
        </S.WrapperIcon>
        <S.WrapperIcon>
          <ShoppingCartIcon aria-label="Carrinho de compras" />
        </S.WrapperIcon>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Entrar</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Wave />
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">
            <HomeIcon />
            Início
          </S.MenuLink>
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
