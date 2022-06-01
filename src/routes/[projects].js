import { supabase } from "../lib/supabaseClient";

export async function get ({params, url}) {
    console.log(url)
    console.log(params)
    const { data, error} = await supabase
    .from('Projects')
    .select()
    .eq('name', `${params.projects}`)

    console.log(data)
    
    const project = data[0]

    if (project) {
        return {
            body: {project}
        }
    }

    return {
        body: {project}
    }
}