import { FunctionComponent } from "preact";

import {Contact} from "../types.ts"

const AgendaList: FunctionComponent<{docs:Contact[]}> = (props) => {

    const Contacts = props.docs;

    return(
        <div class="agendaList">
            <h2>Contactos</h2>
            <ul>
                {Contacts.map((Contact)=>(
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

