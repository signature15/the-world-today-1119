/**
 * THE ONE-DAY PAPER is a single cream broadsheet for Thursday 19 November 2026.
 *
 * The finished artifact is one page designed to read like a newspaper edition:
 * compact, date-specific, and dense with the day's news rather than a website.
 * Its masthead establishes the title and date before the reader reaches the
 * carefully ordered stories below.
 *
 * The page brings together 40 stories, arranged from the most prominent leads
 * through supporting coverage and shorter briefs. A stat band gives the day a
 * quick numerical pulse, while a region tally makes the geographic spread of
 * the reporting visible at a glance.
 *
 * The cream paper, dark rules, restrained type, and red date mark create the
 * visual language of a printed front page. At the bottom, a date-check footer
 * closes the edition by reaffirming Thursday 19 November 2026, keeping the
 * entire sheet anchored to one calendar day.
 *
 * This TypeScript file does not draw or generate the broadsheet. It only moves
 * the completed entry.png into the requested output directory at run time.
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
