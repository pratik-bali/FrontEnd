import { BaseEntity } from './../../shared';

export class Demoentity implements BaseEntity {
    constructor(
        public id?: number,
        public username?: string,
        public password?: string,
    ) {
    }
}
