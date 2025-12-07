## Getting Started

First, install all depencencies:

```bash
bun i
```

Secong, create a new Postgres Database. I am using `Neon`. Add the connection string to `DATABASE_URL`

Next, set `BETTER_AUTH_SECRET`. This is a secret value used for encryption and hashing. It must be at least 32 characters and generated with high entropy. Use:

```bash
openssl rand -base64 32
```

Generate `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env` in [Google Cloud](https://console.cloud.google.com/apis/credentials?)

---

After that, you must create the schema for `Better Auth` to work, and push that to remote Neon. Run these following commands one by one:

```bash
bun auth:generate

bun db:generate
bun db:migrate
```

In general, to make other DB Schema changes apart from auth, this is the workflow:

```bash
bun db:generate
bun db:migrate
bun db:push
```

Other: `db:studio` to access the Drizzle Studio

Lastly, your app is ready! Start the development server:

```bash
bun dev
```

---

## Tech Stack

- Next.js 16 (with React 19)
- TypeScript
- bun (as runtime and package manager)
- Tailwind CSS 4
- Biome JS (linter & formatter)
- shadcn/ui
- Drizzle ORM
- Better Auth
- PostgreSQL (through Neon)
