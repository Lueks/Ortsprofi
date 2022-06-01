<script>
	import { supabase } from '$lib/supabaseClient';
	import { user } from '../stores/sessionStore';

	let userName;
	let userPassword;
	let errorM;

	async function handleClick() {
		errorM = null;
		try {
			const { error, session } = await supabase.auth.signIn({
				email: userName.value,
				password: userPassword.value
			});
			user.set(session);
		} catch (error) {
			if (error) {
				errorM = error.message;
			}
		}
	}
</script>

<input bind:this={userName} type="text" placeholder="Account" />
<input bind:this={userPassword} type="password" placeholder="password" />
<button on:click={handleClick}>Login</button>

{#if errorM}
	<h1>{errorM}</h1>
{/if}
