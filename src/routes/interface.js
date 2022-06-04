import { supabase } from "../lib/supabaseClient";

//Funktion, die die Projekte des Users an interface.svelte ausgibt, ausgelöst in login.svelte
export async function post({request}) {
    
    const userId = await request.text()
    console.log(userId)

    const {data, error} = await supabase
    .from('Projects')
    .select()
    .eq('userid', `${userId}` )

    

    console.log(data)

    return {
    body: {request}
  }
}