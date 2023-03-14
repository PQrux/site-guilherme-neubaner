import makeQuery from "."

it('should return the query accordingly to the input', () => {
    const qr = makeQuery(720);
    expect(qr).toBe('@media only screen and (min-width: 720px)');
})