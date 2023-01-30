import mongoose from 'mongoose';
export declare class Database {
    private _db;
    initDb(url: string): Promise<void>;
    get db(): typeof mongoose;
}
//# sourceMappingURL=db.d.ts.map