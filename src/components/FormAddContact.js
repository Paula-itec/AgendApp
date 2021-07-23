import React,{Component, useState} from 'react';


export default function FormAddContact(){
    const [name,setName]=useState('');
    const[phone,setPhone]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newContact = {name,phone,favourite:false};



        console.log(newContact);
      

        fetch('http://localhost:3001/contacts',{
            method:'POST',
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
    return (

        <form onSubmit={handleSubmit}>
            <input value={name} onChange={ev=>setName(ev.target.value)}name="name" placeholder="name" />
            <input value={phone} onChange={ev=>setPhone(ev.target.value)} name="phone" placeholder="phone" />
            <input type="submit" value="Add Contact" />
        </form>
    )
}