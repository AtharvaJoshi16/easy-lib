export interface AlertProps {
    variant: 'success' | 'error' | 'info' | 'warning',
    children: string;
    timeout: number;
}