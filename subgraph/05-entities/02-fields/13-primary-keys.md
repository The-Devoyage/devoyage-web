---
id: primary-keys
title: Primary Keys
---

## The `primary_key` Field Configuration

By default, primary keys are assumed to be `id` for sql based data sources and `_id` for mongo based data sources.

Use this configuration to override the primary key that is used to return results after update. Update flow in Subgraph
starts by performing a query to aggregate a list of items in the database that will be updated. This query will return the primary key.

Following the update, Subgraph uses the primary keys in a query to return the correct updated results.

```toml
[[service.entities]]
name = "coffee_order"
data_source = { from = "coffee_data_source" }
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },
  { name = "coffee_id", scalar = "Int", default_value = "1", primary_key = true },
  { name = "status", scalar = "String", default_value = "\"pending\"" },
]
```
