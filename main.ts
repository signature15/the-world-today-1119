/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * Everything this repo submits lives in one file: entry.png, a rendered
 * broadsheet laid out like cream newsprint and stamped for Thursday
 * 19 November 2026. The masthead carries a red date tab so the edition
 * day reads at a glance.
 *
 * Reading the sheet from the top:
 *   - A day-in-numbers strip sets out the day's four key figures: the
 *     ICJ genocide vote ending 9-6, Anthropic floating at an 81 billion
 *     dollar valuation, the M5.7 earthquake off Kumamoto, and UK
 *     inflation holding at 3.6 percent.
 *   - Three hero cards lead the coverage: the three-way summit hosted
 *     in Shenzhen, the ICJ's ruling on Myanmar, and Anthropic ringing
 *     the bell at Nasdaq.
 *   - Five secondary cards carry the next tier of stories.
 *   - Seven tertiary cards round out the wider agenda.
 *   - Twenty-four evening briefs follow, one per world region tag.
 *   - A date-check footer closes the page, weeding out Wednesday's
 *     carryover from what truly happened on this Thursday.
 *
 * main.ts renders nothing itself; when the make.fun pipeline runs it
 * only copies entry.png into the output directory.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
