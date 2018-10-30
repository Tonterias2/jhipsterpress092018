import { ICommunity } from 'app/shared/model//community.model';
import { IUprofile } from 'app/shared/model//uprofile.model';

export interface IInterest {
    id?: number;
    interestName?: string;
    communities?: ICommunity[];
    uprofiles?: IUprofile[];
}

export class Interest implements IInterest {
    constructor(public id?: number, public interestName?: string, public communities?: ICommunity[], public uprofiles?: IUprofile[]) {}
}
