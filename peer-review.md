## P3 Peer Review

+ Reviewer's name: luigi1015
+ Reviwee's name: fergus588
+ URL to reviewee's Github repo: https://github.com/fergus588/e28

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
I noticed the Back link seems to be always visible, even when you first visit the page.
If you click on the back link when you first load the page, it takes you to a page where it has the Home title but no content below that.
I noticed the back page is stored in localStorage, you should be able to hide the link if there isn't a back page in localStorage

I also noticed there's a console.log and some commented out code in App.vue. That should probably be taken out.

I also noticed the Home page has a title, "Home", in App.vue and what seems like another title, "Pirelli Collezione", in home.vue. One of these should probably be taken out.

### Were there any parts of the interface that you found confusing or unclear?
I found the name of the titleCheck method in App.vue to be a little unclear as it seems to do multiple things.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
I think putting some comments in the titleCheck method in App.vue would help a reader of the code figure out what each part of the method does.

### Are there any parts of the code that you found interesting or taught you something new?
I found the way back was handled, specifically with localStorage, is interesting. I hadn't though of using localStorage that way.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
I'm not sure if this was discussed, but when axios is used to get the title, it's in a very non-dynamic way that only allows for up to 2 titles. I think a more dynamic way to translate the axios data to titles could allow for more flexibility. Perhaps a for loop would work better at this than two if statements.

### Do you have any additional comments not covered in the above questions?
A lot of the content on the pages are hard coded onto the pages. This may be out of the scope of the remainder of the class, but I think a more generic template could be used with storing more than just the title on the server to make the pages more dynamic. It could also reduce the number of components that you need in Vue.
