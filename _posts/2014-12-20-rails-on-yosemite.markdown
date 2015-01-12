---
layout: post
title:  "Rails on Yosemite"
date:   2014-12-20 09:30:00
categories: blog technology
excerpt: How to install ruby and Rails on Mac OS X Yosemite.
---

I recently started a web programming class from [University of Reddit](http://universityofreddit.com) called [“Web Programming with Ruby on Rails.”](http://universityofreddit.com/class/40250/web-programming-with-ruby-on-rails) The [course](http://www.schneems.com/ut-rails/) is taught by University of Texas professor, [Richard Schneeman.](http://www.schneems.com) My first homework assignment was to get used to command line basics, which I feel like I have a pretty good handle on,  and to install ruby and Rails on my computer. Here’s how I installed ruby and rails on Mac OS X Yosemite 10.10.1.

##Install XCode Command-Line Tools
You will need to install [XCode Command-Line Tools](https://developer.apple.com/downloads/index.action) if you haven’t already. I already had these installed from when I downloaded [XCode 6](https://developer.apple.com/xcode/downloads/) and told it to install them when prompted.


##Install RVM 
Next, you need to install [ruby.](https://www.ruby-lang.org/en/) Now we already have ruby installed because we installed the Command-Line Tools, but we still need a [ruby version manager.](https://rvm.io) 

Why do we need a version manager if we just installed the latest version of ruby? If you are maintaining older Rails applications, you might need to install Ruby 1.9.3. And, in the future, you will need to install newer Ruby versions as they are released. There are so many different versions of ruby and many of your applications will use different ones. RVM makes managing the different versions simple.  


To install RVM, open Terminal and run: 

		$ \curl -sSL https://get.rvm.io | bash -s stable
		$ source $HOME/.rvm/scripts/rvm  
		$ rvm -v  

To start using RVM you need to run `source /Users/bobbybayer/.rvm/scripts/rvm` in all your open shell windows, and you may need to reopen all shell windows.

After installing RVM, you can install different versions of ruby using:

		$ rvm install VERSION_NUMBER_HERE

You should also be familiar with the `rvm use` command which can be used to change the version of ruby that you use. You can use commands like `rvm use 2.1.5` to select a specific version of ruby or `rvm use system` to use your system's version of ruby. 

##Install rails
To install rails, open Terminal and run: 

		$ gem install rails

You can use the `rails -v` command to check and see what version of rails you have installed and to double as a check to make sure the install succeeded.


I also installed [homebrew](http://brew.sh), which is not necessary, but makes installing packages much easier.
