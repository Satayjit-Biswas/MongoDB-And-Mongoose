## Getting Started

MongoDB :

Get started MongoDB and Following: [MongoDB.com](https://www.mongodb.com/docs/manual/)

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
      { age: { $nin: [26,17] } ,
      { gender: {$gt : 24}}}
    )
```

# Logical Query Operators:

#### $and `Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.`

```
 db.practice.find(
      { $and: [
          {age :{ $lt: 24 }},
          {gender: "Female"}
          ] }
    ).project({
        age: 1,
        gender: 1
    })
```

#### $not `Inverts the effect of a query expression and returns documents that do not match the query expression.`

```
  db.practice.find(
          { age :{ $not:{ $gt:24} }},
          { gender: "Female" }
    ).project({
        age: 1,
        gender: 1
    })
```

#### $nor `Joins query clauses with a logical NOR returns all documents that fail to match both clauses.`

```
  db.practice.find(
          {$nor:[
              { age :{ $lte:23} },
              { gender: "Female" }
          ]}
    ).project({
        age: 1,
        gender: 1
    })
```

#### $or `Joins query clauses with a logical OR returns all documents that match the conditions of either clause.`

```
  db.practice.find(
      { $or: [
          {age :{ $gt: 17 }},
          {gender: "Female"}
          ] }
    ).project({
        age: 1,
        gender: 1
    })
```

# Element Query Operators:

#### $exists `Matches documents that have the specified field.`

```
  db.practice.find(
              { skills :{ $exists : true} },
    ).project({
        skills: 1,
    })
```

#### $type `Selects documents if a field is of the specified type.`

```
  db.practice.find(
              { skills :{ $type : 'int' } },
    ).project({
        skills: 1,
    })
```

# Aggregation Query Operations:

## What is aggregation in mongodb ?

Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
