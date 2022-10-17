import { Envelope } from 'phosphor-react'
import React from 'react'
import { Button } from '../../components/button'
import { Checkbox } from '../../components/checkbox'
import { Heading } from '../../components/heading'
import { Logo } from '../../components/logo'
import { Text } from '../../components/text'
import { TextInput } from '../../components/textInput'

export function SignIn() {
  return (
    <div className="App">
      <header className='header'>  
        <Logo />

        <Heading size='lg' className='mt-4'>
          ignite Lab
        </Heading>

        <Text colorText='text-gray-400' size="lg" className="mt-1">
            Faça login e comece a usar!
        </Text>
      </header>

      <form action="" className='form'>
        <label htmlFor="email" className='label'>
          <Text className='font-semibold' >Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='label'>
          <Text className='font-semibold' >Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='password' id='password' placeholder='*******' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="remember">
          <Checkbox id='remember'/>
          <Text size="sm" colorText="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='footer'>
        <Text asChild size='sm'>
          <a href="" className='link'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='link'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
