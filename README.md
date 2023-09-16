# Craft CMS 4.x, Craft Commerce 4.x (TO DO), Stripe, Tailwind CSS, VueJS and AlpineJS

This is a [Craft CMS 4.x](https://github.com/craftcms/cms) and [Craft Commerce 4.x](https://github.com/craftcms/commerce) boilerplate [Myth Digital](https://myth.digital) use internally for projects.

## Requirements

- PHP 8.0+
- Composer 2.x.x
- Node 16.x.x

## Install [TO DO]

## npm Scripts

`npm run dev`
Your go-to for local development

`npm run prod`
Generates production assets (Minify, favicon etc). Perfect for running on server.

`npm run setup`
If project already exists, this will pull, migrate and apply project config and run dev tasks


## Whats included [TO DO]

## Terminology

### Components
Components are small bits of a template, e.g. a button, input field that then either make up a block or a full template. Use the `components` folder and name each component file by it's use case e.g. `inputField.twig`.

Make sure to describe each component at the top of each component file so other developers know how it is used. If the component accepts any attributes, make sure you include a description of these at the top of each component (Camel Case) file (See the `components/_example.twig`) file.

### Blocks
Blocks are large chunks of markup, or made up of smaller components. E.g. a block could be a form, with button and input field components included. Use the `blocks` folder and name each component file (Camel Case) by it's use case e.g. `largeForm.twig` (If a SASS file exists for a block, use the same file name).

Blocks ideally should be selectable via a Matrix Field so CP users can pick and choose these per template. In some cases this might not be possible though, e.g. if the page is dynamically generated.

## Roadmap [TO DO]
