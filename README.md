# Sanity Studio on Codesandbox

This project uses Codesandbox’s server-side enviroment to run the development server for Sanity Studio.

That means you can configure the studio, and have ut reload with the changes automatically in the Codesandbox browser window.

## Getting started

### 1. Add project settings

Add your project id and dataset name in sanity.json:

```
"api": {
    "projectId": "YOUR_PROJECT_ID",
    "dataset": "YOUR_DATASET_NAME"
  },
```

If you don't have a project, you can open a bash tab (the plus sign down on the right) and run 

```
npx sanity init
```

and follow the instructions. 

### 2. Add CORS

Add your codesandbox URL to your projects CORS settings, either by running: 

```
sanity cors add https://CODESANDBOX_ID.sse.codesandbox.io/
```

in the terminal, or by adding it on [manage.sanity.io](https://manage.sanity.io)

### 3. Start configuring the studio!

Now you can configure the studio by adding schemas in `schemas/schema.js` and so on.

### 4. Deploy the studio

Deploy the studio by running the deploy script in the Server Control Panel on the right

## Customizations

We have added starter files for both overriding some of the CSS variables in the Studio. Just remove the comments in `customization/variableOverride.css`-

You can also add custom structure by adding 

```
{
  "name": "part:@sanity/desk-tool/structure",
  "path": "./customization/deskStructure.js"
}
```

to the `parts`-array in sanity.json. [Read more about how to configure structure](https://www.sanity.io/docs/structure-builder/how-it-works)

