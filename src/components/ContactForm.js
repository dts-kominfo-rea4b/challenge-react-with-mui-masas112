// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ handleClick }) => {
    const [newContact, setNewContact] = useState('');
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    return (
        <div>
            <div>
                <TextField
                    label="Nama"
                    variant="filled"
                    value={newContact}
                    onChange={(e) => {
                        setNewContact(e.target.value);
                    }}
                />
            </div>
            <div>
                <TextField label="Phone" />
            </div>
            <div>
                <TextField label="Email" />
            </div>
            <div>
                <TextField label="Photo Url" />
            </div>

            <Button
                onClick={() => { handleClick(newContact); setNewContact(''); }
                }
            >
                Add New</Button>
        </div >
    );
}

export default ContactForm;