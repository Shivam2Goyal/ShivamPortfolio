export interface Poem {
  id: number;
  slug: string;
  title: string;
  date: string;
  content: string;
  // Optional artwork for the gallery tile. Until a real image is added, the
  // gallery falls back to a decorative placeholder (see Gallery.tsx).
  image?: string;
}

// TO ADD MORE POEMS: copy the format below and update id, slug, title, date,
// content. `slug` must be unique and URL-safe (used in /gallery/writing/:slug).
export const poems: Poem[] = [
  {
    id: 4,
    slug: "for-when-its-my-turn-to-break",
    title: "For When It's My Turn to Break",
    date: "2025",
    image: "/poems/for-when-its-my-turn-to-break.webp",
    content: `I comfort the paining souls,
Hear their stories, take their tolls —
Listening as if their storms
Are heavier than my own norms.

But am I really a good person,
When the thought I try to hide
Is hoping someday they’ll return
To sit with me when I confide?

Am I truly a good friend,
Or just a fraud, playing pretend?
Faking kindness to keep my place —
'Cause without it, I lose my space.

Would they still sit beside me,
When the mask begins to fall?
When I’m no longer comforting,
And my mind builds up a wall?

I call it the mask of kindness,
It hides what’s buried deep inside —
Not compassion, but a selfishness
That guards my bruised-up pride.

A question now for you, my ally,
One I whisper to the sky:
Does it count as love, sincere and true,
If I’m just hoping it returns too?

Does it count as help I give,
If I expect it back to live?
Or am I just carving a space
In someone’s heart — just in case?

I know these words don’t flow or rhyme,
It’s just how my heart speaks each time —
Whenever it feels that quiet chime,
It spills the truth, not polished lines.

I feel the guilt when people say
That I’m so kind, in some soft way —
But it wasn’t kindness pure and true,
I only helped to feel valued too.

So when the time would come someday,
They’d share my pain, not walk away.`,
  },
  {
    id: 5,
    slug: "starfall",
    title: "Starfall",
    date: "2025",
    image: "/poems/starfall.webp",
    content: `We all love a shining star, don’t we?
We look up at the night sky — and there they are,
Twinkling like the happiest souls in the universe.
We compare our loved ones to stars;
And when they leave us,
We name a star in their memory.
They make the night sky more beautiful,
A quiet companion to the moon
In the darkest of nights.

But what happens when a star dies?

Does that mean the love we held
Vanishes with it?
Does the moon mourn —
Or even notice its fall?
Do the other stars dim for a moment
In silent tribute,
Or do they keep glowing, untouched?

We see stars as distant dots,
Tiny lights that flicker and fade —
Not realizing how massive they are,
What gravity they carry,
What fire they hide behind the glow.

We never see how they burn
Just to be beautiful,
How they collapse
Long before their light disappears.

Each day, millions of stars end themselves —
Quietly, without ceremony —
And millions are born,
Only to begin the same fate.

But the moon?
The bloody moon never even turns its face.
Still glowing, still adored,
Unmoved by the collapse nearby.

Only the planets mourn —
The ones that once basked
In that star’s warmth.
They spin colder,
Grow wild,
Drift out of orbit,
Killing and dying in their grief.

Oh, the planets…

And in the end,
All that remains is stardust —
The silence that was always there,
Just hidden
Behind the brilliance of the burning.

A silence so vast,
We only notice it
When the light is gone.`,
  },
  {
    id: 7,
    slug: "परवाना",
    title: "परवाना",
    date: "2026",
    image: "/poems/parwana.webp",
    content: `वो आज भी उस शमा में जलना चाहता है,
उसकी उन्हीं लपटों में तपना चाहता है।
उसकी रोशनी से चकाचौंध है वो,
इस हद तक ख़ुद को त्याग देना चाहता है।

कमज़ोर से पर अब झुलसने लगे हैं,
अग्नि से नैन उसके अब फड़कने लगे हैं।
क्या प्यार है, क्या पागलपन, क्या मोह है वो,
जो उस ज्वाला की ओर कदम बढ़ने लगे हैं।

अपने ही सागर से दिल को तपा रहा वो,
गहराई अपनी शमा को दिखा रहा वो।
अनजाना उस धुएँ को ऊष्मा समझता है,
हो रहा भस्म — उसे आतिश का प्यार समझता है।

अंबर वो साक्षी है,
पतंगे और शमा के मिलन का।
हर चमकती लपट के पीछे,
वृत्तांत है किसी दहन का।

और जब राख बन हवाओं में बिखर जाएगा,
शमा तो यूँ ही जलती रहेगी…
उसी आग में वो आशिक़ाना ख़ुद को पा जाएगा।`,
  },
];
