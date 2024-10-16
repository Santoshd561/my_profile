import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import Style from './Contact.module.scss'; // Import your SCSS file

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <Container className={Style.contactContainer}>
            {/* Coming Soon Message */}
            <Box className={Style.comingSoonMessage}>
                Coming Soon!
            </Box>

            {/* You can keep the form for future use */}
            <Typography variant="h4" component="h1" className={Style.title}>
                Contact Me
            </Typography>
            <form onSubmit={handleSubmit} className={Style.form}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    disabled
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    disabled
                />
                <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    disabled
                />
                <Button type="submit" variant="contained" color="primary" disabled>
                    Send Message
                </Button>
            </form>
        </Container>
    );
};

export default ContactMe;
