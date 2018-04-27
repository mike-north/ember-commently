import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | not', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 'true');
    await render(hbs`{{not inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'false');

    this.set('inputValue', '0');
    await render(hbs`{{not inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
