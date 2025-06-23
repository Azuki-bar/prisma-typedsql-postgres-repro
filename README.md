# Prisma TypedSQL PostgreSQL Type Inference Issue Reproduction

This repository demonstrates a type inference issue with Prisma's TypedSQL preview feature when using PostgreSQL.

## Issue Description

When using Prisma's `typedSql` preview feature with PostgreSQL, the `IS NOT NULL` operator in SQL queries does not correctly infer the return type. The expected return type should be `boolean`, but it's incorrectly inferred as `boolean | null`.

## Setup

1. Start PostgreSQL using Docker Compose:
```bash
docker compose up -d
```

2. Install dependencies:
```bash
npm install
```

3. Run database migrations:
```bash
npx prisma migrate dev
```

4. Seed the database with test data:
```bash
npx prisma db seed
```

5. Generate Prisma client:
```bash
npx prisma generate
```

6. Check the type error:
```bash
npx tsc --noEmit
```

## Expected Behavior

The TypeScript compiler should not report any type errors, as `SELECT content IS NOT NULL AS has_content` should return `boolean` type.

## Actual Behavior

The TypeScript compiler reports a type error at `src/index.test.ts:9` because the inferred type is `boolean | null` instead of `boolean`.