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
            <Alert.Heading>
                This is a sample alert heading.
            </Alert.Heading>
            <Alert.Text>
                This is sample alert text.
            </Alert.Text>
        </Alert>
    ),
    args: {
        variant: 'info'
    }
}