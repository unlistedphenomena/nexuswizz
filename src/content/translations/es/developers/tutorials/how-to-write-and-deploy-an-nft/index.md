---
title: Cómo escribir & y desplegar un NFT (parte 1/3 de la serie de tutoriales sobre NFT)
description: Este tutorial es la parte 1 de una serie sobre NFT que le indicará cómo escribir y desplegar un contrato inteligente de un token no fungible o NFT (ERC-721 token) paso a paso usando Ethereum y el sistema de archivos interplanetario (IPFS).
author: "Sumi Mudgil"
tags:
  - "NTF"
  - "ERC-721"
  - "Alchemy"
  - "Solidity"
  - "contratos inteligentes"
skill: beginner
lang: es
published: 2021-04-22
---

Los NFT ponen la cadena de bloques en el punto de mira y esto supone una excelente oportunidad para que usted le coja el tranquillo y publique su propio NFT (ERC-721 Token) en la cadena de bloques de Ethereum.

Alchemy se enorgullece de promocionar a los protagonistas del espacio NFT, incluyendo Makersplace (que recientemente logró una venta récord de obras de arte digitales en Christie's por 69 millones de dólares), Dapper Labs (creadores de NBA Top Shot & Crypto Kitties), OpenSea (el mayor mercado de NFT del mundo), Zora, Super Rare, NFTfi, Foundation, Enjin, Origin Protocol e Immutable, entre muchos otros.

En este tutorial, le guiaremos sobre cómo crear e implementar un contrato inteligente ERC-721 en la red de pruebas de Ropsten usando [MetaMask](https://metamask.io/), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org/), [Pinata](https://pinata.cloud/) y [Alchemy](https://alchemy.com/signup/eth) (no se preocupe si todo esto le suena a chino, lo iremos viendo en este tutorial).

En la parte 2 de este tutorial, explicaremos cómo podemos utilizar nuestro contrato inteligente para acuñar un NFT, y en la parte 3 explicaremos cómo ver su NFT en MetaMask.

Y, por supuesto, si le surge alguna duda en cualquier momento, no dude en consultar [Alchemy Discord](https://discord.gg/gWuC7zB) o visitar [los documentos de la API de NFT en Alchemy](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api)!

## Paso 1: Conectarse a la red Ethereum {#connect-to-ethereum}

Hay muchas maneras de hacer peticiones a la cadena de bloques Ethereum, pero para simplificarnos la vida, usaremos una cuenta gratuita en [Alchemy](https://alchemy.com/signup/eth), una plataforma de desarrollo de cadena de bloques y API que nos permite comunicarnos con la cadena Ethereum sin tener que ejecutar nuestros propios nodos.

En este tutorial, también aprovecharemos las herramientas de desarrollo de Alchemy para monitorizar y analizar lo que está ocurriendo dentro de nuestro despliegue de contratos inteligentes. Si aún no tiene una cuenta de Alchemy, puede registrarse gratis en [aquí](https://alchemy.com/signup/eth).

## Paso 2: Crear su aplicación (y llave API) {#make-api-key}

Una vez que haya creado una cuenta de Alchemy, puede generar una clave de API creando una aplicación. Esto nos permitirá hacer solicitudes a la red de pruebas de Ropsten. Consulte [esta guía](https://docs.alchemyapi.io/guides/choosing-a-network) si tiene curiosidad para saber más sobre redes de pruebas.

1. Navegue a la página «Crear App» en su tablero Alchemy pasando el cursor sobre «Apps» en la barra de navegación y haciendo clic en «Crear App».

![Crear su app](./create-your-app.png)

2. Dele un nombre a su aplicación (nosotros hemos elegido «My First NFT!» [Mi primer NFT]), ofrezca una descripción corta, seleccione «Staging» (Por fases) para el entorno (usado para la contabilidad de su aplicación), y elija «Ropsten» como red.

![Configure y publíque su aplicación](./configure-and-publish-your-app.png)

3. ¡Haga clic en «Crear app» y ya está! Su aplicación debería aparecer en la siguiente tabla.

## Paso 3: Crear una cuenta Ethereum (dirección) {#create-eth-address}

Necesitamos una cuenta Ethereum para enviar y recibir transacciones. Para este tutorial, usaremos MetaMask, una cartera virtual en el navegador usada para manejar la dirección de su cuenta Ethereum. Si quiere más información sobre cómo funcionan las transacciones en Ethereum, eche un vistazo a [esta página](/developers/docs/transactions/) de Ethereum Foundation.

Puede descargar y crear una cuenta MetaMask gratis [aquí](https://metamask.io/download.html). Cuando esté creando una cuenta, o si ya tiene una cuenta, asegúrese de cambiarla a la «Ropsten Test Network» (red de pruebas de Robsten) en la parte superior derecha ( para que no tratemos con dinero real).

![Configure Ropsten como su red](./metamask-ropsten.png)

## Paso 4: Añadir ether de un faucet {#step-4-add-ether-from-a-faucet}

Para desarrollar nuestro contrato inteligente en la red de prueba, necesitaremos algunos ETH de prueba. Para obtener ETH, puede ir a [FaucETH](https://fauceth.komputing.org) e introducir la dirección de su cuenta Ropsten, hacer clic en «Request funds» (Solicitar fondos) y luego en «Ethereum Testnet Ropsten» (Ropsten de red de prueba de Ethereum) antes de volver a hacer clic en el botón «Request funds». Deberían aparecer ETH en su cuenta de MetaMask poco después.

## Paso 5: Comprobar su balance {#check-balance}

Para comprobar que nuestro balance está ahí, hagamos una solicitud de [eth_getBalance](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_getbalance)usando [la herramienta de composición de Alchemy](https://composer.alchemyapi.io?composer_state=%7B%22network%22%3A0%2C%22methodName%22%3A%22eth_getBalance%22%2C%22paramValues%22%3A%5B%22%22%2C%22latest%22%5D%7D). Esto devolverá la cantidad de ETH a nuestra cartera. Después de introducir la dirección de su cuenta de MetaMask y hacer clic en «Send Request» (Enviar Solicitud), debería ver una respuesta como esta:

    `{"jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000"}`

\*\*NOTA: Este resultado es en wei no en ETH. Wei se usa como la denominación más pequeña de ether. La conversión de wei a ETH es 1 eth = 10<sup>18</sup> wei. Así que si convertimos 0xde0b6b3a7640000 a decimal, obtenemos 1\*10<sup>18</sup> wei, que es igual a 1 ETH.

¡Fiu! Nuestro dinero de prueba está ahí sano y salvo.

## Paso 6: Iniciar nuestro proyecto {#initialize-project}

Primero, necesitaremos crear una carpeta para nuestro proyecto. Navegue hasta su línea de comandos y teclee:

    mkdir my-nft
    cd my-nft

Ahora que estamos dentro de nuestra carpeta de proyecto, usaremos npm init para iniciar el proyecto. Si no tiene instalado npm, siga[estas instrucciones](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (también necesitaremos [Node.js](https://nodejs.org/en/download/), así que ¡descárgueselo también!).

    npm init

Realmente no importa la respuesta que dé a las preguntas de instalación, he aquí un ejemplo de cómo lo hicimos nosotros:

    package name: (my-nft)
    version: (1.0.0)
    description: My first NFT!
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)
    About to write to /Users/thesuperb1/Desktop/my-nft/package.json:

    {
      "name": "my-nft",
      "version": "1.0.0",
      "description": "My first NFT!",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

Apruebe package.json y ¡ya puede comenzar!

## Paso 7: Instalar [Hardhat](https://hardhat.org/getting-started/#overview) {#install-hardhat}

Hardhat es un entorno de desarrollo para compilar, desplegar, probar y depurar su software Ethereum. Ayuda a los desarrolladores cuando construyen contratos inteligentes y dApps localmente antes de desplegarse en la cadena en vivo.

Dentro de nuestro proyecto my-nft, ejecute:

    npm install --save-dev hardhat

Revise esta página para más información acerca de las [intrucciones de instalación](https://hardhat.org/getting-started/#overview).

## Paso 8: Crear proyecto Hardhat {#create-hardhat-project}

Dentro de la carpeta de nuestro proyecto, ejecute:

    npx hardhat

Entonces debería aparecer un mensaje de bienvenida y la opción de seleccionar lo que desea hacer. Seleccione «create an empty hardhat.config.js» (crear un hardhat.config.js vacío):

    888    888                      888 888               888
    888    888                      888 888               888
    888    888                      888 888               888
    8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
    888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
    888    888 .d888888 888    888  888 888  888 .d888888 888
    888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
    888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888
    👷 Bienvenido a Hardhat v2.0.11 👷‍
    ? ¿Qué es lo que quieres hacer? …
    Create a sample project
    ❯ Create an empty hardhat.config.js
    Quit

Esta acción nos creará un archivo hardhat.config.js, que es donde especificaremos todos los ajustes para nuestro proyecto (en el paso 13).

## Paso 9: Añadir carpetas de proyecto {#add-project-folders}

Para mantener nuestro proyecto organizado, crearemos dos nuevas carpetas. Navegue al directorio raíz de su proyecto en su línea de comandos y teclee:

    mkdir contracts
    mkdir scripts

- contratos/es donde guardaremos nuestro código de contrato inteligente NFT

- scripts/ es donde mantendremos scripts para desplegar e interactuar con nuestro contrato inteligente

## Paso 10: Escribir nuestro contrato {#write-contract}

Ahora que nuestro entorno está configurado, es hora de dedicarse a cosas más emocionantes, como por ejemplo, _¡escribir nuestro código de contrato inteligente!_

Abra el proyecto my-nft en su editor favorito (a nosotros nos gusta [VSCode](https://code.visualstudio.com/)). Los contratos inteligentes están escritos en un lenguaje llamado Solidity que es el que utilizaremos para escribir nuestro contrato inteligente MyNFT.sol

1. Vaya a la carpeta `contratos` y cree un nuevo archivo llamado MyNFT.sol

2. A continuación se muestra nuestro código NFT de contrato inteligente, el cual se basa en la implementación ERC-721 de la biblioteca [OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/erc721). Copie y pegue el contenido de abajo en su archivo MyNFT.sol.

   ```solidity
   //Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
   import "@openzeppelin/contracts/utils/Counters.sol";
   import "@openzeppelin/contracts/access/Ownable.sol";
   import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

   contract MyNFT is ERC721URIStorage, Ownable {
       using Counters for Counters.Counter;
       Counters.Counter private _tokenIds;

       constructor() ERC721("MyNFT", "NFT") {}

       function mintNFT(address recipient, string memory tokenURI)
           public onlyOwner
           returns (uint256)
       {
           _tokenIds.increment();

           uint256 newItemId = _tokenIds.current();
           _mint(recipient, newItemId);
           _setTokenURI(newItemId, tokenURI);

           return newItemId;
       }
   }
   ```

3. Como estamos heredando clases de la biblioteca de contratos de OpenZeppelin, en la línea de comandos, ejecute `npm install @openzeppelin/contracts` para instalar la biblioteca en nuestra carpeta.

Entonces, ¿qué _hace_ exactamente este código? Descompongámoslo, línea por línea.

En la parte superior de nuestro contrato inteligente, importamos tres clases de contrato inteligente de [OpenZeppelin](https://openzeppelin.com/):

- @openzeppelin/contracts/token/ERC721/ERC721.sol contiene la implementación del estándar ERC-721, que nuestro contrato NFT heredará. (Para ser un NFT válido, su contrato inteligente debe implementar todos los métodos del estándar ERC-721.) Para obtener más información sobre las funciones ERC-721 heredadas, consulte la definición de interfaz [aquí](https://eips.xircanet/EIPS/eip-721).

- @openzeppelin/contracts/utils/Counters.sol proporciona contadores que sólo pueden aumentar o disminuir un valor. Nuestro contrato inteligente utiliza un contador para hacer un seguimiento del número total de NFT acuñados y establecer el ID único en nuestro nuevo NFT. (A cada NFT acuñado usando un contrato inteligente se le debe asignar un identificador único—aquí nuestro identificador único sólo está determinado por el número total de NFT en existencia. Por ejemplo, el primer NFT que acuñamos con nuestro contrato inteligente tiene «1» por ID, nuestro segundo NFT tiene «2», etc.)

- @openzeppelin/contracts/access/Ownable.sol establece un [control de acceso](https://docs.openzeppelin.com/contracts/3.x/access-control) en nuestro contrato inteligente, por lo que solo el propietario del contrato inteligente (usted) puede acuñar NFT. (Nota, incluir el control de acceso es totalmente una preferencia. Si quiere que alguien pueda acuñar un NFT usando su contrato inteligente, elimine la palabra «Ownable» [apropiable] en la línea 10 y «onlyOwner» [solo el propietario] en la línea 17.)

Después de nuestras declaraciones de importación, tenemos nuestro contrato inteligente NFT personalizado, que es sorprendentemente corto — ¡sólo contiene un contador, un constructor y una sola función! Esto es gracias a nuestros contratos de OpenZeppelin heredados, los cuales implementan la mayoría de los métodos que necesitamos para crear un NFT, como `ownerOf` (dueño de) que indica el dueño del NFT, y `transferFrom` (transferir desde), que transfiere la propiedad del NFT de una cuenta a otra.

En nuestro constructor ERC-721, notará que pasamos 2 cadenas, «MyNFT» y «NFT». La primera variable es el nombre del contrato inteligente, y la segunda es su símbolo. ¡Puede nombrar cada una de estas variables como quiera!

Por último, tenemos nuestra función `mintNFT(address recipient, string memory tokenURI)` que nos permite acuñar un NFT. Notará que esta función toma dos variables:

- `address recipient` especifica la dirección que recibirá su NFT recién acuñado

- `string memory tokenURI` es una cadena que debe resolver un documento JSON que describe los metadatos de NFT. Los metadatos de un NFT es realmente lo que lo lleva a la vida, permitiéndole tener características configurables, como el nombre, descripción, imagen y otros atributos. En la parte 2 de este tutorial, describiremos cómo configurar estos metadatos.

`mintNFT` llama a algunos métodos de la biblioteca ERC-721 heredada, y en última instancia muestra un número que representa el ID del NFT recién acuñado.

## Paso 11: Conectar MetaMask & Alchemy a su proyecto {#connect-metamask-and-alchemy}

Ahora que hemos creado una cartera de MetaMask, una cuenta de Alchemy y hemos escrito nuestro contrato inteligente, es hora de conectarlos a los tres.

Cada transacción enviada desde su cartera virtual requiere una firma usando su clave privada única. Para proporcionar a nuestro programa este permiso, podemos almacenar nuestra clave privada (y la clave API de Alchemy) en un archivo de entorno.

Si quiere ahondar sobre el envío de transacciones, consulte [este tutorial](/developers/tutorials/sending-transactions-using-web3-and-alchemy/) sobre el envío de transacciones usando web3.

Primero, instale el paquete dotenv en el directorio de su proyecto:

    npm install dotenv --save

Seguidamente, cree un archivo `.env` en el directorio raíz de nuestro proyecto y añádale nuestra clave privada MetaMask y HTTP Alchemy API URL.

- Siga [estas instrucciones](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) para exportar tu clave privada desde MetaMask

- Vea las indicaciones siguientes para obtener la URL de la API de Alchemy HTTP y cópiela en su portapapeles

![Copie el URL de su API Alchemy](./copy-alchemy-api-url.gif)

Su `.env` debería ser parecido a:

    API_URL="https://eth-ropsten.alchemyapi.io/v2/your-api-key"
    PRIVATE_KEY="your-metamask-private-key"

Para conectarlos a nuestro código, haremos referencia a estas variables en nuestro archivo hardhat.config.js en el paso 13.

<InfoBanner isWarning={true}>
¡No exponga su <code>.env</code>! Asegúrese de que nunca comparte ni expone su archivo <code>.env</code> con nadie, ya que ello conlleva revelar sus secretos. Si está haciendo un control de la versión, añada <code>.env</code> a un archivo <a href="https://git-scm.com/docs/gitignore">gitignore</a>.
</InfoBanner>

## Paso 12: Instalar Ethers.js {#install-ethers}

Ethers.js es una biblioteca que hace más fácil interactuar y hacer solicitudes a Ethereum combinando [métodos JSON-RPC estándar](/developers/docs/apis/json-rpc/) con métodos más amigables para el usuario.

Hardhat hace que sea muy fácil integrar [plugins](https://hardhat.org/plugins/) para herramientas adicionales y una mayor funcionalidad. Aprovecharemos el [plugin de Ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) para desplegar contratos ([Ethers.js](https://github.com/ethers-io/ethers.js/) tiene algunos métodos de despliegue de contratos súper limpios).

En el directorio de su proyecto teclee:

    npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0

También necesitaremos ethers en nuestro hardhat.config.js en el siguiente paso.

## Paso 13: Actualizar hardhat.config.js {#update-hardhat-config}

Hasta el momento, hemos añadido varias dependencias y plugins, ahora necesitamos actualizar hardhat.config.js para que nuestro proyecto los reconozca.

Actualice su hardhat.config.js para que se vea así:

    /**
    * @type import('hardhat/config').HardhatUserConfig
    */
    require('dotenv').config();
    require("@nomiclabs/hardhat-ethers");
    const { API_URL, PRIVATE_KEY } = process.env;
    module.exports = {
       solidity: "0.8.1",
       defaultNetwork: "ropsten",
       networks: {
          hardhat: {},
          ropsten: {
             url: API_URL,
             accounts: [`0x${PRIVATE_KEY}`]
          }
       },
    }

## Paso 14: Compilar nuestro contrato {#compile-contract}

Para asegurarnos de que todo funciona hasta ahora, compilemos nuestro contrato. La tarea de compilación es una de las tareas de hardhat incorporadas.

Desde la línea de comandos ejecute:

    npx hardhat compile

Puede que reciba una advertencia sobre el identificador de licencia SPDX no proporcionado en el archivo fuente, pero no se preocupe si la recibe, ¡esperemos que todo lo demás esté correcto! Si no, siempre puede enviar un mensaje en el [discord de Alchemy](https://discord.gg/u72VCg3).

## Paso 15: Escribir nuestro script de despliegue {#write-deploy}

Ahora que nuestro contrato está escrito y nuestro archivo de configuración está listo, es hora de escribir nuestro script de despliegue del contrato.

Vaya a la carpeta `scripts/` y cree un nuevo archivo llamado `deploy.js`, agregando los siguientes contenidos:

```js
async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

Hardhat detalla excepcionalmente bien lo que hace cada una de estas líneas de código en su [tutorial de contratos](https://hardhat.org/tutorial/testing-contracts.html#writing-tests), aquí hemos adoptado sus explicaciones.

    const MyNFT = await ethers.getContractFactory("MyNFT");

Un ContractFactory en ethers.js es una abstracción utilizada para implementar nuevos contratos inteligentes, por lo que MyNFT aquí es una fábrica para las instancias de nuestro contrato NFT. Cuando se utiliza el plugin ContractFactory y las instancias de contrato del plugin de hardhat-ethers están conectadas al primer firmante por defecto.

    const myNFT = await MyNFT.deploy();

Ejecutar un despliegue() en un ContractFactory iniciará el despliegue y devolverá una Promesa que se resuelva a un Contrato. Este es el elemento que tiene un método para cada una de nuestras funciones de contrato inteligente.

## Paso 16: Desplegar nuestro contrato {#deploy-contract}

¡Ahora ya estamos listos para desplegar nuestro contrato inteligente! Navegue de nuevo a la raíz del directorio de su proyecto, y en la linea de comando ejecute:

    npx hardhat --network ropsten run scripts/deploy.js

Debería mostrarse algo parecido a:

    Contract deployed to address: 0x81c587EB0fE773404c42c1d2666b5f557C470eED

Si nos dirigimos al [Ropsten etherscan](https://ropsten.etherscan.io/) y buscamos la dirección de nuestro contrato deberíamos poder comprobar que se ha desplegado correctamente. Si no puede verla inmediatamente, por favor espere unos instantes, ya que puede llevar algún tiempo. La transacción tendrá un aspecto parecido a este:

![Visualice la dirección de su transacción en Etherscan](./etherscan-transaction.png)

La dirección de origen debe coincidir con la dirección de su cuenta de MetaMask y la dirección de destino dirá «Contract Creation» (Creación de contrato). Si hacemos clic en la transacción, veremos la dirección de nuestro contrato en la casilla To (para):

![Visualice su dirección de contrato en Etherscan](./etherscan-contract.png)

¡Síííííí! ¡Ha desplegado su primer contrato inteligente NFTen la cadena Ethereum!

Para entender qué está pasando internamente, naveguemos a la pestaña del navegador en nuestro [panel Alchemy](https://dashboard.alchemyapi.io/explorer). Si dispone de varias aplicaciones de Alchemy, asegúrese de filtrar por aplicación y seleccione «MyNFT».

![Ver llamadas realizadas internamente con el panel del explorador de Alchemy](./alchemy-explorer.png)

Aquí verá un puñado de llamadas JSON-RPC que Hardhat/Ethers realizó internamente cuando ejecutamos a la función .deploy(). Dos aspectos importantes que debe tener en cuenta aquí son [eth_sendRawTransaction](/developers/docs/apis/json-rpc/#eth_sendrawtransaction), que es la solicitud de escribir nuestro contrato en la cadena Ropsten, y [eth_getTransactionByHash](/developers/docs/apis/json-rpc/#eth_gettransactionbyhash) que es una solicitud para leer información sobre nuestra transacción a partir de un hash (un patrón típico cuando realizamos transacciones). Para ahondar más sobre el envío de transacciones, consulte este tutorial en [Envío de transacciones mediante Web3](/developers/tutorials/sending-transactions-using-web3-and-alchemy/).

Y así concluye la parte 1 de este tutorial. En la [parte 2, interactuaremos con nuestro contrato inteligente acuñando un NFT](/developers/tutorials/how-to-mint-an-nft/), y en la [parte 3 le enseñaremos a ver su NFT en su cartera de Ethereum](/developers/tutorials/how-to-view-nft-in-metamask/).
