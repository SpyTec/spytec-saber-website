---
title: Hello World
layout: post
date: 2019-06-14 13:00:00
tags:
  - hello world
---

It's been maybe 5 years since I last created a blog/website for myself. Figured I'd re-create one! 
Right now I'm an associate software engineer at Red Hat. My plan for this blog is to focus on topics 
I enjoy or problems I've solved that others could learn from.

Apart from being a developer, I'm a gamer and a community moderator. I currently moderate communities of 

* [r/EliteDangerous](https://www.reddit.com/r/EliteDangerous)
* [r/PlanetZoo](https://www.reddit.com/r/PlanetZoo) (As well as the [r/PlanetZoo Discord](https://discord.gg/vAkVsak))
* [r/redhat](https://www.reddit.com/r/redhat)
* [r/fedora](https://www.reddit.com/r/fedora)

With my primary focus on r/EliteDangerous and r/PlanetZoo.

## What is it build on?

My previous website was made using CodeIgniter, with my own styling, my own database queries, and a lot of issues.
I was able to query websites by their query, display the most popular posts and tags, and I had my own cards for my projects.

This time around I'm not going to waste time on a blog post, instead I will use a tool which is simple and powerful - [Saber](https://saber.land).

[Saber](https://saber.land) is a static page generator built in [VueJS](https://vuejs.org), and the primary reason I chose this is because it is extremely versatile.
It is essentially a Single Page Application that allows for VueJS and JavaScript within its Markdown pages. Like this:

<button @click="count++">{{ count }}</button>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

Which is just this in the template. Simple!

```js
<button @click="count++">{{ count }}</button>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
```