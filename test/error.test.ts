import { VCard, XMLCompat } from "..";

describe('Error behaviour', () => {
  it('should throw an error if module was not initialized correctly', () => {
    // the module needs to be initialized like this
    // XMLCompat.initialize(getNodeImpl());
    // however, for this test we just want it to fail
    // therefore we just set it to undefined
    // @ts-expect-error typescript rightfully complains about this
    XMLCompat.initialize(undefined);

    const vcard = new VCard()
      .addFullName('Alice Smith')
      .addFirstname('Alice')
      .addLastname('Smith');

    expect(() => vcard.toXMLString()).toThrowError();
  });
});