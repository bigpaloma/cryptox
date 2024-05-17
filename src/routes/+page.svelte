<script>
    // @ts-nocheck
    import { signIn } from "@auth/sveltekit/client";
</script>

<main class="flex flex-col text-center">
    <h1>Cryptox Coinmarketcap Clone</h1>

    <div>
        <button on:click={signIn}>Sing in</button>
    </div>
</main>
