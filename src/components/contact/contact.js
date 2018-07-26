import React from 'react'

import './contact.css'

import Facebook from '../social/facebook'
import Github from '../social/github'
import Linkedin from '../social/linkedin'

import me from './me.jpg'

const contact = () => (
  <section className="contact section-content">
    <div className="contact-picture">
      <img src={me} alt="me" />
    </div>
    <div className="contact-content">
      <h3>Hey! Glad you're here. A little more about me</h3>
      <p>
        I create things primarily through web for now, and I am excited on what
        I can do in the future.
      </p>
      <p>
        I pay attention and appreciate to culture and people too, which explains
        why the books that I read are all non tech-related.
      </p>
      <p>
        When I am not working, I loves reading, travelling, keeping myself
        healthy and learning new things.
      </p>
      <p>
        Send me an <a href="mailto:kehan.see@gmail.com">email</a> if you want to
        have a chat.
      </p>
      <p>Thanks for stopping by, wish you have a lovely day ahead.</p>
      <div className="social-contact">
        <Facebook />
        <Github />
        <Linkedin />
      </div>
      <p className="contact-wish">Best wishes, Ke Han</p>
    </div>
  </section>
)

export default contact
