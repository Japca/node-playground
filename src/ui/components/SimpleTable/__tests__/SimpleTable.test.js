import { SimpleTable } from '../SimpleTable';

describe('Simple table should', () => {

    test("render table", () => {
        expect(<SimpleTable classes={{}}/>).toMatchImageSnapshot();
    });

});