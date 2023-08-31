import { Meta, StoryObj } from '@storybook/react';
import { ChevronRight } from '../globals/icons';
import { Icon } from './Icon';
const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'Icon',
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const IconDefault: Story = {
    render: ({ ...args }) => (
        <div style={{
            margin: '50px', width: '50px',
            height: '50px', background: '#656565'
        }}>
            <Icon {...args} />
        </div>
    ),
    args: {
        color: 'white',
        children: <ChevronRight />,
        title: "Right",
        width: '48px',
        height: '48px',
    }
}