import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

import {AgendaList} from "../components/AgendaList.tsx"

import {Contact} from "../types.ts"

const AgendaForm: FunctionComponent =  () => {
    
    const [contacts,setContacts] = useState<Contact[]>([]);

    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");

    const [error,setError] = useState<string>("");

    const CheckMail = (email_aux:string) => {
        if(email_aux.includes("." && "@") && contacts.find((e)=>e.email === email) === undefined) return true
        return false;
    }

    const addContact = () => {

        if (name == "" || email == ""){
            setError("Invalid contact. A field is empty, email is invalid, or the email is already in use.")
            return;
        }

        const contacs_aux = contacts;

        if(CheckMail(email)){
            contacs_aux.push({name,email})
            setContacts(contacs_aux);
        }else{
            setError("Invalid contact. A field is empty, email is invalid, or the email is already in use.")
        }
    }
    

    return(
        <>
            {contacts.length > 0 && <AgendaList docs={contacts}/> }
            
            <div class="agendaForm">
                <h2>Add new contact</h2>
                <input type="text" placeholder="Name" value={name}onInput={(e)=> 
                    setName(e.currentTarget.value
                )}/>
                <input type="email" placeholder="Email" value={email} onInput={(e)=> {
                    setEmail(e.currentTarget.value)
                    if(error!=="")setError("");
                }}/>
                
                <button onClick={addContact}>Add contact</button>

                {error !== "" && <p class="error">{error}</p>}
            </div>
        </>
    )  
}

export default AgendaForm;