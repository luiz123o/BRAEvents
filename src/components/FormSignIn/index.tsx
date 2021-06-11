import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

        <Button size="large" fullWidth type="submit">
          Entrar
        </Button>

        <S.FormLink>
          Não tem uma conta?{' '}
          <Link href="/sign-up">
            <a>Cadastre-se já</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
export default FormSignIn
