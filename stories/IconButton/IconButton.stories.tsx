import { Meta, StoryObj } from '@storybook/react';
import { ChevronRight, Trashbin } from '../globals/icons';
import { IconButton } from './IconButton';
const meta: Meta<typeof IconButton> = {
    component: IconButton,
    title: 'IconButton',
};

export default meta;
type Story = StoryObj<typeof IconButton>;
const handleClick = () => {
    console.log("Clicked...");
}
export const IconButtonVariants: Story = {
    render: ({ ...args }) => (
        <div style={{ margin: '40px' }}>
            <IconButton {...args}>
                <ChevronRight />
            </IconButton>
        </div>
    ),
    args: {
        color: "primary",
        variant: "contained",
        onClick: handleClick,
    }
}