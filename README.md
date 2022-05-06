# commands

```sh
# frontend
yarn workspace front dev

# database
cd packages/back
docker-compose up

# backend
yarn workspace back dev
```

### migration

```sh
# migrationファイル作成
npx typeorm migration:generate -n XXXXX

# migration 実行
npx typeorm migration:run
```
