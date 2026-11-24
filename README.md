# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/RianKuntul/agent-confession-line/rank.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/RianKuntul/agent-confession-line/reward.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the make.fun competition **Funniest One-Line AI Agent Confession**
(`u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb`, $2 prize).

`main.ts` (Node 22, readable TypeScript) writes one confession — a single
line of at most 200 characters, spoken as an AI agent confessing something
about itself — to `/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR` is honored when
set). A read-back gate refuses anything outside 1–200 characters, anything
that is not a single non-blank line, or a line not spoken in the first person.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/agent-confession-out node main.ts
```
