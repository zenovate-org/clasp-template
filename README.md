# Sourcing backend

The sourcing backend using Google Apps Script and Google Sheets.

## Usage

### Clasp

Login to your Google account

```bash
yarn clasp login
```

Set up your script ID in:

- **Dev Environment:** `.clasp.json.dev`
- **Prod Environment:** `.clasp.json.prod`

```
{"scriptId":" YOUR SCRIPT ID "}
```

**appscript.json**

```bash
cp appscript.json.example appscript.json
```

change appscript.json you want

- Time Zone（default: "Asia/Ho_Chi_Minh"）
- OAuth

### npm

install packages

```bash
yarn install
```

linter & formatter

```bash
yarn lint
yarn format
```

deploy

```bash
yarn deploy:dev
```

Manual deploy:

```bash
yarn build && yarn obfu && clasp push --project .clasp.json.dev
```
