This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

MongoDB :

Get started MongoDB and Following: [MongoDB.com](https://www.mongodb.com/docs/manual/)

```bash
npm run dev
# or
yarn dev
```

# MongoDB Operator :

Get started MongoDB Operator and Following: [Operator](https://www.mongodb.com/docs/manual/reference/operator)

# Comparison Query Operators:

In this example , "practice" is a Database collection.

#### $eq ` Matches values that are equal to a specified value.`

```
  db.practice.find(
      { age: { $eq: 18 } }
    )
```

#### $gt `Matches values that are greater than a specified value.`

```
  db.practice.find(
      { age: { $gt: 22 } }
    )
```

#### $gte `Matches values that are greater than or equal to a specified value`

```
  db.practice.find(
      { age: { $gte: 24 } }
    )
```

#### $in `Matches any of the values specified in an array.`

```
  db.practice.find(
      { age: { $in: [26,17] } }
    )

```

#### $lt `Matches values that are less than a specified value.`

```
  db.practice.find(
      { age: { $lt: 26 } }
    )


```

#### $lte `Matches values that are less than or equal to a specified value.`

```
  db.practice.find(
      { age: { $lte: 26 } }
    )


```

#### $ne `Matches all values that are not equal to a specified value.`

```
  db.practice.find(
      { age: { $ne: 26 } }
    )


```

#### $nin `Matches none of the values specified in an array.`

```
  db.practice.find(
      { age: { $nin: [26,17] } }
    )


```

# Comparison Query Operators:

#### $and `Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.`

```
  db.practice.find(
      { age: { $nin: [26,17] } }
    )


```
