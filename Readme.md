# es-cli

A cli for generating projects based on javascript

## Installation

Install it via npm: 

```shell
npm install -g es-next-cli
```

Then you can invoke it everywhere.

## Get Started

Enter the directory where you want to create the project.

Execute the following command in your terminal:

```shell
es-cli create
```

Then select the project template and answer some questions.

## Support Template

1. [es-cli-template-koa-react-spa](https://github.com/sunny-lab/es-cli-template-koa-react-spa): A template for koa+react project
2. [es-cli-template-koa](https://github.com/sunny-lab/es-cli-template-koa): A template for koa project
3. [es-cli-template-nodecloud](https://github.com/sunny-lab/es-cli-template-nodecloud): A template for Yan Rong Tech Inc. nodecloud project


## Template Specification

1. The template must be a git project.
2. There is a directory called `template` in project root.
3. The template files must use [twig](https://github.com/twigjs/twig.js) syntax.
4. Available common template variable:
    
    ```json
    {
        "context": {
            "basic": {
                "name": "projectName",
                "author": "author"
            },
            "npm": {
                "private": true,
                "lisence": "private"
            },
            "git": {
                "hasRepo": false,
                "gitRepo": "https://example.com/"
            },
            "template": {
                "name": "select template name"
            }
        }
    }
    ``` 
5. The template meta and question answer in `meta`

