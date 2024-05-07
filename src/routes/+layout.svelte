<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<Header />
<div class="max-w-full py-6 px-4">
	<slot />
</div>
<Footer />
