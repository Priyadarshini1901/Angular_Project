import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
   <article class="media">
  <figure class="media-left">
    <p class="image is-120x120">
      <img class="im" src="assets/images/a.JPG">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <h3><strong>MuffyMead Ferro</strong><small>,The Founder and CEO of Nush Foods</small> </h3>
        I started this little company because I had a real problem with the prepared foods I saw in the store. My problem? They were all full of sugar! And when I say "sugar," I mean sugar, but I also mean all the stuff that acts like sugar in your body: processed carbs like corn, wheat, and other grains that make up so much of the food we have to choose from.

        I knew from monitoring my own body (haha — what I mean is, watching myself gain weight, especially as I got into my 40s and beyond!), that eating those simple carbs didn't satisfy my appetite at all. Actually — just the opposite! You know how when you have one Oreo you only want 10 more? That's what I noticed with myself (and with my kids too, by the way).

        I couldn't find any prepared snack foods —especially not treats — that weren't full of sugar and excess carbs. So I started experimenting with carb substitutes, looking for ingredients high in nutritional value, not just fillers, and that's when I discovered the beauty of flax seeds. Among other things, flax is high in Omega-3 fatty acids, which are so good for your skin and bones. They're also full of fiber which helps maintain healthy blood sugar levels.

        To the flax seed meal I added a few eggs, a little coconut oil, and some natural sweetener, and voila! I had a baked treat I eventually got to where even my kids liked it! (Although this meant a number of batches along the way had to be eaten solely by myself).
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>


<article class="media">
  <figure class="media-right">
    <p class="image is-40x40">
      <img class="im1" src="assets/images/b.JPG">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        I love being a woman in the food business! I hear from sooo many other women about their food and health journeys, how they take care of themselves and their families, and what they're up against in their jobs and their causes. I feel like the keto and low-carb community —the people who want to lose weight, those who have diabetes, those who just want to control their blood sugar and eat healthy —this is one of the most mutually supportive and positive communities on the planet! I've heard a lot of fabulous success stories (struggles, too) but those connections tell me we're on the right track, and part of something bigger than ourselves.I'm so grateful that you visited this page, and please do feel free to chime in below!
        <br>
        I knew from monitoring my own body (haha — what I mean is, watching myself gain weight, especially as I got into my 40s and beyond!), that eating those simple carbs didn't satisfy my appetite at all. Actually — just the opposite! You know how when you have one Oreo you only want 10 more? That's what I noticed with myself (and with my kids too, by the way).
        <br>

I couldn't find any prepared snack foods —especially not treats — that weren't full of sugar and excess carbs. So I started experimenting with carb substitutes, looking for ingredients high in nutritional value, not just fillers, and that's when I discovered the beauty of flax seeds. Among other things, flax is high in Omega-3 fatty acids, which are so good for your skin and bones. They're also full of fiber which helps maintain healthy blood sugar levels.
<br>

To the flax seed meal I added a few eggs, a little coconut oil, and some natural sweetener, and voila! I had a baked treat I eventually got to where even my kids liked it! (Although this meant a number of batches along the way had to be eaten solely by myself).


</p>
    </div>

    <img class="im1" src="assets/images/money.JPG">
    <nav class="level is-mobile">
      <div class="level-right">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
  `,
  styles: [
  ]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
