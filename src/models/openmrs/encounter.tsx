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
    orders: Order[];
    uuid: string;
}

export interface EncounterSave {
    encounterDatetime: Date;
    obs: ObsSave[];
    patient: string;
    location: string;
    encounterType: string;
    encounterProviders: EncounterProviderSave[];
}

export interface OrderType {
    name: string;
    description: string;
    parent: OrderType;
    javaClassName: string;
}

export interface Order {
    type: OrderType;
    orderNumber: string;
    action: string; // NEW, REVISE, DISCONTINUE, RENEW
    urgency: string; // ROUTINE
    dateActivated: Date;
    careSetting: string; // INPATIENT,OUTPATIENT
    encounter: Encounter;
    patient: Patient;
    concept: Concept;
    orderer: Provider;
    orderReason: Concept
}

export interface OrderSave {
    type: string;
    orderNumber: string;
    action: string;
    urgency: string;
    dateActivated: Date;
    careSetting: string ;
    encounter: string;
    patient: string;
    concept: string;
    orderer: string;
    orderReason: string
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