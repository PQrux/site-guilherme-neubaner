<p align="center">
  <img width="150" src="https://neubaner.com/shortcut.png" alt="Website logo">
</p>
<h1 align="center">neubaner.com</h1>

This is the source code of my portifolio: [neubaner.com](https://neubaner.com)

## Usage

### 1. Clone

If you are using git:
```sh
git clone https://github.com/PQrux/site-guilherme-neubaner.git
```
If you are using GH:
```sh
gh repo clone PQrux/site-guilherme-neubaner
```
### 2. Install dependencies

```sh
cd site-guilherme-neubaner
npm i
```

### 3. Run it!
```sh
npm start
```

## Testing

This project already has a default configuration for testing with jest, you can run all tests at once by running:
```sh
npm test
```

If you are using vscode you can easily debug specific test files with the <u>"Jest: current file"</u> launch option, just select this launch option and open the desired file.

## Deployment

First of all I recomend you to change the analytics config before deploying your version of this website, you can change it by modifying the file: [analytics.js](/static/analytics.js)

Now you can run the build script:
```sh
npm run build
```

Then deploy the public folder to a website hosting service of your choice.