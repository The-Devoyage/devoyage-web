---
id: content-and-layouts
title: Contents and Layouts
---

If you want to use triggered content, you must create a content using the graphql api on this server.

### Content

Content are pre-designed HTML that can be sent as standalone emails or be dynamically inserted into pre-designed HTML `Layout`s.

From the GraphQL Playground/Sandbox you can manipulate content:

- Create Content
- Update Content
- Delete Content
- Get Content

### Layouts

Layouts are pre-designed HTML templates that are saved to the GraphQL Mailer Database. Layouts do not contain dynamic variables, but can be injected with `Content`, which is described below. Layouts MUST can contain a variable, `{{content}}` which will allow a Content to be injected into the template.

- Create Layout - Admins are able to create layouts. Requires User Role of 1.

- Get Layouts - Get a paginated and filterable list of layouts.

- Update Layout - Admins are able to update layouts. Requires user role of 1.

- Delete Layout - Admins are able to delete layouts. Requires user role of 1.
