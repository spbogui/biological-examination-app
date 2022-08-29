export interface PersonName {
  givenName: string;
  familyName: string;
  preferred: boolean;
  prefix?: string;
  uuid: string;
}

export interface PersonAddress {
  preferred: boolean;
  address1: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  cityVillage?: string;
  stateProvince?: string;
  country?: string;
  postalCode?: string;
  countryDistrict?: string;
  startDate?: Date;
  endDate?: Date;
  latitude?: string;
  longitude?: string;
  uuid: string;
}

export interface PersonAttribute {}

export interface Person {
  gender: string;
  display: string;
  birthdate: Date;
  birthdateEstimated: boolean;
  age: number;
  names: PersonName[];
  preferredName: PersonName;
  addresses: PersonAddress[];
  preferredAddress: PersonAddress;
  attributes: PersonAttribute[];
  uuid: string;
}

export interface PatientIdentifier {
  identifier: string;
  preferred: boolean;
  identifierType: any;
}

export interface Patient {
  person: Person;
  identifiers: PatientIdentifier[];
  patientIdentifier: PatientIdentifier;
  uuid: string;
}
