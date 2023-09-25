import { Typography } from "../Typography"

export const AlertHeading = ({
    children,
}) => {
    return (
        <Typography variant="h4" style="bold">
            {children}
        </Typography>
    )
}