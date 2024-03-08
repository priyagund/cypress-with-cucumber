# Step by step guid to getting started with cypress with type script

   # Pre-requisite
   1. Should have node js install refer below link 
       ```https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/```
   2. create one folder and open that in VS code
   3. run command to install all libraries dependancy within this folder
       
      ```npm init``` 
   4. run command to install cypress
      ```npm install cypress```
   5. run command to install typescript
      ```npm install typescript```
   6. initialize a new tsconfig.json file with below command
      ```npx tsc --init --types cypress --lib dom,es6``` 
   7. run command to open cypress in local
    ```npx cypress open```   
   8. Add test in e2e folder and run test with below command

      ```npm run cypress open```





# steps by step guide to geeting started for cypress with cucumber

1. add cucumber extention 
2. install cucumber dependany-- refere https://www.npmjs.com/package/cypress-cucumber-preprocessor
    command - 
    ```npm install --save-dev cypress-cucumber-preprocessor```

3. Add below code in cypress.config.ts // referance https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md


    ```import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});```

4. Add below file in cucumber extention setting(optional)

```
"cucumberautocomplete.steps": [
        "cypress/support/step_defination/*.ts"
    ]
```

5. create feature file inside e2e and add sceanrios in given, when then format

6. Create one step defination folder and creat test file(.ts/.js extenation) with similar name of feature file 
7. Add script inside step defination file 
8. run test with below command
   ```npm run cypress open```






   
      
