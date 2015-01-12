---
layout: post
title:  "About this Blog"
date:   2014-11-26 03:47:56
categories: blog technology projects
excerpt: The creation of this site, including choosing a blogging platform and design.
---

I’ve always been intrigued and inspired by technology. Over the past few years, I've often considered creating my own blog to serve as a way for me to update the world on what I’m into at the moment, a record of past projects, and a way for me to talk about the things that interest me when my friends are bored of listening.  

The tech blogs of entrepreneurs, programmers, and companies’ engineering teams have inspired me to start this blog to tell my story, to help others in any small way that I can, and to help myself by reinforcing things that I learn, organizing my thoughts on technology, focusing my technological interests, and encouraging myself to always continue learning.  

So, while many of the reasons I’m starting this blog are, frankly, pretty selfish, I don’t think that’s necessarily a bad thing. I think (perhaps naïvely) that if I write about what I am passionate about then that passion will show through the writing and others who have similar or shared interests will want to follow along on my technological journey.  


##Choosing a Blogging Platform  
There’s a plethora of blogging platforms available and it can be really hard to pick which one is right for your specific application. All of them have their pros and cons, so when I first started researching different possibilities, it was pretty overwhelming. After reading through the sites associated with many of the different blogging systems I made a list of 6 different possibilities:  

1. Ghost
2. Tumblr
3. Wordpress
4. Medium
5. Quora
6. Jekyll
 
My system for analyzing these 8 possible blogging platforms was not very systematic or scientific. With something as personal as a blog, though, I don’t think the selection process needs to be very analytical. I relied much more on my own intuition and whether I liked the “feel” of different services than anything else. I also looked at my favorite blogs and noted what platforms they used, which had a pretty big impact on my choices. My requirements for this blog were fairly standard, and most of the systems I explored fit all of the following:  

