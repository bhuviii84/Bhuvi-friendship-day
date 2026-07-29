import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { friendName, letterParagraphs, reasons, wishes } from '../src/main.js';

describe('friendship surprise content', () => {
  it('personalizes the experience for Bhuvi', () => {
    assert.equal(friendName, 'Bhuvi');
  });

  it('includes enough heartfelt content for an emotional reveal', () => {
    assert.ok(letterParagraphs.length >= 4);
    assert.ok(reasons.length >= 5);
    assert.ok(wishes.length >= 4);
  });
});
