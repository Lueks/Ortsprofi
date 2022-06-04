<script>
	import { supabase } from '$lib/supabaseClient';
	import { user } from '../stores/sessionStore';

	let userName;
	let userPassword;
	let errorM;

	// Funktion, um nach dem Login die Projekte des Users abzurufen
	async function getProjects(user) {
		const projects = await fetch('/interface', {
			method: 'POST',
			body: `${user.id}`
		});
		//console.log(user.id);
	}

	async function handleLogin() {
		errorM = null;
		try {
			const { error, session } = await supabase.auth.signIn({
				email: userName.value,
				password: userPassword.value
			});
			user.set(session);
			//console.log(session);
			getProjects(session.user);
		} catch (error) {
			if (error) {
				errorM = error.message;
			}
		}
	}
</script>

<input bind:this={userName} type="text" placeholder="Account" />
<input bind:this={userPassword} type="password" placeholder="password" />
<button on:click={handleLogin}>Login</button>

{#if errorM}
	<h1>{errorM}</h1>
{/if}
