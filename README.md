# Coriann AI

## Tools

### Clerk

1- use the following command to install clerk package for NextJS `npm i @clerk/nextjs@4.29.12`

**Very Important Note** when using **_src_** folder make sure that **middleware.ts** file is created inside the **src** folder

### Prisma

- Used as an ORM for JavaScript and TypeScript
- Follow the steps in this [Link](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql) to setup it
- How to use it

  - Create database schema in Prisma => schema.prisma file and define all the tables and relations
  - Run this command to generate the database `npx prisma generate ` to generate the client
  - Use `db push` or `migrate` commands to push the schema to the database (check this [link](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema#choosing-db-push-or-prisma-migrate) for more info)

    - Choosing db push or Prisma Migrate `db push` works well if:

      - You want to quickly prototype and iterate on schema design locally without the need to deploy these changes to other environments such as other developers, or staging and production environments.
      - You are prioritizing reaching a desired end-state and not the changes or steps executed to reach that end-state (there is no way to preview changes made by db push)
      - You do not need to control how schema changes impact data. There is no way to orchestrate schema and data migrations—if db push anticipates that changes will result in data loss, you can either accept data loss with the --accept-data-loss option or stop the process. There is no way to customize the changes.

    - db push is not recommended if:
      - You want to replicate your schema changes in other environments without losing data. You can use db push for prototyping, but you should use migrations to commit the schema changes and apply these in your other environments.
      - You want fine-grained control over how the schema changes are executed - for example, renaming a column instead of dropping it and creating a new one.
      - You want to keep track of changes made to the database schema over time. db push does not create any artifacts that allow you to keep track of these changes.
      - You want the schema changes to be reversible. You can use db push again to revert to the original state, but this might result in data loss.

### Neon

- it is a cloud postgres database with a free tier subscription
- https://neon.tech/
