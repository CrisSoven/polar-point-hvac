import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SubtitleContent = ({ subtitle, text }) => {
    return (
        <Box>
            <Typography
                variant={"h5"}
                fontWeight={500}
                mb={1}
            >
                {subtitle}
            </Typography>
            <Typography>
                {text}
            </Typography>
        </Box>
    );
};

SubtitleContent.propTypes = {
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SubtitleContent;
