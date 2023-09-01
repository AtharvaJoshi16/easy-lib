import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ChevronRight } from '../globals/icons';
import { Icon } from '../Icon';
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
    argTypes: {
        iconPosition: {
            options: ['left', 'right', 'none'],
            control: { type: 'radio' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

const handleClick = () => {
    console.info("Clicked...");
}

const icon = <Icon
    color='light' title='Right'>
    <ChevronRight />
</Icon>


export const ButtonVariants: Story = {
    render: ({ ...args }) => (
        <div style={{ margin: '30px', display: 'flex', gap: '20px' }}>
            <Button {...args}>
                PRIMARY
            </Button>
            <Button {...args}>
                SECONDARY
            </Button>
        </div>
    ),
    args: {
        variant: 'contained',
        size: 'medium',
        color: 'primary',
        icon: icon,
        onClick: handleClick,
    }
}

export const ButtonDisabled: Story = {
    render: ({ ...args }) => (
        <div style={{ margin: '30px', display: 'flex', gap: '20px' }}>
            <Button {...args}>
                PRIMARY
            </Button>
            <Button {...args}>
                SECONDARY
            </Button>
        </div>
    ),
    args: {
        variant: 'contained',
        size: 'medium',
        color: 'primary',
        disabled: true,
        icon: icon,
        iconPosition: 'right'
    }
}