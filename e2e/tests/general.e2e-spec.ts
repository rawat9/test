import { Selector } from 'testcafe';

fixture('Fixture').page('https://rawat9.github.io/test/');

test('should click the button and open dialog', async (t) => {
  const button = Selector('button').withAttribute(
    'data-test-id',
    'test-button'
  );
  await t.click(button);
});
