import { Breadcrumbs, Container, Link } from "@mui/material";
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

const CustomBreadCrumbs = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        const newBreadcrumbs = pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            const label = value
                .replace(/-/g, " ")
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

            return { label, to };
        });
        setBreadcrumbs(newBreadcrumbs);
    }, [location]);

    return (
        <Container sx={{ pt: 2 }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link component={RouterLink} underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }} to="/">
                    <HomeOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                {breadcrumbs.map((breadcrumb, index) => (
                    <Link key={index} color="textPrimary" component={RouterLink} to={breadcrumb.to} underline="hover">
                        {breadcrumb.label}
                    </Link>
                ))}
            </Breadcrumbs>
        </Container>
    );
};

export default CustomBreadCrumbs;
