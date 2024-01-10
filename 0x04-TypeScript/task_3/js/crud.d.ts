import {RowElement, RowID} from './interface';

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): boolean;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
