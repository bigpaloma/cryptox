<script>
    // @ts-nocheck
    import { LightSwitch } from "@skeletonlabs/skeleton";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";

    const session = $page.data.session;

    console.log(session);
</script>

<header class="sticky top-0 flex flex-col z-20 bg-surface-100-800-token">
    <div
        class="mx-auto max-w.[1400px] w-full flex items-center justify-between p-4 py-6"
    >
        <a href="/">
            <h1 class="font-semibold">Cryptox</h1>
        </a>
        <button class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a
                href="/coins"
                class="duration-300 hover:text-indigo-400 cursor-pointer"
                >Kryptow&auml;hrungen</a
            >
            <!-- <a
                href="/"
                class="duration-300 hover:text-indigo-400 cursor-pointer"
                >Portfolio</a
            > -->
            <!-- <a
                href="/watchlist"
                class="duration-300 hover:text-indigo-400 cursor-pointer"
                >Watchlist</a
            > -->
            <a
                href="/about"
                class="duration-300 hover:text-indigo-400 cursor-pointer"
                >&Uuml;ber uns</a
            >
            <a
                href="/protected"
                class="duration-300 hover:text-indigo-400 cursor-pointer"
                >secret</a
            >
        </nav>
        <div class="hidden md:flex items-center gap-4 lg:gap-6">
            <p>CHF</p>
            <button on:click={session ? signOut : signIn}
                >{session ? "Sign Out" : "Sign In"}</button
            >
            <LightSwitch />
        </div>
    </div>
</header>
