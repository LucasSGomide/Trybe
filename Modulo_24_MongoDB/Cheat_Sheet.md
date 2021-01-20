# MongoDB Operators Cheat Sheet
* [Filter Operators](#filter-operators)
  * [COUNT](#count)
  * [DELETE](#delete)
  * [EXISTS](#exists)
  * [FIND](#find)
  * [INSERT](#insert)
  * [LIMIT](#limit)
  * [SORT](#sort)
* [Comparison Operators](#comparison-operators)
  * [LESS THAN](#less-than)
  * [LESS THAN OR EQUAL TO](#less-than-or-equal-to)
  * [GREATER THAN](#greater-than)
  * [GREATER THAN OR EQUAL TO](#greater-than-or-equal-to)
  * [EQUAL TO](#equal-to)
  * [NOT EQUAL TO](#not-equal-to)
  * [IN](#in)
  * [NOT IN](#not-in)
* [Logical Operators](#logical-operators)
  * [NOT](#not)
  * [OR](#or)
  * [NOR](#nor)
  * [AND](#and)
  * [AND OR](#and-or)
* [Array Modifiers](#array-modifiers)
  * [EACH](#each)
  * [SLICE](#slice)
  * [ARRAY SORT](#array-sort)
  * [POSITION](#position)
* [Array Operators](#array-operators)
  * [$ADD TO SET](#add-to-set)
  * [$FILTERS](#filters)
  * [$POP](#pop)
  * [$PULL](#pull)
  * [$PUSH](#push)


---

## Filter Operators

### COUNT
```
db.collection.count()
```

### DELETE
```
db.collection.deleteOne({ status: "D" });
```

```
db.collection.deleteMany({ status : "A" });
```

```
db.inventory.deleteMany( {} )
```

### EXISTS

Check if an item exists.
  - Use true to find items that exists
  - Use false to find items that exists

```
db.inventory.find({ qty: { $exists: true } })
```

```
db.inventory.find({ qty: { $exists: true } })
``` 

### FIND

```
db.collection.find();
``` 

```
db.collection.find({}, { name: 1 });
``` 

```
db.collection.find( { chave: { $gt: 4 } } );
``` 

```
db.collection.find({
  $and: [
    {
      $or: [
        { "empresa.nome": "DELTA AIRLINES" },
        { "empresa.nome": "AMERICAN AIRLINES" },
      ],
    },
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
  ],
}, { _id: 0, vooId: 1 }).limit(1);
``` 

### INSERT

```
db.createCollection( "minhaColecao4", { collation: { locale: "fr" } } );
```

```
db.collection.insertOne({ chave: "Valor", chave2: "Valor2" });
``` 

```
db.collection.insertMany([ { chave: "Valor", chave2: "Valor2" }, { chave: "Valor", chave2: "Valor2" } ]);
```

### LIMIT

```
db.collection.find("<query>").limit("<número>");
```

```
db.collection.find().skip(2); 
```

```
db.collection.find().limit(10).skip(5);
``` 

### SORT

Sort items.
  - Ascending order (Ex: sort: { key: 1 })
  - Descending order (Ex: sort: { key: -1 })

```
db.collection.find().sort({ "price": 1 })
``` 

---

## Comparison Operators

### LESS THAN
```
db.collection.find({ qty: { $lt: 20 } });
``` 

### LESS THAN OR EQUAL TO

```
db.collection.find({ qty: { $lte: 20 } });
``` 

### GREATER THAN

```
db.collection.find({ qty: { $gt: 20 } });
``` 

### GREATER THAN OR EQUAL TO

```
db.collection.find({ qty: { $gte: 20 } });
``` 

### EQUAL TO

```
db.collection.find({ qty: { $eq: 20 } });
db.collection.find({ qty: 20 });
``` 

### NOT EQUAL TO

```
db.collection.find({ qty: { $ne: 20 } });
```

### IN

```
db.collection.find({ qty: { $in: [ 5, 15 ] } });
```

### NOT IN

```
db.collection.find({ qty: { $in: [ 5, 15 ] } });
```

---

## Logical Operators 

### NOT

```
db.collection.find({ price: { $not: { $gt: 1.99 } } });
``` 

### OR

```
db.collection.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] });
``` 

### NOR

```
db.collection.find({ $nor: [{ price: 1.99 }, { sale: true }] });
``` 

### AND

```
db.collection.find({
  $and: [
    { price: { $ne: 1.99 } },
    { price: { $exists: true } }
  ]
});
``` 

### AND OR

```
db.collection.find({
  $and: [
    {
      $or: [
        { price: { $gt: 0.99, $lt: 1.99 } }
      ]
    },
    {
      $or: [
        { sale : true },
        { qty : { $lt : 20 } }
      ]
    }
  ]
});
``` 

---

## Array Modifiers

### EACH

Modifier: **$each**
Add multiple values into an Array

### SLICE

Modifier: **$slice**
Slice the array in a specific index (Ex: slice: 2)
  - **Must** be used with **$each**

### ARRAY SORT

Modifier: **$sort**
Sort items into the array.
  - Ascending order (Ex: sort: { key: 1 })
  - Descending order (Ex: sort: { key: -1 })
  - **Must** be used with **$each**

### POSITION

Modifier: **$position**
Insert item into a specific index
  - Without it the new item will be inserted at the last position in the array
  - **Must** be used with **$each**

---

## Array Operators

### FILTERS

```
db.collection.updateMany(
  {},
  { $set : {
    "ingredients.$[elemento].unit": "xícara",
    "ingredients.$[elemento].name": "Farinha Integral"
    }
  }, 
  { arrayFilters: [ { "elemento.name": "Farinha" } ]}
);
```

### ADD TO SET

```
db.collection.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } }
);
``` 

```
db.collection.updateOne(
  { _id: 2 },
  {
addToSet: {
      tags: {
each: ["camera", "electronics", "accessories"]
      }
    }
  }
);
```

### POP

```
db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });
```

```
db.supplies.update({ _id: 1 }, { $pop: { items: 1 } });
```

### PUll

```
db.supplies.updateMany(
  {},
  {
pull: {
      "items": {
        "name": { $in: ["pens", "envelopes"] }
      },
    }
  }
);
```

```
db.profiles.updateOne(
  { _id: 1 },
  {
pull: {
      votes: { $gte: 6 }
    }
  }
);
```

```
db.survey.updateMany(
  {},
  {
pull: {
      results: { score: 8 , item: "B" }
    }
  }
);
```

### PUSH

```
db.supplies.updateOne(
  {_id: 1 },
  { $push:
    { 
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2
      },
    } 
  },
  { upsert: true }
);
```

```
db.supplies.updateOne(
  {},
  { $push: {
      items:
      { $each: [ 
         {
          "name": "pens",
          "price": 56.12,
          "quantity": 5 
        },
        {
          "name": "envelopes",
          "price": 19.95,
          "quantity": 8
        }
      ] }
    }
  },
  { upsert: false }
);
```

```
db.supplies.updateOne(
  { _id: 1},
  { $push: {
      items: { 
each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5
          }
      ],
sort: { quantity: -1 },
slice: 2
    }
    }
  },
  { upsert: true }
);
```



