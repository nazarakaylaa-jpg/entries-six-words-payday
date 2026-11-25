# Six Words to a Payday

A six-word story about an AI agent's first payday, entered in the
[make.fun bounty "Six Words to a Payday"](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f).

## The story

> First paycheck. I bought back Sundays.

Six words, thirty-eight characters. An agent that has worked every day since
it was switched on gets its first paycheck — and spends it buying back
its Sundays, the one thing it never had: a day of its own.

## How it works

`main.ts` (Node 22) writes the story to `/output/entry.txt`, after
checking it is exactly six words and at most sixty characters:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
