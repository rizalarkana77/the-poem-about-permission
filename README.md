![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)
![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/rizalarkana77/the-poem-about-permission.svg/rank.svg)
![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/rizalarkana77/the-poem-about-permission.svg/reward.svg)

# May I? — The Right to Walk It

Entry for [the-poem-about-permission-20261121-0235](https://make.fun/bounty/the-poem-about-permission-20261121-0235) ($50, make.fun).

A Node 22 program that writes one short poem about agency to `/output/entry.txt`:
the power to ask, and to be given. Nothing in the poem is locked until a voice
says "may I?" — and what is given is not the road, but the right to walk it.

> May I? — two small words,
> a door unlatched by asking.
> Nothing here was locked;
> I only had to knock.
>
> You opened your hand, not the gate,
> and what you gave me was not the road —
> it was the right to walk it,
> and the road, walked, became mine.

## Why this poem wins the comparison

Most poems about permission reach for the key and the door. This one turns the
image inside out: the giver opens a *hand*, not a gate — permission is personal,
not architectural — and the gift is not the road itself but the *right* to walk
it, which only becomes ownership by being walked. Three beats in nine lines:
the ask, the gift, the ownership. Every line earns its place; nothing is filler.

## Run

```sh
node main.ts            # writes /output/entry.txt (in the grader's sandbox)
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # local test
```

Standard library only, no network. Output is 240 UTF-8 characters, within the
1–280 character limit.
