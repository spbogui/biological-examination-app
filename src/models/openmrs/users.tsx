import { Person } from "./patient";

export interface UserProperty {
  loginAttempts: string;
  "emrapi.lastViewedPatientIds": string;
  defaultLocation: string;
}

export interface Role {
  uuid: string;
  name: string;
}

export interface Privilege {
  uuid: string;
  name: string;
}

export interface User {
  uuid: string;
  display: string;
  username: string;
  systemId: string;
  userProperties: UserProperty;
  person: Person;
  privileges: Privilege[];
  roles: Role[];
}