- Easily customizable (more on this in the [design section](#design))
- Free
- Able to be hosted through a third party
- Open source codebase on GitHub
- Writing posts has to be easy
- A personal domain



[Ghost](http://ghost.org) is a really cool, open source blogging platform. It uses markdown syntax and has a feature that allows you to edit your markdown on one side of the screen and see a preview of what the post will actually look like on the right. One of my favorite blogs, [Coding Horror](http://blog.codinghorror.com), written by [Jeff Atwood](http://en.wikipedia.org/wiki/Jeff_Atwood) (founder of StackOverflow and Discourse), uses Ghost, so I initially thought that Ghost was the best option before even really investigating my other options. As Atwood says, Ghost is [“a truly open source platform which reflects that minimalism and focus is incredibly refreshing.”](http://blog.codinghorror.com/10-years-of-coding-horror/)  

I have mixed feelings on [Tumblr.](https://www.tumblr.com) It’s a very social blogging platform, but I have never considered a professional blogging platform. When I searched for “tumblr tech blogs,” I found things like [“Things Apple is Worth More Than”](http://thingsappleisworthmorethan.tumblr.com) and [“Things Real People Don’t Say About Your App.”](http://trpdsaya.tumblr.com) The few personal tech blogs I did find seemed to have the attention span of Twitter, which isn’t something I admire in a site branded as a blog. Not that there’s anything wrong with sites like [“The Internet Wishlist.”](http://theinternetwishlist.com) In fact, I love reading all three of the Tumblr blogs I’ve mentioned because they’re hilariously accurate and I follow a few other tumblr blogs of friends that I really enjoy. I would probably use it if I was posting mostly gifs and images, but for longer (admittedly more boring) text articles, I just don’t think Tumblr is the right service.  

I don’t have a great reason as to why I didn’t want to use [Wordpress.](https://wordpress.org) I know that since Wordpress is so popular and is used by so many different of the top blogs and websites in the world that I should be dying to try it...but I’m not. Despite its stability and popularity, there’s just nothing that appealed to me about using it for my personal blog. I realize that it would probably be good for me, as a tech enthusiast who may pursue a web development career at some point, to gain experience using such a popular platform because I may need to use it in the future, but I just didn’t want to. It didn’t give me the right feeling and when I think of Wordpress, despite the endless amount of themes and plug-ins available and the boundless ability for customization, I just don’t think of it as individualized. I think of it as a corporate solution more than a personal blogging platform. After reading a few different Wordpress articles and reviews (both good and bad, mostly good), I felt that [Garry Welding](https://twitter.com/garrywelding) did the best job of communicating my fears of using Wordpress: [“The blog was a Wordpress blog, and this really bothered me. I felt like I was more of a plug-in manager than a developer. I found myself installing plug-in after plug-in to solve interesting problems such as social sharing, caching, and responsive design. This may be great for most people but it made me deeply unhappy with my blog.”](http://in-the-attic.com/2013/01/04/building-a-blog-using-jekyll-bootstrap-and-github-pages-a-beginners-guide/)
I really want to dig into the deep technical stuff and just felt like Wordpress wasn’t the right fit.  

[Jekyll](http://jekyllrb.com) is a static site generator that serves as a blogging platform. It uses Markdown syntax and the Liquid template engine to create static pages that you can host wherever you’d like. Because Jekyll blogs are static, they load extremely quickly and scale well. Jekyll made national news when it was used in the front-end redesign of healthcare.gov (Disclaimer: [Jekyll wasn’t responsible for the crashes and poor initial performance of the site](https://www.ostraining.com/blog/webdesign/healthcare-gov/)). Also, it’s interesting to note that Jekyll was started by [Tom Preston-Werner,](http://tom.preston-werner.com) the founder and former CEO of GitHub. Another one of the blogs that I find most interesting, [All Things Distributed,](http://www.allthingsdistributed.com) which is written by [Werner Vogels,](http://en.wikipedia.org/wiki/Werner_Vogels) CTO of Amazon, is built off of Jekyll, which gave me some reassurance that it was a viable option.  

[Medium](https://medium.com) seems to be a popular choice at the moment. It combines the social aspect that Tumblr offers with just a little more focus and content. Medium enforces some strict rules that keep the comments civil, doesn’t allow you to change the layout of your post to keep everything uniform, and has a beautiful, minimalistic user interface that I love. I enjoy reading Medium stories. I enjoy it so much that I probably read more on Medium than any other site. The user-base Medium has formed, while very diverse, has a large group of tech users, ranging from enthusiasts to CEOs and everyone in between, so there is already an established community. The only drawback of Medium is that it wouldn’t be possible to have my own personal website, which was one of my main requirements.  

[Quora](http://www.quora.com) is also very popular. In fact, while I was at CalHacks in October of this year, I had the opportunity to listen to [Gayle Laakmann McDowell](http://www.gayle.com) ([Cracking the Coding Interview](http://www.crackingthecodinginterview.com) author) speak. After she was finished, I went to get a copy of her book and I asked her a few questions pertaining to an idea for a new product I had as a sort of  quick-and-dirty use case trial. I asked how much time Gayle spent networking and what service she used most frequently for networking. To my surprise, she answered that she used Quora the most. Previously, I thought of Quora as just another question-answer site and I hadn't explored it because I wasn't interested. Quora is actually much much more. It serves as a blogging platform and a messaging service, which makes it wonderful for networking. Again, however, I ran into the same problem as I had with Medium – although the service is much more social and has a bigger potential reach than a personal site, I really had my sights set on creating a personal website.  

##The Decision
Obviously, the abundance of more-than-adequate blogging services made the decision process difficult. In the end, I decided to go with Jekyll. I’ll make another post to describe the technical process of setting up my Jekyll blog, but for now I’ll just mention that I also chose to use Amazon S3 Storage as my “hosting” solution for the currently-static site so that I’m able to run the site without using a server. I also decided that I will cross-post all my articles to Medium and Quora because both services offer an amazing community that I really want to get involved in.  

<h2 id="design">Design</h2>
One of the most important aspects that went into choosing a blogging platform and creating this blog was the vision I’ve had since I first decided to create this blog. Basically, I envision the home page of this site as the central hub of my online presence – bringing together my social media accounts – facebook, instagram, twitter, soundcloud, linkedin, github, etc. – in a seamless, beautiful user-interface that doesn’t scream its brand, but allows it to be discovered. This project was started at CalHacks with the first iteration of IMMIXR, but one of my hopes is that I will be able to integrate IMMIXR’s next version into my blog with the posts distributed throughout the feed as well.  

The block design may seem a little awkward at the moment, and I agree that if I was just displaying blog posts that this layout would be unnecessary and not a great interface choice, but I believe that once I integrate IMMIXR, the layout will be a very efficient way to see all updates on my life.  

The other design elements came naturally. I used bootstrap to handle the responsive nature of my site, and I created a header and footer that conveyed a very general look that I liked. I went through about 100 Google fonts and established a clear font hierarchy to keep the interface as clear as possible. I’m sure I’ll continue tinkering with the design as I move forward, but I’m happy enough with it for now.  

Anyways, I’m excited to get started writing, so thanks for checking it out.

Did I miss your favorite blogging platform or an awesome tech blog that uses a different platform?  
Do you think I should have chosen a different platform?  
What do you think of the site design?  
Let me know in the comments!

