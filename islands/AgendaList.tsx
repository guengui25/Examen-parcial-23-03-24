import { FunctionComponent } from "preact";

import {Contact} from "../types.ts"
import { useState } from "preact/hooks";

const AgendaList: FunctionComponent<{docs:Contact[]}> = (props) => {

    const [contacts,setContacts] = useState<Contact[]>(props.docs);

    return(
        <div class="agendaList">
            <h2>Contactos</h2>
            <ul>
                {contacts.map((Contact)=>(
                    <li key ={Contact.email} >
                        <span>{Contact.name}</span>
                        <span>{Contact.email}</span>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default AgendaList;

