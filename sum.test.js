const sum = require('./sum')

it('Should return zero for an empty string', async () => {
    expect(sum('')).toBe(0);
});

it('Should return zero for multiple empty strings', async () => {
    expect(sum('', '')).toBe(0);
});