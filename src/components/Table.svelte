<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { Paginator } from "@skeletonlabs/skeleton";

    export let coinsArr;
    const formatNumber = (x, places = 2, country = "de-CH") => {
        return Number(x || 0).toLocaleString(country, {
            maximumFractionDigits: places,
            minimumFractionDigits: places,
        });
    };

    let paginationSettings = {
        page: 0,
        limit: 100,
        size: coinsArr.length,
        amounts: [25, 50, 100],
    };

    function onPageChange(e) {
        const newUrl = new URL($page.url);
        newUrl?.searchParams?.set("page", e.detail);
        goto(newUrl);
    }

    function onAmountChange(e) {
        const newUrl = new URL($page.url);
        newUrl?.searchParams?.set("amount", e.detail);
        goto(newUrl);
    }

    function handleBtn() {
        const newUrl = new URL($page.url);
        newUrl?.searchParams?.set("hello", "world");
        goto(newUrl);
    }
</script>

{#if typeof coinsArr === "object" && !Array.isArray(coinsArr) && coinsArr !== null}
    <p>
        {coinsArr.status.error_message}
    </p>
{:else}
    <div class="table-container">
        <button on:click={handleBtn}>CLICK</button>
        <Paginator
            bind:settings={paginationSettings}
            showFirstLastButtons={true}
            showPreviousNextButtons={true}
            on:page={onPageChange}
            on:amount={onAmountChange}
        />
        <table class="table table-interactive table-comfortable">
            <thead>
                <tr>
                    <th><span class="cursor-pointer">#</span></th>
                    <th><span class="cursor-pointer">ID</span></th>
                    <th><span class="cursor-pointer">Name</span></th>
                    <th class="text-right"
                        ><span class="cursor-pointer">Preis</span></th
                    >
                    <th class="text-right"
                        ><span class="cursor-pointer">1h %</span></th
                    >
                    <th class="text-right"
                        ><span class="cursor-pointer">24h %</span></th
                    >
                    <th class="text-right"
                        ><span class="cursor-pointer">7d %</span></th
                    >
                    <th class="text-right"
                        ><span class="cursor-pointer">Marktkapitalisierung</span
                        ></th
                    >
                    <th class="text-right"
                        ><span class="cursor-pointer">Volumen</span></th
                    >
                </tr>
            </thead>
            <tbody>
                {#each coinsArr as coin, index}
                    <tr
                        on:click={() => goto(`/details/${coin.id}`)}
                        data-href={`/details/${coin.symbol}`}
                        class="cursor-pointer"
                    >
                        <td>{index + 1}</td>
                        <td class="uppercase">{coin.symbol}</td>
                        <td class="font-semibold first-letter:capitalize"
                            >{coin.id}</td
                        >
                        <td class="text-right"
                            >CHF {formatNumber(coin.current_price)}</td
                        >
                        <td class="text-right"
                            >{coin.price_change_percentage_1h_in_currency.toFixed(
                                2,
                            )}</td
                        >
                        <td class="text-right"
                            >{coin.price_change_percentage_24h_in_currency.toFixed(
                                2,
                            )}</td
                        >
                        <td class="text-right"
                            >{coin.price_change_percentage_7d_in_currency
                                ? coin.price_change_percentage_7d_in_currency.toFixed(
                                      2,
                                  )
                                : "n/a"}</td
                        >
                        <td class="text-right"
                            >CHF {formatNumber(coin.market_cap).slice(
                                0,
                                -3,
                            )}</td
                        >
                        <td class="text-right"
                            >CHF {formatNumber(coin.total_volume).slice(0, -3)}
                            <br />{formatNumber(
                                Math.round(
                                    coin.total_volume / coin.current_price,
                                ),
                            ).slice(0, -3)}
                            <span class="uppercase">{coin.symbol}</span></td
                        >
                    </tr>
                {/each}
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3">Showing results 1-3 of 3</th>
                </tr>
            </tfoot>
        </table>
        <Paginator
            bind:settings={paginationSettings}
            showFirstLastButtons={true}
            showPreviousNextButtons={true}
            on:page={onPageChange}
            on:amount={onAmountChange}
        />
    </div>
{/if}
