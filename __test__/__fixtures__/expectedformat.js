import { setCollor } from '../../src/util/utilites.js';

const expectedDiffStylish = `{
      common: {
        + follow: false
          setting1: Value 1
        - setting2: 200
        - setting3: true
        + setting3: null
        + setting4: blah blah
        + setting5: {
            key5: value5
        }
          setting6: {
              doge: {
                - wow: 
                + wow: so much
            }
              key: value
            + ops: vops
        }
    }
      group1: {
        - baz: bas
        + baz: bars
          foo: bar
        - nest: {
            key: value
        }
        + nest: str
    }
    - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
    + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const expectedDiffPlain = `Property ${setCollor('common.follow')} was added with value: ${setCollor(false)}
Property ${setCollor('common.setting2')} was removed
Property ${setCollor('common.setting3')} was updated. From ${setCollor(true)} to ${setCollor(null)}
Property ${setCollor('common.setting4')} was added with value: ${setCollor('blah blah')}
Property ${setCollor('common.setting5')} was added with value: [complex value]
Property ${setCollor('common.setting6.doge.wow')} was updated. From ${setCollor('')} to ${setCollor('so much')}
Property ${setCollor('common.setting6.ops')} was added with value: ${setCollor('vops')}
Property ${setCollor('group1.baz')} was updated. From ${setCollor('bas')} to ${setCollor('bars')}
Property ${setCollor('group1.nest')} was updated. From [complex value] to ${setCollor('str')}
Property ${setCollor('group2')} was removed
Property ${setCollor('group3')} was added with value: [complex value]`;

const expectedDiffJson = '[{"key":"common","type":"nested","children":[{"key":"follow","type":"added","value":false},{"key":"setting1","type":"unchanged","value":"Value 1"},{"key":"setting2","type":"removed","value":200},{"key":"setting3","type":"changed","value1":true,"value2":null},{"key":"setting4","type":"added","value":"blah blah"},{"key":"setting5","type":"added","value":{"key5":"value5"}},{"key":"setting6","type":"nested","children":[{"key":"doge","type":"nested","children":[{"key":"wow","type":"changed","value1":"","value2":"so much"}]},{"key":"key","type":"unchanged","value":"value"},{"key":"ops","type":"added","value":"vops"}]}]},{"key":"group1","type":"nested","children":[{"key":"baz","type":"changed","value1":"bas","value2":"bars"},{"key":"foo","type":"unchanged","value":"bar"},{"key":"nest","type":"changed","value1":{"key":"value"},"value2":"str"}]},{"key":"group2","type":"removed","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","type":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]';

export { expectedDiffStylish, expectedDiffPlain, expectedDiffJson };
