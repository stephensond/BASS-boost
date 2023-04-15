# Inspiration
We started off wanting to make something that manipulated media somehow, sort of switching between video, audio, or text manipulating. Eventually, one of our team members bought up boosting the bass of a video, but rather than pronounce it as "bayse" he pronounced it "bass" like the fish. When we pointed that out we all of a sudden felt a rush of excitement in actually making a BASS booster (bass as in the fish) which was completely fish-themed and manipulated your uploaded video in various messed up ways.

# What it does
Our website, hosted on Netlify, basically takes in a video upload and then uses the Web Audio API on JavaScript to edit the video data. This effectively boosts the frequency and bass of the video, significantly lowering the quality of the audio and increasing its impact on your speaker, all for comedic effect.

# How we built it
We dove a bit into how the Web Audio API works and created an audio processing graph with it. We then connected the uploaded video, hooked up some filters, and began changing the frequency of the audio.

As for the front end, we created a landing page introducing our concept. Then you could click on a button to get to the actual upload page and see as the video you uploaded got mutilated in various horrifying ways. All of this was done with React, which we didn't have that much experience in beforehand.

# Challenges we ran into
Our MAIN challenge was figuring out React. Some of us had worked on websites before, while others had very little experience. We spent a lot of time frantically searching Google to fix errors and learn about certain things in React like passing props or adding custom styles, but it ended up being a learning experience for us all.

Other challenges included:

 - Figuring out how to use the Web Audio API.
 - Figuring out file uploading and general JS/HTML syntax.

# Accomplishments that we're proud of
 - Figuring out how to manipulate file audio: It's not something many people are willing to dive into and I'm glad we decided to do this and learn along the way.

 - Our site design: Some of us were pretty new to web design and hadn't gone into web design as much before, however we were able to come up with a slick design that was simple and easy to use. It's not the most sophisticated design, but it was something that fit really well with our theme and was a perfect juxtaposition to the actual purpose of the website.

# What we learned
 - We learned a lot about general React practices by doing them first hand.
 - We learned quite a bit about audio processing via JavaScript, and while we may still not be experts at it, we've opened a door for ourselves in terms of what we can do - by actually trying it.
 - And most importantly we learned that anything is possible with commitment. We had a lot of fun making this website and seeing what sorts of wacky things we could do with it, and it made trying out another project, whether in a hackathon or outside, far less daunting.

# What's next for BASS Booster
While wrapping up the project, we came up with some cool ideas that we could add if we revisit BASS Booster:

 - Add support for web URLs, like YouTube etc.
 - Have the edited video be downloadable so that users can share their abomination with their friends and loved ones.
 - Add better support for Mobile. We tried to implement it earlier but it's very clunky so far and it would require a bit of research into Mobile Web Dev. 
