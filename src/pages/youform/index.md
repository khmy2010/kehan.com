---
path: '/youform'
date: '2018-08-06'
title: 'YouForm'
featuredImage: './youform.png'
tags:
  [
    'React',
    'Redux',
    'Thunk',
    'Heroku',
    'MongoDB',
    'NodeJS',
    'Express',
    'Jest',
    'Enzyme',
    'TravisCI',
    'Puppeteer',
  ]
abstract:
  'YouForm is a web based form builder developed during my final year. It was a full stack application that focus on respondent experience by putting in features such as auto save progress. On top of that, it is able to collect responses and tabulate them in graph or table format in real-time'
---

# "Mother" of all forms

When I first started my final year project, I had one goal in mind: I want to be able to use it _even_ after the project end. It means that the project has practical value rather than just for the sake of graduating. The idea came when I was thinking several systems that I will build at that time and it came to my realisation that there is a common pattern behind all the systems - the manipulation of form data, which led me to build an all-purpose form builder - YouForm

![Purpose of form](ask.jpeg 'No matter how the form is composed, it always ask for information')

## What makes it special?

The problems identified (through survey) was the form interface wasn't intuitive and leads to low response rate of the form. There are few features designed to tackle the issue:

- Auto-save progress (the ability to save progress locally while you answering the form, so that you won't need to do it all over again)

- Reusable questions (some question tends to be repeated over different forms)

- Logic flow (frustrated with the "manual" follow-up question like if you answer this, please answer the following question too etc)

- Respondents are able to drop feedback to specific question for clarity and feedbacks

On top of that, like all form builder, it is able to collect responses and export them to excel format.

### Technical Implementation

This project is a full stack application with the following tech stacks:

- React + Redux
- Node.JS + Express JS
- MongoDB
- Jest + Enzyme + Puppeteer
- Github + TravisCI + Heroku

![Architecture of my application](architecture.png 'Architecture of the application')

The application architecture is essentially a MERN stack with RESTful API server to handles the request from the front end.

![Express architecture of my application](express.png 'Express route handler')

# Wrapping up

YouForm is more than a project. It represents what I learnt throughout the 4 years and some of them, is learnt within 3 months. In fact, the technology stack that used by this application are all learnt throughout 3 months. Learning is a dirty word, and getting hands dirty by applying what I learnt in the final year project is one of the best choices ever. This project was lucky to won the best report and best project for the graduating class of FYP2 at 2017/2018.

There are further works could be done to improve the site such as rolling out mobile app with React Native.

## Links for this project:

[GitHub Repository](https://github.com/khmy2010/YouForm)

[Heroku [Deployed Version]](https://youform.herokuapp.com/)

[Travis CI](https://travis-ci.org/khmy2010/YouForm)
