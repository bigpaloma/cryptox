import { SvelteKitAuth } from "@auth/sveltekit"
import Credentials from "@auth/sveltekit/providers/credentials"
import Google from '@auth/core/providers/google';
import Resend from "@auth/sveltekit/providers/resend"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { startMongo } from "$db/mongo"


export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [
        Google,
        Resend({
            from: "no-reply@cryptox.icu"
        }),
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null

                // logic to salt and hash password
                const pwHash = saltAndHashPassword(credentials.password)

                // logic to verify if user exists
                user = await getUserFromDb(credentials.username, pwHash)

                if (!user) {
                    throw new Error("User not found.")
                }

                // return json object with the user data
                return user
            },
        })],
    adapter: MongoDBAdapter(
        startMongo(),
        { databaseName: "cryptoxAuth" }
    ),
    debug: true
});


