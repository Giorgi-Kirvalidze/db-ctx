"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    initDb(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url) {
                throw new Error('provide db connection string');
            }
            if (this._db) {
                console.error('Database is already initialised!');
                return;
            }
            mongoose_1.default.set('strictQuery', true);
            yield mongoose_1.default
                .connect(url)
                .then((client) => {
                this._db = client;
                console.info('Database is connected');
            })
                .catch((err) => {
                console.error('Error while connecting db', err);
            });
        });
    }
    get db() {
        if (!this._db) {
            throw Error('Database not initialised');
        }
        return this._db;
    }
}
exports.Database = Database;
//# sourceMappingURL=db.js.map