import './global/styles/tailwind.css'
import './app.css'
import { Logo } from './components/logo'
import { Heading } from './components/heading'
import { Text } from './components/text'
import { TextInput } from './components/textInput'
import { Envelope } from 'phosphor-react'

function App() {

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
      </form>
    </div>
  )
}

export default App
