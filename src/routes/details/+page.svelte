<script>
    export let data;
</script>

{#each data.priceArr as price}
    <p>{price[0]}</p>
    <p>{price[1]}</p>
{/each}
