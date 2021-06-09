import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from 'contexts/AuthContext'

const FormSignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      email,
      password
    }
    await signIn(data)
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
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
