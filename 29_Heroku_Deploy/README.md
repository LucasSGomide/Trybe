# PM2 PROCESS MANAGEMENT

## INSTALL

## COMMANDS

- START:
``` bash
pm2 start index.js
```

- START + NAMING PROCESS:
``` bash
pm2 start index.js --name <PROCESS_NAME>
```

- START SPECIFIC PROCESS
``` bash
pm2 start <PROCESS_NAME>
```

- START WITH WATHCMODE
  - It will watch for process changes, so PM2 will automatically reload your application.
``` bash
pm2 start <PROCESS_NAME> --watch

pm2 start <FILE_NAME> --name <PROCESS_NAME> --watch 
```

- STOP SPECIFIC PROCESS:
``` bash
pm2 stop <PROCESS_NAME>
```

- STOP ALL PROCESSESS:
``` bash
pm2 stop all
```

- RESTART PROCESS:
  - This command stops all processess and only then start them all again. So when you use it, be aware that can be a short period of down time.
``` bash
pm2 restart <PROCESS_NAME>
```

- RELOAD PROCESS:
  - This command uploads all new processess and only then shutdown the old ones. This way you can avoid the downtime.

- DELETE PROCESS:
``` bash
pm2 delete <PROCESS_NAME>
```

## PROCESS MONITORING

- LIST:
  - List all running processess. The output shows the process name, ID, version and others.
  - Version: It's possible to update it at the `pckage.json`, it's a good way to show code improvoment along time.
``` bash
pm2 list

pm2 ls
```

- ORDERED LIST:
``` bash
pm2 list --sort name:desc

pm2 list --sort name
```

- PROCESSES DETAILS:
``` bash
pm2 show <NOME_DO_PROCESSO>
```

- LOGS:
  - Show app history in real time.
  - If you dont specify a process name, all process are listed.
``` bash
pm2 logs

pm2 logs <NOME_DO_PROCESSO>
```

- MONIT:
``` bash
pm2 monit
```

## GRAPHIC INTERFACE

- START BROWSER:
  - To use it you have to [sign up](https://id.keymetrics.io/api/oauth/register).

``` bash
pm2 plus
```

## CLUSTER MODE

- It enables us to get a better application perfomance.
- **Load Balance** You can "balance the load" in different CPUs, servers or processess.
- If one core bug and kill a process the others will keep running.

- USING IT:
  - You can decide how many instaces you will run.
  - If you choose to use **MAX** PM2 will create one instancy for each available CPU.
``` bash
pm2 start index.js --instances 2 --name <NOME_DO_PROCESSO>

pm2 start index.js --i 2 --name <NOME_DO_PROCESSO>

pm2 start index.js -i max --name <NOME_DO_PROCESSO>
```

## ECOSYSTEM FILE
**IMPORTANT: IF YOU MAKE CHANGES IN THIS FILE AFTER THE APPLICATION START RUNNING, YOU HAVE TO DELETE AND RESTART YOUR PROJECT.**

- Can be setup using Javascript , JSON ou YAML.

- It's possible to create a config/setup for PM2 to run you app. This file is named `ecosystem`. In this file you can setup local variables, application logs, options and behavior.

- To execute it you only have to use one of those commands: start , restart , stop , delete or reload with the `<FILE_NAME>`.
```bash
pm2 [start|restart|stop|delete] ecosystem
```
### JAVASCRIPT

- Ecosystem **JavaScript** file exemple:

```JavaScript
module.exports = {
  apps: [
    {
      name: 'app',
      script: './index.js'
    },
    //...
  ]
};
```

### YAML

- Ecosystem **YAML** file exemple:
  - Single App
``` YAML
apps:

- name: app
  script: ./index.js
```
- Running the application:

```bash
pm2 start ecosystem.config.yml --only app-1
```

- Ecosystem **YAML** file exemple:
  - Multiple Apps.

``` YAML
apps:

- name: app-1
  script: .app-1/index.js
- name: app-2
  script: .app-2/index.js
- name: app-3
  script: .app-3/index.js
```

- Running the application:

```bash
pm2 start ecosystem.config.yml

pm2 start ecosystem.config.yml --only app-1

pm2 start ecosystem.config.yml --only "app-1,app-2"
```

### INSTANCY

- ACTIVATING CLUSTER MODE:
  - `instances`defines the number of processes which the application 
``` YAML
apps:

- name: app
  script: ./index.js
  exec_mode: cluster
  instances: 4
```

### LOCAL VARIABLES:

- SETTING UP LOCAL VARIABLES:
  - If you intend to use Local Variables you have to set them up here.

```YAML
apps:

- name: app
  script: ./index.js
  exec_mode: cluster
  instances: 4
  env_prod:
    ENVIRONMENT: PRODUCTION
  env_homolog:
    ENVIRONMENT: HOMOLOG
```

- Using it:

```bash
pm2 start ecosystem.config.yml --env homolog
```




