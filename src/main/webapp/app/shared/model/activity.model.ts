import { ICommunity } from 'app/shared/model//community.model';
import { IUprofile } from 'app/shared/model//uprofile.model';

export interface IActivity {
    id?: number;
    activityName?: string;
    communities?: ICommunity[];
    uprofiles?: IUprofile[];
}

export class Activity implements IActivity {
    constructor(public id?: number, public activityName?: string, public communities?: ICommunity[], public uprofiles?: IUprofile[]) {}
}
