import { Meta, StoryObj} from '@storybook/react'
import { userEvent, within, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from '.'

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj  = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'Tiago@email.com.br')
        userEvent.type(canvas.getByPlaceholderText('*******'), '123456789')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(()=> {
            return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
        })
        
    }
}
