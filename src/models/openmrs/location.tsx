export interface LocationAttributeType {
  name: string;
  description?: string;
  datatypeClassName?: string;
  minOccurs?: number;
  maxOccurs?: number;
  datatypeConfig?: string;
  uuid: string;
}

export interface LocationAttribute {
  value: any;
  attributeType: LocationAttributeType;
  voided: boolean;
  uuid: string;
}

export interface LocationTag {
  name: string;
  description?: string;
  uuid: string;
}

export interface Location {
  name: string;
  description: string;
  parentLocation?: Location;
  tags: LocationTag[];
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  postalCode: string;
  childLocations: Location[];
  attributes: LocationAttribute[];
  uuid: string;
}

export interface LocationAttributeSave {
  value: any;
  description?: string;
  attributeType: string;
}

export interface LocationSave {
  name: string;
  description: string;
  parentLocation?: string;
  tags: string[];
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  postalCode: string;
  childrenLocations: string[];
  attributes: LocationAttributeSave[];
}
