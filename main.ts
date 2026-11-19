/**
 * THE WORLD TODAY - one broadsheet page, one day: Thursday 19 November 2026.
 *
 * The submission is a single finished image, entry.png, and this file is
 * only the courier that moves it into place. The page reads as a cream
 * newsprint front page for Thursday 19 November 2026, opening with a
 * masthead whose red date tab stamps the edition so the day can be
 * confirmed before a single story is read.
 *
 * What a reader meets, working down the sheet:
 *   1. Masthead - the nameplate, the edition date, and the red date tab.
 *   2. Day-in-numbers strip - the day stated as figures: the ICJ's
 *      genocide vote settling 9-6, Anthropic going public at an 81
 *      billion dollar valuation, the M5.7 quake near Kumamoto, and
 *      UK inflation printing at 3.6 percent.
 *   3. Three hero cards - the Shenzhen three-way summit, the ICJ
 *      handing down its Myanmar ruling, and Anthropic's Nasdaq debut.
 *   4. Five secondary cards - the stories one rank below the heroes.
 *   5. Seven tertiary cards - the wider agenda, still worth the space.
 *   6. Twenty-four evening briefs - short items, each tagged with its
 *      world region so no continent goes uncounted.
 *   7. Date-check footer - the closing stamp tying the whole page to
 *      Thursday 19 November 2026 and no other day.
 *
 * Nothing is drawn, fetched, or generated at run time; main.ts simply
 * copies the completed entry.png into the output directory.
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
