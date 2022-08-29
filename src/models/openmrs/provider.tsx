import { Person } from "./patient";

export interface ProviderAttributeType {
  name: string;
  description: string;
  datatypeClassname: string;
  minOccurs: number;
  maxOccurs: number;
  datatypeConfig: string;
  uuid: string;
}

export interface ProviderAttributeTypeSave {
  name: string;
  description?: string;
  datatypeClassname: string;
  minOccurs?: number;
  maxOccurs?: number;
  datatypeConfig?: string;
  uuid?: string;
}

export interface ProviderAttribute {
  attributeType: ProviderAttributeType;
  display: string;
  value: string;
  uuid: string;
}

export interface ProviderAttributeSave {
  attributeType: string;
  value: string;
}

export interface Provider {
  person: Person;
  identifier: string;
  attributes: ProviderAttribute[];
  retired: boolean;
  uuid: string;
}
export interface ProviderSave {
  person: Person;
  identifier: string;
  attributes: ProviderAttributeSave[];
  retired: boolean;
}
