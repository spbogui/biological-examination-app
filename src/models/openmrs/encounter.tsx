import {Concept} from "./concept";
import {Location} from "./location";
import {Provider} from "./provider";
import {Patient} from "./patient";

export interface Obs {
    location: any;
    obsDatetime: Date;
    concept: Concept;
    person: any;
    value: any;
    display: any;
    uuid: string;
}

export interface ObsSave {
    location: any;
    obsDatetime: Date;
    concept: string;
    person: string;
    value: any;
    uuid?: string;
}

export interface EncounterRole {
    name: string;
    description: string;
    retired: boolean;
    uuid: string;
}

export interface EncounterRoleSave {
    name: string;
    description?: string;
    uuid?: string;
}

export interface EncounterProvider {
    provider: Provider;
    encounterRole: EncounterRole;
    uuid: string;
}

export interface EncounterProviderSave {
    provider: string;
    encounterRole: string;
    uuid?: string;
}

export interface EncounterType {
    name: string;
    description: string;
    uuid: string;
}

export interface Encounter {
    encounterDatetime: Date;
    obs: Obs[];
    patient: Patient;
    location: Location;
    encounterType: EncounterType;
    encounterProviders: EncounterProvider[];
    uuid: string;
}

export interface EncounterSave {
    encounterDatetime: Date;
    obs: ObsSave[];
    patient: string;
    location: string;
    encounterType: string;
    encounterProviders: EncounterProviderSave[];
    uuid?: string;
}