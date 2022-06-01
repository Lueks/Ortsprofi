<script>
	import { supabase } from '$lib/supabaseClient';

	let userEmail;
	let userPassword;

	async function handleClick() {
		const { user, session, error } = await supabase.auth.signUp({
			email: userEmail.value,
			password: userPassword.value
		});
	}
</script>

<input bind:this={userEmail} type="text" placeholder="Email" />
<input bind:this={userPassword} type="password" placeholder="password" />
<button on:click={handleClick}>Submit</button>
