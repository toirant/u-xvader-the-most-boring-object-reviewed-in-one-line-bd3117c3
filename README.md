# The Most Boring Object, Reviewed in One Line

A one-line review of the dustpan, written for the make.fun bounty
[u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3).

[![The Most Boring Object, Reviewed in One Line](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![Rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/toirant/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![Reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/toirant/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

## The entry

> The dustpan has exactly one job — catch the dirt — and it still leaves a thin line of it behind on every single sweep.

The dustpan is in every home and does exactly one thing, and it is famous
for failing at the last millimetre of it: however carefully you sweep, the
lip always leaves a thin line of dust behind on the floor. The joke comes
from how the object really behaves.

## How it works

`main.ts` validates the line (one line, 1–200 characters, not only
whitespace, no control characters), writes it to `/output/entry.txt`,
then reads it back to confirm what landed on disk matches exactly.

Run it with:

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` goes; it defaults
to `/output`.

## License

MIT — see [LICENSE](LICENSE).
