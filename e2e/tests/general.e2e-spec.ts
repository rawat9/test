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

  const numberField = Selector('mat-label').withText('Test number').parent().child('formly-field-mat-input').child('input');

  await t.click(button);
  await t.expect(numberField.visible).ok()
  await t.typeText(numberField, '3')
  await t.expect(formDialog.visible).eql(true)
});
