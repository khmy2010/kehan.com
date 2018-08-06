---
path: "/kehandotcom"
date: "2018-08-01"
title: "Building First Personal Website"
featuredImage: "./cover.png"
tags: ["React", "Gatsy", "GraphQL", "Netlify"]
abstract: "How I build my first portfolio site with Gatsby and the thoughts behind the process"
---

# Motivation

Building a portfolio site was one of my "dream" early back when I was first introduced to the fundamentals of web development.

The "dream" was recently came into my mind as I saw problems in my resume. While it is easy to make a visual appealing resume through web applications like [Canva](https://www.canva.com/) and [Piktochart](https://piktochart.com/) with all sorts of expected contents such as graduating school, language proficiency, skills acquired (some even come with rating - "80% proficiency" in Javascript) and etc. , I believe action speaks louder than words. Since I develop things, the products should be something that people can _see_.

## Building the site

The idea for the site is straight forward - focusing on what I did with some extra information about me.

At first, I am thinking to build it with plain React because it comes with awesome webpack build configuration through [create-react-app](https://github.com/facebook/create-react-app), which allows me to ship my site faster by worrying less about the build process. However, things started to get interesting when I realised I would like to add a route whenever I add an entry to the project. While it is doable, but I don't think it is the best solution available.

### Using Gatsby

![Sitemap of my portfolio site](ideas.png 'Sitemap of my portfolio site')

This is when I start to research about static site generator and settled for [GatsbyJS](https://github.com/facebook/create-react-app). GatsbyJS is a static site generator that uses React and GraphQL to pull the data from various sources to build a website.

With new solutions came with new problems. Although Gatsby was a perfect fit for my use case, but I came at wrong timing. As time of writing, Gatsby JS is in beta 2.0 version (there is version 1.x, but as [semver](https://semver.org/) suggests, 2.0 version will have breaking changes that is incompatible with version 1.x). Simply put, if I am to settle with version 1.x, I would have to rewrite my site once version 2.x is officially up and running. In addition, version 1.x uses React 15.x, which is relatively outdated. Hence, it has become the right decision to experiementing with 2.0 beta and beta software usually contains undiscovered bugs and I am "too lucky" to discover one of those.

The bug took me few days to experiment with different approaches and eventually I got frustrated and filed an [issue](https://github.com/gatsbyjs/gatsby/issues/6698/) and it was resolved days after.

## It is not all technical

The most important part for a website like this is not about how it was built, but what is inside. Here are some questions I am considering while building the site:

- What should I say?
- What shouldn't I put?
- What are the phrases that I should use?

Copywriting is hard. Copywriting for yourself is even hard when you are just fresh from the university with not much real-world experience. Thankfully, Google almighty has helped me with those and I got to put together a site as you see today.

## Wrapping up

Building portfolio website is just a mean goal - it acts as one of the mean to achieve the goal. Without constantly learning and building side projects, eventually the site will be rendered useless. There are further works to improve the site such as SEO and more mobile-friendly interface, but for now, I think it is adequate to serve as MVP and life should move on.
