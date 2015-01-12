---
layout: post
title:  "Blogging with Jekyll"
date:   2014-12-15 09:42:00
categories: blog technology
excerpt: Create a Jekyll blog using Amazon S3 for deployment and Amazon Route53.
---

Here's how I set up this blog using Jekyll, Pygments, Amazon S3, Bootstrap, s3_website, Disqus for comments, and git for version control.

I'm running Mac OS X Yosemite now and these instructions are written for Yosemite, but when I started I hadn't updated. Updating your operating system will probably force you to reinstall [XCode Command-Line Tools,](https://developer.apple.com/downloads/index.action) and you might have to redo some of the steps, like installing the necessary gems, so it's best if you update your operating system before getting started.

Some of the commands in the tutorial below may require administrator access to run. If you are told that you don't have the right permissions or access to perform any of these steps type 'sudo' before the command and enter your password when prompted by Terminal.

##General Set Up
1.	Install [Ruby.](https://www.ruby-lang.org/en/)
	If you already have XCode 6 installed with [Command-Line Tools,](https://developer.apple.com/downloads/index.action) then you already have ruby installed. You can check this by typing in Terminal:

			$ ruby -v

	This will return the version of ruby you have installed.  
  
  
2.	Install [ruby-gems.](https://rubygems.org)  
	Again, you can check and see if you already have gems installed by typing in terminal (from now on anything typed in terminal will be distinguished by a $):

			$ gem -v 

	or

			$ gem --version

	Both of these commands will return the version number of gems you have installed or tell you that it doesn’t recognize the command if gems is not already installed. 

	If you need to install gems, go [here.](https://rubygems.org/pages/download)  
  
  
3.	Install [node.js](http://nodejs.org)  
	Node.js needs to be installed to support CoffeeScript. You can go to [nodejs.org](http://nodejs.org) to install it by clicking the install button, opening the package, and following the directions it gives.  
  
  
4.	Install [Jekyll](http://jekyllrb.com)  
	Now that we have all the prerequisites out of the way, we’re ready to install Jekyll. Because of the previous steps, this is as easy as running:

			$ gem install Jekyll

  
  
  
##Syntax Highlighting with Pygments
Now is a good time to install [Pygments,](http://pygments.org) which we can use for syntax highlighting in our blog posts. If you don’t want to enable syntax highlighting, you can [skip](#back) the next three steps.

5.	Install [python](https://www.python.org)  
	Again, you probably already have python installed since you’re the type of person setting up a Jekyll blog, so you can check to make sure and see the version you have on your computer by running

			$ python –V 

	or 

			$ python –version

  

6.	[pip](https://pip.pypa.io/en/latest/)  
	Next, we want to install pip, which is the easiest way to install and manage Python packages.  
	Securely download [get-pip.py](https://bootstrap.pypa.io/get-pip.py), and then run:

			$ python get-pip.py

  
  
7.	[Pygments](http://pygments.org)  
	Now that we have pip installed, installing pygments is as easy as:

			$ pip install Pygments

    
  
  
<h2 id="back">Back to Jekyll</h2>
8.	In Terminal, navigate to the directory (folder) you want to house your blog by using the cd command.
  

9.	Create a new Jekyll boilerplate-site in the current directory using:

			$ jekyll new . 

  
  
10.	Run 

			$ jekyll serve 

	and visit [http://localhost:4000](http://localhost:4000) in your browser to see the boilerplate site.
  

11.	You should also be familiar with:

			$ jekyll build 

	which recompiles your Jekyll site, but doesn’t serve it to the local host like the serve command.
  
  
**Your Jekyll site is up and running.**
  


##Template Styling
One of the things that makes Jekyll so cool is it’s templating features, which uses the [Liquid](http://liquidmarkup.org) templating engine so that each of your posts and pages can easily maintain a consistent style. I used [bootstrap](http://getbootstrap.com) so that my blog is responsive and looks good on everything from phones to desktop computers. I chose not to use [sass.](http://sass-lang.com)

12.	Download [bootstrap.](http://getbootstrap.com) 
  

13.	Place the bootstrap.min.css file in the css folder of your Jekyll blog.
  

14.	Add a link to your bootstrap css in your head.html in the _includes folder of your Jekyll Blog.

			<link rel="stylesheet" href="{{ "/css/bootstrap.min.css" | prepend: site.baseurl }}">

  

##Hosting
There’s plenty of choices when it comes to hosting a Jekyll site. A popular choice is using [GitHub Pages](https://pages.github.com) because Jekyll actually powers GitHub Pages and GitHub Pages can host Jekyll-powered sites for free. I chose to use [Amazon S3](http://aws.amazon.com/s3/) instead. Amazon S3 is a “simple storage service” made for asset storage in a secure and scalable environment. Amazon also offers the ability to host static websites through their S3 service. For this part of the guide, I'll be using my domain, rwbayer.com as an example. If you're following along as you create your own site, be sure to take careful note of where I include www. and where it is left off as this is an important distinction.

15.	Sign in to your AWS console or create an AWS account [here.]( http://aws.amazon.com)
  

16.	Go to the S3 console under Storage & Content Delivery.  
  

17.	Create a bucket with your domain as the bucket name. 

			rwbayer.com

  

18.	Upload the index.html file for your website and the 404 page to this bucket.

19.	**Record the Endpoint URL for this bucket. You can see this URL in the screenshot below.**

<a href="{{ "/assets/images/s3_bucket.png" | prepend: site.baseurl }}"><img class="postImage" src="{{ "/assets/images/s3_bucket.png" | prepend: site.baseurl }}"></a>
  
###Adding A Bucket Policy
19.	Go to the bucket's properties and click on the "Permissions" option.

20.	Click on "Add a Bucket Policy" and add the following policy, adding in your bucket's name.
  

<script src="https://gist.github.com/rwbayer/33fd9bab38a3bf4bea06.js"></script>
  
<a href="{{ "/assets/images/s3_bucket_policy.png" | prepend: site.baseurl }}"><img class="postImage" src="{{ "/assets/images/s3_bucket_policy.png" | prepend: site.baseurl }}"></a>
  
###Bucket Properties
20.	Go to the bucket's properties and click on the "Static Website Hosting" option.
  

20.	Check the "Enable website hosting" option, make sure the index and 404 page have the correct name in the text boxes, and save.
  
  
21.	Create another bucket with www.domain.com as the name.

			www.rwbayer.com

  

22.	Go to this bucket's properties, and click the "Redirect all requests to another host name" option.
  

23.	Enter domain.com in the text box

			"Redirect all requests to:" rwbayer.com

<a href="{{ "/assets/images/s3_bucket2.png" | prepend: site.baseurl }}"><img class="postImage" src="{{ "/assets/images/s3_bucket2.png" | prepend: site.baseurl }}"></a>
  
  
##Route 53

1.	Login to your AWS account.

2.	Go to the Route 53 console.

3.	Click on "Create Hosted Zone," name the zone your domain.com (for example, I named the Hosted Zone for this site "rwbayer.com"), and click "Create."

4.	Inside the Hosted Zone, create a Record Set for your domain.  

	Do not enter anything in the "Name" input field, so that the name of this Record Set is just "domain.com."  

	For "Type" select "A - IPv4 address."

	Under "Alias" select "Yes."

	For the "Alias Target" enter the URL we recorded earlier.

	Leave the "Routing Policy" as "Simple."

	<a href="{{ "/assets/images/Route53_domain.png" | prepend: site.baseurl }}"><img class="postImage" src="{{ "/assets/images/Route53_domain.png" | prepend: site.baseurl }}"></a>

5.	Create another Record Set named "www.domain.com"
	
	So, enter "www." in the Name input field, so that the name of this Record Set is "www.domain.com."

	Like above, select "A- IPv4 address" for "Type," "Yes" for "Alias," and "Simple" for "Routing Policy."

	Then, under "Alias Target," select the domain.com. option from the dropdown menu.

	<a href="{{ "/assets/images/Route53_wwwdomain.png" | prepend: site.baseurl }}"><img class="postImage" src="{{ "/assets/images/Route53_wwwdomain.png" | prepend: site.baseurl }}"></a>

6.	Make sure you saved both Record Sets. Go "Back to Hosted Zones" and click your zone once so that you can record your Name Servers (four URLS) to point your domain to Route 53. 

	<a href="{{ "/assets/images/Route53_HostedZone.png" | prepend: site.baseurl }}"><img class="postImage" src="{{ "/assets/images/Route53_HostedZone.png" | prepend: site.baseurl }}"></a>

**Changes in Route 53 and to your DNS provider may take up to 48 hours to propagate, refer to your provider's documentation for further information and help.**

  


##S3_website
[s3_website](https://github.com/laurilehmijoki/s3_website) is an awesome open source project that makes it easy to push your Jekyll blog to an Amazon S3 bucket from Terminal. It's very useful because otherwise you'd have to basically remember all the files you edit, go to your S3 console, delete the old file and upload the new file each time you make a change. s3_website handles all that nastiness for us!

24.	Open [AWS IAM console](https://console.aws.amazon.com/iam/)
  

25.	Create a new user that has full access to S3 and CloudFront resources.  
	**Make sure to record your Access Key ID and your Secret Access Key because you will need them in the next steps.**
  
  
26.	Install s3_website by running:

			$ gem install s3_website

  

27.	In Terminal, navigate to your blog/website's root directory and run:

			$ s3_website cfg create

  

28.	Open the `s3_website.yml` file that was generated in your website's root directory, place your AWS credentials and your bucket name in the designated places at the top of the file, and save.
  

29.	Run 

			$ s3_website cfg apply

  

30. Now, you can use:

			$ s3_website push

	to push your site to your S3 bucket. This is the command you will use most often, so it's a good one to remember.
  


##Disqus
Disqus is a pretty standard choice for comments on blogs. Since it is so easy to install on almost any blogging platform, I chose to use it for this site. 

31.	Sign up on disqus.com  
	Go to [https://disqus.com/admin/signup/](https://disqus.com/admin/signup/) Either create an account or sign in to your current Disqus account.
  

32.	Next, go to [https://disqus.com/admin/create/](https://disqus.com/admin/create/) and create a profile for your blog to register the site.
  

33.	Now, copy your [Universal Embed Code](http://docs.disqus.com/developers/universal/).
  

34.	In the template where you want your comments to appear, paste your embed code inside a Liquid if statement, as shown here:

			% if page.comments %
			[UNIVERSAL EMBED CODE FROM DISQUS HERE]
			% endif %

	I chose to add this only to my `post.html` template in my `_layouts` folder. 
  

35.	Now, any page or template where you want there to be comments, set the `comments` attribute to `true` in the YAML Front Matter. For example, I wanted there to be comments on all of my blog posts, so in my `post.html` in my `_layouts` directory, my Front Matter looks like:

			---
			layout: default
			comments: true
			---



##Git
If you'd like to add your blog's code to GitHub, you can do so by following these steps. One important thing to remember is that if you are using s3_website to push your site to your S3 bucket, then there is sensitive information stored in your `s3_website.yml` file. So, we will create a `.gitignore` file to make sure this file isn't posted to GitHub.

36.	From your [GitHub](https://github.com) account, click on `Repositories` and then click the `New` button to create a new repository. Name the repository and add a description if you'd like, but don't initialize the repo with a `README` or add a `.gitignore` file. We can add both of these later. Also, be sure to copy the remote repository URL, which we will need in a later step.

37.	Now, in Terminal, navigate to your blog's root directory and run:

			$ git init

  

38.	Before we add the files, we want to create our `.gitignore` file to be sure our `s3_website.yml` file is not included in the GitHub repo.  
	First, create a `.gitignore` file by running:

			$ touch .gitignore

	Next, we need to add the file's name to the `.gitignore` using a text editor. I use vi, so I would run:

			$ vi .gitignore

	And then, once inside the ignore file, type the name of the file you want to ignore (use `i` to put vi into insert mode, `esc` to exit insert mode, and `:wq` to save the file and quit vi)

			s3_website.yml

  

39.	Since we now have our `.gitignore` file in place, we add all our files to our local repository to stage them for the first commit:

			$ git add .

  

40.	Then, commit the files you've staged:

			$ git commit -m "Initial commit"

  

41.	Using the URL for the remote repository we created in step 1, run:

			$ git remote add origin [REMOTE REPOSITORY URL HERE]
			$ git push origin master

	This adds the remote URL and pushes your site we staged in our local repository to the repository on GitHub. Check the repo you made in Step 1 to make sure you can now see your blog's files online.

##Sitemap
To generate a `sitemap.xml` file to help with your SEO, use [this plugin,](https://github.com/kinnetica/jekyll-plugins) and follow the instructions in the README. Note that when editing your `_config.yml` file that the tabs used in the example may not work in Jekyll, but that by removing the tabs, your configuration will be used.

##robots.txt
To create a `robots.txt` file to also help with your SEO, simply create a text file in your root directory named `robots.txt` and insert the following in the file, replacing the domain with your own:

		User-agent: *
		Allow: /
		Sitemap: http://rwbayer.com/sitemap.xml



##Questions?
If you have any questions, feel free to ask in the comments!  

Also, check out the [GitHub Repo for this blog.](https://github.com/rwbayer/rwbayer.com)  

Thanks for sticking around.