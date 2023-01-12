# :books: Vanilla JS Boilerplate

Um boilerplate para projetos Vanilla JS (JavaScript puro), dispensando a necessidade de configuração complexas de bundlers como: Webpack, Parcel, Browserif, Rollup e outros...

## :factory: Recursos

* Eslint
* Jest
* TypeScript
* Sass
* Pug (template engine)
* Server

## :file_folder: Estrutura

* :file_folder: code
    * :open_file_folder: back-end/
        * ...
    * :open_file_folder: front-end/
        * ...
* :file_folder: docs

## :electric_plug: Instalação

### Back-end

...

### Front-end

Na raiz do diretório **front-end/**. Siga as etapas abaixo:    

__1.__ Habilite arquivos de configuração para Jest e TypeScript.   

Para Linux execute os comandos no terminal.    

```
cp jest.config.ts.sample jest.config.ts // cria uma cópia do arquivo .ts
cp tsconfig.json.sample tsconfig.json // cria uma cópia do arquivo .js
```

> __Obs__: Caso contrário realize a cópia de forma manual.   

__2.__ Instale as dependências.

No terminal executar o seguinte comando:   

`yarn install`

## :video_game: Como usar

O setup está configurado para rodar cada recurso de forma isolada no terminal, caso desejar. Ou se preferir ...

__Lint__:

Roda o linter (avaliação estática) para todos os arquivos JavaScript.   
As regras de validação são baseadas no style guide Idiomatic.js. Caso não tenha familiaridade, veja a documentação do [idiomatic.js](https://github.com/rwaldron/idiomatic.js)

> __Obs__: Instale a extensão Eslint no seu editor para que possa tirar melhor proveito da avaliação estática de código em desenvolvimento.

__comando__: `yarn lint`   

__Testes__:

Roda os testes para todos os arquivos fonte(TypeScript) e gera o relatório de cobertura(coverage) em um pasta com nome **coverage/** na raiz.

__comando__: `yarn test` ou `yarn test:watch`   

__Transpilação JavaScript__:

Transpila/converte todos os TypeScript(.ts) para .js e salva os mesmo no diretório **dist/**, respeitando subdiretórios.

__comando__: `yarn ts` ou `yarn ts:watch`   

__Transpilação CSS__:

Transpila/converte todos os Sass(.sass) para .css e salva os mesmo no diretório **dist/**, respeitando subdiretórios.

__comando__: `yarn css:watch`   

__Transpilação HTML__:

Transpila/converte todos os Pug(.pug - template engine) para .html e salva os mesmo no diretório **dist/**, respeitando subdiretórios.

__comando__: `yarn html:watch`     

__Server__:

Web server servindo o diretório/pasta em **dist/**.

__comando__: `yarn server`

__Node__:

Enquanto desenvolvimento você pode usar o Node pra ler seu arquivos JavaScript sem a necessidade de está com servidor ligado.

__comando__: `dev:node`

