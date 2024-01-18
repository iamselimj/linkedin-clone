import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        PROJECT_URL:z.string().min(1),
        DATABASE_URL:z.string().min(1),
        DATABASE_HOST:z.string().min(1),
        DATABASE_NAME:z.string().min(1),
        DATABASE_PORT:z.string().min(1),
        DATABASE_USER:z.string().min(1),
        DATABASE_PASSWORD:z.string().min(1),
        DIRECT_URL: z.string().min(1),
        SERVICE_ROLE:z.string().min(1),
        ANON_PUBLIC_KEY:z.string().min(1),
        JWT_SECRET:z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1),
        NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
        NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    },
    runtimeEnv: {
        PROJECT_URL: process.env.PROJECT_URL,
        DATABASE_URL: process.env.DATABASE_URL,
        DATABASE_HOST:process.env.DATABASE_HOST,
        DATABASE_NAME:process.env.DATABASE_NAME,
        DATABASE_PORT:process.env.DATABASE_PORT,
        DATABASE_USER:process.env.DATABASE_USER,
        DATABASE_PASSWORD:process.env.DATABASE_PASSWORD,
        DIRECT_URL: process.env.DIRECT_URL,
        SERVICE_ROLE:process.env.SERVICE_ROLE,
        ANON_PUBLIC_KEY:process.env.ANON_PUBLIC_KEY,
        JWT_SECRET:process.env.JWT_SECRET,
        NEXT_PUBLIC_APP_URL:process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_SUPABASE_URL:process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY:process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
})