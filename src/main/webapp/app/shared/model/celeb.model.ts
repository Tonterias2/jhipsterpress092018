import { ICommunity } from 'app/shared/model//community.model';
import { IUprofile } from 'app/shared/model//uprofile.model';

export interface ICeleb {
    id?: number;
    celebName?: string;
    communities?: ICommunity[];
    uprofiles?: IUprofile[];
}

export class Celeb implements ICeleb {
    constructor(public id?: number, public celebName?: string, public communities?: ICommunity[], public uprofiles?: IUprofile[]) {}
}
