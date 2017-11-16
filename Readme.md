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


## Template Specification

1. The template must be a git project.
2. There is a directory called `template` in project root.
3. The template files must use [twig](https://github.com/twigjs/twig.js) syntax.
4. Available common template variable:
    
    ```json
    {
        "context": {
            "basic": {
                "name": "projectName"
                "author": "author"
            },
            "npm": {
                "private": true
                "lisence": "private"
            },
            "git": {
                "hasRepo": false
                "gitRepo": "https://example.com/"
            },
            "template": {
                name: "select template name"
            }
        }
    }
    ``` 
5. The template meta and question answer in `meta`

