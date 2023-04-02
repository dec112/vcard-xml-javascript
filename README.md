# vcard-xml - XML VCard parsing and writing

This library should simplify handling VCard XML documents.

This README currently only describes simple usage of this library.

## Important Notices

This library requires `@xmldom/xmldom` as a peer-dependency *only* in node.js environments!
JavaScript browser environments always have a DOM implementation on board, therefore `@xmldom/xmldom` is not needed there.

## Installation

Requires `node.js` and `npm`.

```bash
npm install vcard-xml
```

## Usage

### VCard creation

```typescript
import { 
  VCard,
  Gender,
  KeyId,

  XMLCompat, 
  getNodeImpl,
  getWebImpl,
} from 'vcard-xml';

// if xmldom interface is available (e.g. on web browsers)
XMLCompat.initialize(getNodeImpl());
// if xmldom interface is NOT available (e.g. on node environments)
// also don't forget to install required peer dependency @xmldom/xmldom
XMLCompat.initialize(getWebImpl());

const vcard = new VCard()
  .addFullName('Alice Smith')
  .addFirstname('Alice')
  .addLastname('Smith')
  .addNamePrefix('Dr.')
  .addNameSuffix('MSc.')
  .addBirthday(new Date(Date.UTC(1990, 2, 3)))
  .addGender(Gender.OTHER)
  .addTelephone('+436641234567')
  .addEmail('info@dec112.at')
  .addStreet('Example Street 3')
  .addCode('1234')
  .addLocality('Brunnenthal')
  .addRegion('Upper Austria')
  .addCountry('Austria');

if (!vcard)
  throw 'Something is wrong with this vcard';

const xmlObj = vcard.toXML();
console.log(vcard.toXMLString(vcard));
```

### VCard parsing

```typescript
import { 
  VCard,
  Gender,
  KeyId,

  XMLCompat, 
  getNodeImpl,
  getWebImpl,
} from 'vcard-xml';

// if xmldom interface is available (e.g. on web browsers)
XMLCompat.initialize(getNodeImpl());
// if xmldom interface is NOT available (e.g. on node environments)
// also don't forget to install required peer dependency @xmldom/xmldom
XMLCompat.initialize(getWebImpl());

const parsed = VCard.fromXML('<xml...>');

if (!parsed)
  throw 'Something is wrong with this vcard';

console.log(vcard.fullName);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
Distributed under the MIT License. See LICENSE for more information.