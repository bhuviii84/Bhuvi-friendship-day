import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { friendName, letterParagraphs, reasons, surprisePages, wishes } from '../src/main.js';

describe('friendship surprise content', () => {
  it('personalizes the experience for Bhuvi', () => {
    assert.equal(friendName, 'Bhuvi');
  });

  it('includes enough heartfelt content for an emotional reveal', () => {
    assert.ok(letterParagraphs.length >= 4);
    assert.ok(reasons.length >= 5);
    assert.ok(wishes.length >= 4);
  });

  it('combines the experience into sequential next-button pages', () => {
    assert.ok(surprisePages.length >= 5);
    assert.ok(surprisePages.some((page) => page.title.includes('Smile')));
    assert.ok(surprisePages.every((page) => page.icon));
  });

  it('provides a standalone file that can be opened in any app or browser', () => {
    const singleFile = readFileSync('friendship-day-single.html', 'utf8');

    assert.match(singleFile, /<style>[\s\S]*<\/style>/);
    assert.match(singleFile, /<script type="module">[\s\S]*<\/script>/);
    assert.doesNotMatch(singleFile, /<link\s+rel="stylesheet"/);
    assert.doesNotMatch(singleFile, /<script[^>]+src=/);
  });
});
