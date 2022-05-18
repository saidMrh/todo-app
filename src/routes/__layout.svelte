<script>
	import '../tailwind.css';
	import '../app.css';
	import { user } from '../stores/authStore';
	import Auth from '../components/Auth.svelte';
	import { supabase } from '../supabase';
	import { loadTodos } from '../stores/todoStore';
	import Navbar from '../components/Navbar.svelte';

	user.set(supabase.auth.user());
	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
			loadTodos();
		}
	});
</script>

<div class="container mx-auto my-6 max-w-lg">
	{#if $user}
		<Navbar />
		<slot />
	{:else}
		<Auth />
	{/if}
</div>
