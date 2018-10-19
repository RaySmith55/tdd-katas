const sum = require('./sum')

it('Should return zero for an empty string', async () => {
    expect(sum('')).toBe(0);
});

it('Should return zero for two empty strings', async () => {
    expect(sum('', '')).toBe(0);
});

it('Should return zero for three empty strings', async () => {
    expect(sum('', '', '')).toBe(0);
});