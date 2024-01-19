---
slug: self-studying
title: Self-studying
authors: piero
---

We should self-study if whe want to code.

When someone assign us a task, there are sometimes when we actually do not know
how to proceed but usually managers and POs want us to estimate the time
it would take.

So we throw a number and now there is a commitment to deliver the feat.
The problem here is, we are very bad estimating by nature. Our brains
are very kind to future selfs (and among another things that is one of
the reasons people procrastinate).

Lets explore a example; imagine that you are assigned to code a matrix comparison
that resembles a spreadsheet table, dynamically changes the number of products (user can
add or remove columns of products) it should have and the first column and row locked,
meaning when you scroll down the header row should "stick" to the top. And in mobile view
should support jus seeing two columns and maximum, and to see the rest, scroll should be
supported as well.

## Self-efficacy

If you have never done something like this before there is a high probability
to give up even before starting.

If you have done something similar but the attempt was not successful, is probable that you are
going to give it a solid try now, but maybe you would end givin up, although is less probable
this time.

Now, if your previous attempt of doing something similar was at some point successful,
there is a good chance now you are going to do it better.

But, how can I ever gain self-efficacy if everything is always new?

### Foundations

If you do have solid foundations about programming and computer science, like:

- Knowing how to design algorithms
- Understating data structures
- Having a mental model about roles of variables
- Complexity of time and space
- Stack and heap memory allocation
- Profiling

You are going to be more confident on what you are doing. If you are a front end developer
you may wonder "why the heck should I know all of this?".

#### Non-functional requirements and bugs( a.k.a "but it works!, stop asking me for more")

This are those requirements like:

- The web should load in less than 500 ms
- The comparison matrix should be SEO friendly, so no CSR please
- The page should point 90 or more in web vitals health
- If Java Script logic fail should not block the other components' JS
- Should work in IE11 (yeah, there are some people using it to see our page, don't ask me why)
- Should work in a cellphone that has low specs (And other components of the page already have tons of js and there lots of JS scripts for monitoring and business metrics running already)
- Non-critical css should be deferred

My, my, now is being kind of complicated to take all of this in account

And about bugs?

- Other components in the website are interacting with yours making it appear like a Picasso's
- There are shift layouts because of your css is interacting with previous css code
- Previous css code is overriding yours
- In the future will be more an more bugs because components continue changing and people continue to add external scripts

If you are a front end dev, there are tools at your disposition that can help you to
keep track of the performance of you application

For example in chromium based browsers there is a profiler monitor in real time
how many shift layouts are happening, how much space is the JS heap taking, DOM
nodes, and etc. There is a heap/performance profiler too where you can record a session
and evaluate where there are problems in css and js. Also you can emulate a dispositive
with low CPU capacity than yours (we are not giving your machine to the client,
remember those words?)

In addition to catch bugs there si a complete source inspector and debugger where you can,
well, debug and create breakpoints.

Neat, right? Yeah but, when problems encountered, do you know how to solve them and how to
understand the reasons behind those problems to assure you are not going to break anything?

#### Brute force

Yeah, Knuth said once that "premature optimization" is the root of all evil",
so when you code you actually work about it working, which is fine actually

In that context you may use brute force algorithms, which is not a bad thing
but at least when you finish ypu can ask any gpt (chat gpt, code whisper, copilot, etc)
hey, could optimize this thing?

The problem comes when you copy all your code and paste it and say literally to the tool
"hey make this better", and that is not how it works since gpts need context and detailed
instructions. Also gpts are not perfect so they can hallucinate with your requests.

So you **ACTUALLY** need to know how to solve this problems or at least grasp the
fundamentals to guide your generative tools to help you.

But let me tell you something, computer science was born from math, and even if we
do not take take in account the years humanity has spent studying math, this is not new age
science, from Turin and Von Neumann to today, we got enough time to see repetitive problems
and patterns onto this problems, this the libraries we have now.

Therefore, maybe you should not code doing all things via brute force, and could form the start
having at least moderate optimal code and if every other fellow programmer is doing the same,
well all the page is going to perform nice instead of having a monster.

But, this is going to take more time, Actually..., no and yes.If you have never practiced
these things, and never studied about algorithms and its design, well yeah, you have
to deliver functionality, so there is no time to learn now these things.

I have a strong opinion about those people, is that they are not professional.

On the contrary, if you have studied those things, well you have one more point raised to
your self-efficacy. You are actually familiar with the problems.

So everything is new, yes, but maybe there are parts of the problem that can be abstracted and
find patterns on those mini-problems that you already have solved.

It takes a lot of time to master these, indeed. Not only practice but self-study of the theory.
And in a note apart, that is very frustrating and needs patience and dedication, try to be kind
to yourself.

#### There is actually little change

If we read a book from 70s about programming we may find... hilarious, that much of
that books is way still relevant, if not the same. Digital computers just are faster, more powerful
and smaller than in the past but their principles, in most cases, are the same as 50 years ago

Problems software engineers have faced in the 70s are almost the same much enterprises face today
even with all devops change. Why? because we are doing things wrong, perhaps. Yet we have
neat solutions today that we can apply to solve those problems but everyone is too busy to
do things right, again, maybe.

Yem there are new technology everyday oping around to shine solving new problems, right? Kinda, actually
this new tech provides us new paradigms and automatization of some tasks and repetitive problems.
This new tech may improve the speed we do things, but still the programmer's ability and
the system design plays a important role in implementation. Packages can continue being improved, that
is why they have versions, code in repositories (if no one deletes it) is not going to, biological die
some day and revert its status to version 0.0.1. But all your predecessors learned, when they die, that info
that was in their brains, is being deleted for ever from there.

They could have written books and docs but you have to relearn everything from square 0, and there is
a good chance that you are going to interpret that info in a different way than others and know
we have in our hands a internet war in forums about "the correct way". Humans, right?

### Boosting self-efficacy

So, in order to be more confident, you should study lots of things. Maybe you do not have enough time
and other people around you (strong word and opinion coming) is just too mediocre about their work.

For that reason, there should be a time to spare to learn the fundamentals by yourself. Even in
places that have elite educators, _students have to study_ a lot by themselves.

The more you know, the more confident in doing any task you are going to become since
you are going to find parts of that requirement that are variations or other problems
you already solved or at least if is something totally new there is a good chance
that behind it there are principles that you already have review, so are going to be
faster and faster (and maybe more comfortable and more comfortable)
