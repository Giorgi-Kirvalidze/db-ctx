"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbContext = void 0;
const db_1 = require("./config/db");
class DBContext extends db_1.Database {
    constructor() {
        super();
    }
}
const dbContext = new DBContext();
exports.dbContext = dbContext;
//# sourceMappingURL=index.js.map