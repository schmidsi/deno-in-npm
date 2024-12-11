# Using Deno @std packages in NPM projects

**TLDR**:

- To use Deno @std packages in NPM projects one has to install them with `npx jsr add @std/encoding`
- This creates a scoped depenedency in the `package.json` file:
```
"dependencies": {
  "@std/encoding": "npm:@jsr/std__encoding"
}
```
- Adds `@jsr:registry=https://npm.jsr.io` to [`.npmrc`](./base/.npmrc) file.
- So `npm instal` works.
- In order to use this package as a dependency, one has to add `.npmrc` to the files in package.json.
- Then it can be installed/imported with `npm install deno-in-npm-base`. See [dependent/package.json](./dependent/package.json).



## Resources

- https://www.npmjs.com/package/deno-in-npm-base
- https://deno.com/blog/std-on-jsr#nodejs-and-beyond
