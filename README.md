<p align="center">
	<img src="https://raw.githubusercontent.com/WPQuark/eslint-config/master/logo-circular-512x512.png" alt="WPQuark Logo" height="128" width="128" />
</p>
<h1 align="center">WPQuark Eslint Config</h1>

A shared eslint config for WPQuark projects. It uses both eslint and prettier
for auto-fixable codes along with linting.

## Installation

Add to project's `devDependency`.

```bash
yarn add @wpquark/eslint-config eslint --dev
```

### ESLint Config

Now create a `.eslintrc` file in the root of your project and put the code.

```json
{
	"extends": "@wpquark"
}
```

You can also extend upon the rules.

### Prettier Config

Create a `prettier.config.js` file in the root of your project and put the code.

```js
const config = require('@wpquark/eslint-config/prettier.config.js');
module.exports = config;
```

Now you are ready to go.

## VSCode Integration

Install the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
plugin for VSCode. Enable autoFormat for `javascript` and `javascriptreact` files.

* Go to Code > Preference [File > Preference for Windows & Linux].
* Edit the WorkSpace Settings (Recommended).

```json
{
	"eslint.autoFixOnSave": true
	"[javascript]": {
		"editor.formatOnSave": false
	},
	"[javascriptreact]": {
		"editor.formatOnSave": false
	}
}
```



