import { Meta, StoryObj} from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import { Text } from '../text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return(
                <div className='storybookDecorator-checkBox'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps>  = {}
