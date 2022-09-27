import './App.css';
import './style.css';
import { useState } from "react";
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { Grid } from '@mui/material';
import ContactForm from './components/ContactForm';
const App = () => {
  const [newContacts, setNewContacts] = useState([]);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const handleClick = (newContact) => {
    setNewContacts([...newContacts], { title: newContact });
  }
  return (
    <div className="App">
      <Header />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={4}>
          <ContactForm handleClick={handleClick} />
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={6}>
          {
            contactsJSON.map((contact) => {
              return (
                <>
                  <Contact data={contact} />
                </>

              )
            })
          }
          <Contact data={newContacts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
