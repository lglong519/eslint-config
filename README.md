```DO NOT USE THIS PACKAGE UNLESS YOU KNOW WHAT YOU ARE DOING```
# eslint-config-teslint

Eslint config of lglong519

## Installation

You'll first need to install `eslint-config-teslint`:

```
$ npm install eslint-config-teslint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-teslint` globally.

## Usage

Add `teslint` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "teslint"
    ]
}
```
	or
	
```json
{
    "extends": [
        "teslint/simple"
    ]
}
```

## Test
```bash
$ npm run test
```