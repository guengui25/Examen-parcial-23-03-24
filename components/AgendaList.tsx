import { FunctionComponent } from "preact";
import {Contact} from "../types.ts"


export const AgendaList: FunctionComponent<{docs:Contact[]}> =  (props) => {

    const contacts = props.docs;

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