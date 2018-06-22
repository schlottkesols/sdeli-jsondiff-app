module.exports = () => {
    const dream = require('dreamjs');
    const Chance = require('chance');
    const chance = new Chance();
    const data = {entries: []};

    const randomVersion = () => {
        return Math.floor(Math.random() * 2) + 1 === 1 ? "v1" : "v2"
    };

    const entryIds = ['1', '1234', '1234567890', '0987654321'];

    dream.schema('Entry', {
        name: 'name',
        age: 'age',
        address: 'address',
        contact: {
            phone: 'phone',
            servicePhone: /^(800[1-9]{6})$/
        }
    });

    let index = 0;
    for (let i = 0; i < 40; i++) {
        entryIds.forEach(entryId => {
            data.entries.push({
                id: index,
                entryId: entryId,
                version: randomVersion(),
                payload: dream.useSchema('Entry').generateRnd().output(),
                createdAt: chance.date()
            });
            index++;
        });
    }
    return data
};