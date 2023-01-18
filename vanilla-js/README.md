# :icecream: Vanilla JS Boilerplate

Um boilerplate para projetos Vanilla JS (JavaScript puro), dispensando a necessidade de configuração complexas de bundlers como: Webpack, Parcel, Browserif, Rollup e outros...

## :factory: Recursos

* Docker
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

É possível levantar um **Docker** container com todo ambiente configurado, porém para o desenvolvimento no host ser refletido no volume do **Docker** container, é necessário a instalação prévia das dependências.      
Isso porque as mudanças nos principais assets do fonte(source) como: `html`, `css`e `JavaScript`, precisam ser "transpiladas"(convertidas). Por tanto na prática o **Docker** é somente um recurso adicional para testar o ambiente.

> __Nota__: O **Docker** container é configurado para subir o ambiente a partir do **Node.js** na versão `v18.12.1`. Sendo assim é recomendado que que faça o mesmo para o ambiente local(host). 

Como instalar **Node.js**:   

1. Via **NVM** - Node Version Manager, consulte o [repositório](https://github.com/nvm-sh/nvm)
2. Via instalador (executavel), consulte a [documentação](https://nodejs.org/en/download)
 
Como instalar o **Docker**, consulte a [documentação](https://docs.docker.com/get-docker)

### Back-end

:construction: ...
### Front-end

> **Obs**: Certifique-se de estar na raiz do diretório **front-end/**. Para processos abaixo. 

#### Docker

__1.__ Instale as dependências.

No terminal executar o seguinte comando:   

`yarn install`

__2.__ Habilite arquivos de configuração para Jest e TypeScript.   

Para Linux execute os comandos abaixo no terminal.    

```
cp jest.config.ts.sample jest.config.ts // cria uma cópia do arquivo .ts
cp tsconfig.json.sample tsconfig.json // cria uma cópia do arquivo .js
```

> __Obs__: Caso contrário realize a cópia de forma manual. 

__3.__ Habilite os watchers para os assets.

No terminal executar o seguinte comando:

`yarn watchers`

> __Obs__: O comando acima faz com que todas as mudanças no host sejam refletidas no container.

__4.__ Crie um container.

No terminal execute o seguinte comando:

```
docker run --name frontend-boilerplate --network host -v $(pwd):/front-end boilerplate-frontend:v1.0
```

> __Obs__: O comando acima instala todas as dependências do Front-end e levanta um web server, servindo o diretório **dist/**. No entanto lembre-se que o mesmo está rodando sobre o container.


Agora, basta abrir seu browser(navegador) em: [http://localhost:3000](http://localhost:3000).

### :boom: Boom!
### :stuck_out_tongue_winking_eye: That's all folks!

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


## :package: Build

:construction: ...