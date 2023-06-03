# Bot para Discord con AWS 

# Integrantes:
* Alarcon Aquize Mirko Alejandro: [![Git](https://img.shields.io/badge/Git-Profile-blue)](https://github.com/MRK2705)

* Quiroga Perez Alex: [![Git](https://img.shields.io/badge/Git-Profile-blue)](https://github.com/Aper-ux)

## Diagrama propuesto de la arquitectura del proyecto
![architecture](./architecture.png)

## Instrucciones de ejecución

Requisitos para la ejecución del proyecto
- AWS SAM CLI: https://docs.aws.amazon.com/es_es/serverless-application-model/latest/developerguide/install-sam-cli.html
- Usuario de AWS conectaddo al CLI: Ejecute "aws configure" en la terminal y llene los campos de "AccessKey" y "SecretKey" ubicados en su cuenta AWS.
- Bot de discord creado e invitado a un servidor para ejecutar las pruebas correspondientes.

### Clona el proyecto de github

* git clone git@github.com:Arquitectura-de-Software-01-2023/DIscordBot.git


Instalación de paquetes requeridos:

* npm install (si no tiene nodeJS instalado en su sistema)

### Preparación del bot de discord
1. Habilite el modo desarrollador en su perfil de discord Get your development Guild (Discord Server) Id by enabling Developer Mode in settings and right-clicking your guild.
2. Get App Id and Bot Token from Discord Developers Portal.
Para una ayuda visual ingrese al siguiente enlace: 
4. Copiar las siguientes lineas en el archivo ".env" ubicado en el proyecto:
- APP_ID=1112879113640874024
- BOT_TOKEN=MTExMjg3OTExMzY0MDg3NDAyNA.G3wrdj.92pwLb6DHLmErf5XuvAnOtNbUgRKo_decTuB0Q
- PUBLIC_KEY=2aab30fd236267a834e0c865b202ae66c3260c4bbf53a385a88d579d9173e00b
- GUILD_ID=142306720427802624 (id del servidor donde esta alojado el bot)

### Genera el template
Para generar el template debe ubicarse en la ruta "src/" del proyecto y ejecutar el siguiente comando desde la terminal

* node generate_template/generate.js

### Registrar comandos
Ejecute el siguiente comando para registrar los comandos que podrá usar el bot en el servidor de discord:

* node register_commands/register.js

### Construya y ejecute el proyecto
Para construir y ejecutar el poryecto, ejecute el siguiente comando en la terminal:

* sam build && sam deploy --guided

Mientras se va construyendo el proyecto le apareceran unos mensajes con terminación [y/n]
Presione enter hasta que vea el siguiente mensaje:

[Some function] may not have authorization defined, Is this okay? (en este mensjae ingrese la respuesta "y")
Luego siga presionando enter hasta que dejen de aparecer los mensajes.

Una vez finalizada la construcción del poryecto le aparecerá lo siguiente:

------------------------------------------
Outputs
------------------------------------------
- Key                 ProxyGWEndpoint
- Description         API Gateway endpoint URL to pass 
                      to Discord Application Portal
- Value               https://s0meur1.execute-api.zone
                      -name-1.amazonaws.com/Prod/
------------------------------------------

Debe copiar el enlace de VALUE y pegarlo en la configuración del bot de discord, en el apartado de "Interactions endpoint URL"
Para copiar la url de VALUE en el lugar correcto, siga las instrucciones del enlace de drive (el enlace se encentra en la parte superior del readme).

## Detener la ejecución del proyecto
Detenga el proyecto ejecutando el siguiente comando desde la terminal:

* sam delete

Puede utilizar las siguientes herramientas para ejecutar el codigo:

* [WebStorm](https://docs.aws.amazon.com/toolkit-for-jetbrains/latest/userguide/welcome.html)
* [Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/welcome.html)
