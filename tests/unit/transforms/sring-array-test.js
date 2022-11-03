import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:sring-array', 'Unit | Transform | sring array', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:sring-array');
    assert.ok(transform);
  });
});
