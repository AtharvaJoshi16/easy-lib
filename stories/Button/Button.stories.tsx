import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ChevronRight } from '../globals/icons';
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonVariants: Story = {
    render: ({ ...args }) => (
        <div style={{ margin: '30px', display: 'flex', gap: '20px' }}>
            <Button {...args}>
                Primary
            </Button>
            <Button {...args}>
                Secondary
            </Button>
        </div>
    ),
    args: {
        variant: 'contained',
        size: 'medium',
        color: 'primary',
        icon: <ChevronRight />
    }
}

export const ButtonDisabled: Story = {
    render: ({ ...args }) => (
        <div style={{ margin: '30px', display: 'flex', gap: '20px' }}>
            <Button {...args}>
                Primary
            </Button>
            <Button {...args}>
                Secondary
            </Button>
        </div>
    ),
    args: {
        variant: 'contained',
        size: 'medium',
        color: 'primary',
        disabled: true
    }
}