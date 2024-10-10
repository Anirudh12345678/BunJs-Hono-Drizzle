import { numeric, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("bun_tutorial",{
    id: serial("id").primaryKey(),
    movie: text("movie").notNull(),
    rating: numeric("rating")
})
