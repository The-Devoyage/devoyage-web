---
id: examples-mixed-data-sources
title: Mixed Data Sources
---

```toml
[service]
# This is the name of the service
name = "pets"

# This is a list of data sources used by the service
[[service.data_sources]]

# This is a data source that connects to a MongoDB instance
[service.data_sources.Mongo]
name = "mongo_1"
uri = "mongodb://users:users@127.0.0.1:27017/users"
db = "sun"

# This is another MongoDB data source using Mongo Atlas
[[service.data_sources]]
[service.data_sources.Mongo]
name = "mongo_2"
uri = "mongodb+srv://$MONGO_USER:$MONGO_PASS@cluster0.dog1234.mongodb.net/?retryWrites=true&w=majority"
db = "dogs"

# This is an HTTP data source connecting to an external API
[[service.data_sources]]
[service.data_sources.HTTP]
name = "todos"
url = "https://jsonplaceholder.typicode.com"

###########################################################################################################################
# This is the first entity

[[service.entities]]
name = "Person"
fields = [
    { name = "_id", scalar = "ObjectID", required = true }
    { name = "name", scalar = "String", required = true }
    { name = "age", scalar = "Int", required = true }
    { name = "married", scalar = "Boolean", required = true }
]
# This is the data source for the entity
[service.entities.data_source]
from = "mongo_1"
collection = "users"

###########################################################################################################################
# This is a second entity

[[service.entities]]
name = "Dog"
[service.entities.data_source]
from = "mongo_2"
collection = "dogs"
[[service.entities.fields]]
name = "_id"
scalar = "ObjectID"
required = true
[[service.entities.fields]]
name = "name"
scalar = "String"
required = true
[[service.entities.fields]]
name = "breed"
scalar = "String"
required = true

###########################################################################################################################
# This is a third entity

[[service.entities]]
name = "todo"
[service.entities.data_source]
from = "todos"
path = "/todos"
[service.entities.data_source.resolvers]
[service.entities.data_source.resolvers.find_one]
path = "/:id"
[service.entities.data_source.resolvers.find_many]
search_query = [["userId", ":userId"], ["completed", ":completed"], ["id", ":id"]]
[[service.entities.fields]]
name = "userId"
scalar = "Int"
required = true
[[service.entities.fields]]
name = "id"
scalar = "Int"
required = true
[[service.entities.fields]]
name = "title"
scalar = "String"
required = true
[[service.entities.fields]]
name = "completed"
scalar = "Boolean"
required = true
```
