N.B. this notes file was created by @bradreeder in Nov 2016. At the time of adding this comment (Nov 2018), the workshop is delivered as an intro to node (see the README) and then a code-along. The code-along walkthrough notes for the mentor are in `node-code-along-walkthrough.md` in this folder, and each `step-*` folder holds the correct code for the end of the corresponding step of the code-along.

### introduction

This workshop was prepared to run the first day of node week in the Founders & Coders
javascript bootcamp.

I wanted to write up some post-delivery notes to review when preparing to teach again.

The general format for the day was as follows:

##### morning (10:30 - 01:00)

* First introduce the students to the gitbook for the week so they're familiar with the learning
outcomes, resources they might use, and the general structure for the week.
* Have a discussion with the group around node's background, what it is, what it's used for, what servers are, how server-side javascript differs to what they've done previously. Roughly up to the npm
section in this README.md covers this.
* Do a code-along with the group going through npm and setting up a http server that serves up
html, css, js, and returns a 404 if a requested resource does not exist.

##### afternoon (14:00 - 18:00)

* Give them the node girls tutorial to do in pairs which takes them through the exact same stages
as the morning, but builds up to doing a basic CMS with node.
* Finish by giving a demonstration of the module pattern and module.exports. Refactor the server
we made in the morning to show how to structure your src folder into smaller modules.
* Finally recap over the learning outcomes with the group to show we've made progress.

### notes: morning

I think when introducing a big new topic like node you need first of all context as to what it is,
and then an interactive demonstration to see what it looks like.

Code alongs have benefits, but should be used as context and set-up for real learning. The main learning
does not happen in the code along, but when the student has a chance to implement what they're
learning on their own (i.e. in the afternoon workshop).

What it does ideally:

* Gives an opportunity for installation issues to get teased out, so they won't distract
people in the afternoon.
* Gives everyone an opportunity to ask questions as the code is being written.
* Gives you a chance to do some debugging with everyone as problems arise, so they see
how they might solve later problems.
* Gives everyone in the room a working server on their computer that they can refer to
when they start working on their own.
* It also shows you're involved in their learning.

The only thing I regret is not introducing them to basic es6 syntax like const, let, arrows, template literals, as I did the code along, as es6 comes with node and there's no reason not to use it.

### notes: afternoon

I think the node girls workshop is perfect as it allows them to cover the same material
from the morning in their own time, but with an opportunity to build on that depending on their progress.
If they finish the CMS then that's a significant achievement to make on your first day of server-side programming, which instils confidence going into new territory.

There were a few issues raised with it in its repo that should be addressed if it's used again so it can be perfected, as I think these issues distract away from the workshop's purpose.

If I did anything at the end of the day I wanted to spend time refactoring what we did in the morning. Doing this depends on how confident you feel the group is. Refactoring the server to use the module pattern and module.exports is an okay choice as it teaches them how to structure their src folders, and teaches them more about modules and the overall structure of the server, key topics for day 1 with node.

### other notes:

* Every time a new term is introduced don't assume people know what it means.
* Make sure you have someone on hand who's experienced in resolving installation issues, as they're a pain, and can shut down the experience for a student.
* Don't read from notes when talking, it's not engaging. This is hard to do well as it requires preparation.
* Try to ask questions to keep people engaged, draw out existing knowledge in the group, and so you know where they're at, what needs to be clarified, etc.
* Try to come back to the learning outcomes at some point in the day. It's an opportunity to recap what they've done and show they're making progress.
