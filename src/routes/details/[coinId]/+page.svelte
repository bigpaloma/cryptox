<script>
    // @ts-nocheck

    import { page } from "$app/stores";
    import Balance from "../../../components/Balance/Balance.svelte";
    export let data;
</script>

<div class="flex">
    <Balance priceArr={data.response1} coinInfo={data.response2} />
</div>
