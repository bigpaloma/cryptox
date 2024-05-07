<script>
    // @ts-nocheck

    import Balance from "../components/Balance/Balance.svelte";
    export let data;
</script>

<main class="flex flex-col">
    <Balance priceArr={data.priceArr} />
</main>
