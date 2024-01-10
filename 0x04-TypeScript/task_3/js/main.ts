/// <reference path="crud.d.ts" />
import * as CRUD from './crud';
import { RowElement } from './interface';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID = CRUD.insertRow(row);
CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);
