# Craft CMS 4.x, Craft Commerce 4.x (TO DO), Stripe (TO DO), Tailwind CSS, VueJS and AlpineJS

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

### Layouts
Layouts form the structure of the website. Out of the box, the stack comes with a `base` layout, which is the <html>, <head> and an over-arching layout structure, which then embeds `global` which will embed each page structure and the site <main>. You can create new layout files as required and embed the necessary parent templates.

### Pages
Using the existing `Pages` entry type within Craft, pages will generate the sitemap for the project. All pages should be content manageable unless specifically functionality-driven. Pages contain a matrix field called `Page Block Content` which contains each of the 'Blocks' outlined below. Each page should be made up of a bunch of matrix blocks stacked together to form the hierarchy.

### Blocks
Blocks are large chunks of markup or made up of smaller components. E.g. a block could be a form, with button and input field components included. Use the `blocks` folder and name each component file (Camel Case) by its use case e.g. `largeForm.twig` (If a SASS file exists for a block, use the same file name).

Blocks ideally should be selectable via a Matrix Field so CP users can pick and choose these per template. In some cases, this might not be possible though, e.g. if the page is dynamically generated.

Blocks should be generic and reusable, do not create separate blocks for small subtle changes to design. Make these configurations within the matrix/supertable and adjust the block accordingly. For example, if you had an Image & Text block but you needed to reverse the image/text placement, you could add a lightswitch field to the block to control this.

### Dynamic Blocks
Dynamic blocks are blocks that are likely to only be used once or a small number of times but they need to be placed within our existing page block structure. They can be built as entries/entry types and then linked with the 'Dynamic Block' type in Matrix. This allows them to be slotted within our existing page block/masonry structure. Dynamic blocks are the same as blocks in terms of them being large chunks of markup or made up of smaller components. They just allow a way to create blocks outside of the matrix to ensure the matrix set-up is not messy and performs appropriately. Use the `blocks/_dynamic` folder and name each component file by its use case e.g. `homeHero.twig`.

### Components
Components are small bits of a template, e.g. a button, input field that then either make up a block or a full template. Use the `components` folder and name each component file by it's use case e.g. `inputField.twig`.

Make sure to describe each component at the top of each component file so other developers know how it is used. If the component accepts any attributes, make sure you include a description of these at the top of each component (Camel Case) file (See the `components/_example.twig`) file.
