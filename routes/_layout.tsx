import {FreshContext} from "$fresh/server.ts"

import Menu from "../components/Menu.tsx"

const Layout = async (req: Request, ctx: FreshContext) => {

    const Component = ctx.Component;

    return(
        <div class="layout">
            <Menu/>
            <div><h1>My Agenda</h1></div>
            <Component/>
        </div>
    )
}

export default Layout;