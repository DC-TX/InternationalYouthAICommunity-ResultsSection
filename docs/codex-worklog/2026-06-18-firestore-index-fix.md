# Firestore Index Fix / Firestore 索引问题修复

## 中文

### 问题

用户在“项目招募”页面打开自己创建项目的报名表时，页面弹出 Firestore 报错：

`The query requires an index.`

根因是报名表查询同时使用了：

- `where("projectOwnerId", "==", ownerId)`
- `orderBy("createdAt", "desc")`

Firestore 对这种组合查询要求创建复合索引。

### 处理方式

我没有要求用户额外创建索引，而是把这条查询改成只按 `projectOwnerId` 筛选，然后在前端按 `createdAt` 排序。

这样报名表仍然按最新报名优先展示，但不会再触发 Firestore 复合索引要求。

### 验证

- 对 `src/services/projectsService.js` 做了 JavaScript 语法检查。
- 确认 `subscribeOwnerApplications` 中已移除 `orderBy("createdAt", "desc")`。

## English

### Problem

When the user opened the application list for a project they created, Firestore returned:

`The query requires an index.`

The root cause was that the owner application query combined:

- `where("projectOwnerId", "==", ownerId)`
- `orderBy("createdAt", "desc")`

Firestore requires a composite index for that query shape.

### Fix

Instead of requiring the user to create another Firestore index, I changed the query to only filter by `projectOwnerId`, then sort the returned applications by `createdAt` on the client.

The application list still shows newest entries first, but the query no longer needs a composite Firestore index.

### Verification

- Ran a JavaScript syntax check for `src/services/projectsService.js`.
- Confirmed `subscribeOwnerApplications` no longer uses `orderBy("createdAt", "desc")`.
