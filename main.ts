/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * The entry point of this submission is entry.png, a single rendered page
 * styled as a cream newsprint broadsheet dated Thursday 19 November 2026.
 * A red date tab sits against the masthead to stamp the edition day.
 *
 * Page anatomy, top to bottom:
 *   1. A day-in-numbers strip of eight cells, holding the headline figures
 *      of the day: the ICJ's 9-6 genocide vote, Anthropic's 81 billion
 *      dollar IPO valuation, the Kumamoto M5.7 earthquake, and UK
 *      inflation printing at 3.6 percent.
 *   2. Three hero cards leading the page: the Shenzhen three-way summit,
 *      the ICJ Myanmar ruling, and Anthropic's Nasdaq debut.
 *   3. Five secondary cards expanding the day's other major stories.
 *   4. Seven tertiary cards filling out the broader news agenda.
 *   5. Twenty-four evening briefs, each tagged by world region.
 *   6. A date-check footer that separates Wednesday's carryover items
 *      from the events that genuinely belong to this Thursday.
 *
 * main.ts itself performs no rendering: it simply copies entry.png into
 * the make.fun output directory when the pipeline runs.
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
