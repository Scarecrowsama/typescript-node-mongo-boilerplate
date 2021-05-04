# Typescript

Javascript superset, some of the configurations are worth a bit more detail as to why they are there.

```
rootDirs: ["src", "tests"]
```
Not only to tell typescript which root directories to use but these are required for the paths in order to work properly.

```
"target": "ES2019"
```
This is a personal choice or even a development requirement, feel free to change this to whichever version you consider appropiate.

```
"strictNullChecks": false
```
Another personal choice as this may break some specific checks for null that your application needs to make for certain types or returns.

```
"paths": {
  "@/*": ["*"],
  "@/tests/*": ["../tests/*"]
}
```
The paths are a cool feature to use @ (or any other symbol you may prefer) as a shortcut for your imports, for example you could do "@/public/images/my_image.jpg" and the @ will always pick the root directory and replace it with it.

[Typescript Repo](https://www.npmjs.com/package/typescript)