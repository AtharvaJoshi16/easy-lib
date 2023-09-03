import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Typography } from '../Typography/Typography';

const meta: Meta<typeof Alert> = {
    component: Alert,
    title: 'Alert',
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertDefault: Story = {
    render: ({ ...args }) => (
        <Alert {...args}>
            <Typography variant='p' style='regular'>
                This is a sample alert text.
            </Typography>
        </Alert>
    ),
    args: {
        variant: 'info'
    }
}