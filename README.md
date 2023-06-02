## MACI V1 ceremony website

## 🛠 Installation

Clone this repository

```bash
git clone https://github.com/privacy-scaling-explorations/maci-phase2-setup.git
```

Install the dependencies

```bash
cd maci-phase2-setup && yarn
```

## 📜 Usage

First copy the env-template and fill the .env file

```bash
cp .env-template .env
```

Build all the packages

```bash
yarn build
```

Then start locally

```bash
yarn start
```

## 🚀 Deploy to Firebase

First change the project on `.firebaserc` to the name of your Firebase project

```json
{
    "projects": {
        "default": "my-project"
    }
}
```

Then run

```bash
yarn deploy
```

## 🔎 Code Quality

Run [ESLint](https://eslint.org/) to analyze the code and catch bugs

```bash
yarn lint
```

Or to automatically lint the code

```bash
yarn lint:fix
```

Run [Prettier](https://prettier.io/) to format the code

```bash
yarn format
```

### ➕ Contributions

maci-phase2-setup uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The rules are enforced when running `git cz`.

## License

This repository is released under the [MIT](https://github.com/privacy-scaling-explorations/maci-phase2-setup/blob/main/LICENSE) License.
