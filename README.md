# High Impact Engineers

🚧 under construction as of December 2024 🚧

## about

This is the repo for the [High Impact Engineers website](https://high-impact-engineers.github.io/).

## why is the website here now?

In 2024 High Impact Engineers lost continuous funding. As a result it is now [completely volunteer-run](https://forum.effectivealtruism.org/posts/kqQgSj3eyBM5D8B2P/high-impact-engineers-is-transitioning-to-a-volunteer-led). Keeping the website here

- keeps costs down
- makes handovers easy as volunteers will inevitably come and go depending on what capacity they have at any point in time

## contributing

Found a bug? [Open an issue](https://github.com/High-Impact-Engineers/High-Impact-Engineers.github.io/issues).

This website is based on the original website. It was built by [Amanda Matthes](https://amanda-matthes.github.io/). If you want to contribute, shoot them a message.

## local dev setup

Install Ruby (and the development kit).

Once, run:

``` bash
gem i bundler first
```

To install missing gems, run:

``` bash
bundle install
```

To build the website locally, run:

``` bash
bundle exec jekyll serve
```

The website should then be accessible at:

``` bash
http://localhost:4000/
```

It will be regenerated every time you save a new change in a markdown file.

## licensing

- The **code** in this repository is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).
  - that means that you can use the skeleton code for the website as a template or inspiration for another website
  - this excludes all the text and images, though
- The **content** (e.g. text in Markdown files, media) is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
  - you can distribute, remix, adapt, and build upon the content (e.g. for giving talks at EA conferences, writing blogs or articles)
  - but you must give credit (just say something like "taken from the website of High Impact Engineers on date dd.mm.yyyy" and make sure to credit individual authors, where available)
  - and adaptations must be shared under the same terms (so if you use content in a blog post, article or presentation, just put a CC BY-SA 4.0 there as well)
