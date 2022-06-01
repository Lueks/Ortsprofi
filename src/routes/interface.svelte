<script>
	import { user } from '../stores/sessionStore';
	import Login from '../components/login.svelte';
	import { supabase } from '../lib/supabaseClient';

	$user;

	let loading = true;

	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') {
			loading = false;
		}
	});

	function handleClick() {
		console.log($user);
	}

	let projectName;
	let projectHeader;
	async function handleSubmit() {
		const { data, error } = await supabase
			.from('Projects')
			.insert([{ name: projectName, header: projectHeader, userid: $user.user.id }]);
	}
</script>

{#if loading}
	<Login />
{:else}
	<button on:click={handleClick}>Test2</button>
	<h1>Test</h1>

	<input bind:value={projectName} type="text" placeholder="Projektname" />
	<input bind:value={projectHeader} type="text" placeholder="Header" />
	<button on:click={handleSubmit}>Erstellen</button>
{/if}
