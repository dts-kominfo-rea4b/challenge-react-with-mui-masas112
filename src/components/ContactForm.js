// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ handleClick }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    return (
        <div>
            <div>
                <TextField
                    label="Nama"
                    variant="filled"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            <div>
                <TextField
                    label="Phone"
                    variant="filled"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
            </div>
            <div>
                <TextField
                    label="Email"
                    variant="filled"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <div>
                <TextField
                    label="Photo Url"
                    variant="filled"
                    value={photo}
                    onChange={(e) => {
                        setPhoto(e.target.value);
                    }}
                />
            </div>

            <Button
                onClick={() => { handleClick(name, phone, email, photo); }
                }
            >
                Add New</Button>
        </div >
    );
}

export default ContactForm;