import { Selector } from 'testcafe';

fixture('Fixture').page('http://localhost:4200/');

test('should click the button and open dialog', async (t) => {
  const button = Selector('button').withAttribute(
    'data-test-id',
    'test-button'
  );
  const formDialog = Selector('div').withAttribute(
    'data-test-id',
    'test-form-dialog'
  );

  const ageField = Selector('#formly_2_input__1')

  await t.click(button);
  await t.typeText(ageField, '3')
  await t.expect(formDialog.visible).eql(true)
});
