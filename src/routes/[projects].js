import { supabase } from "../lib/supabaseClient";

export async function get ({params, url}) {
    console.log(url)
    console.log(params)

    //Erster Buchstabe der URL wird groß geschrieben
    let query = params.projects
    let name = query.slice(0, 1).toUpperCase() + query.slice(1, query.length)
    

    const { data, error} = await supabase
    .from('Projects')
    .select()
    .eq('name', `${name}`)

    console.log(data)
    
    const project = data[0]

    if (project) {
        return {
            body: {project}
        }
    }
}