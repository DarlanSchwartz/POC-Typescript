# This is a POC (Proof of concept) of Typescript for me.

## Run

```bash
npm install
```

```bash
npm run dev
```


## Routes

1. Create a Post

- Route
```bash
/new-post
```
- Body to send
```javascript
  {
    "name": "PostName",
    "writerId": 69,
    "likeCount": 420,
    "content": "post content here",
    "createdAt": "2023-09-15T03:00:00.000Z"
  }
```

2. Get all posts


```bash
/posts -> queries : ?limit=10 -- ?name=PostName
```
- Response
```javascript
[
  {
    "id": 69,
    "name": "PostName",
    "writerid": 420,
    "likecount": 6969,
    "content": "post content here",
    "createdat": "2023-09-15T03:00:00.000Z"
  }
]
```

3. Like a post


```bash
/like-post/:id

example: /like-post/69
```
- Response -> Status code 204
```javascript
```

4. Delete a post


```bash
/remove-post/:id

example: /remove-post/420
```
- Response -> Status code 204
```javascript
```

5. Update a post


```bash
/update-post/:id

example: /update-post/420
```
- Body to send
```javascript

  {
    "name": "Xurulipas",
    "writerId": 69,
    "likeCount": 69420,
    "content": "xablau",
    "createdAt": "2023-09-15T03:00:00.000Z"
  }
```
- Response -> Status code 204
```javascript
```
## There is a dump.sql file in the project if you want to create the database on your localhost
