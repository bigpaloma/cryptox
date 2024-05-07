<script>
	// @ts-nocheck

	import Table from "../../components/Table.svelte";

	export let data;
</script>

<main class="flex flex-col">
	<Table coinsArr={data.response} />
</main>
