import React, { useContext } from "react";
import { SessionInfo } from "../../models/openmrs/settings";
import { UserContext } from "../../../App";
import { useFindLocation } from "../queries/use-location/use-location-queries";
import { LocationAttributeType } from "../../constants/location-attribute-type";
import { Location } from "../../models/openmrs/location";
import { SelectItem } from "@mantine/core";

const useUserContext = () => {
  const sessionInfo: SessionInfo = useContext(UserContext);

  const { location } = useFindLocation(
    sessionInfo.sessionLocation ? sessionInfo.sessionLocation.uuid : "",
    !!sessionInfo.sessionLocation,
    "v=custom:(name,uuid,attributes,parentLocation,childLocations:(name,uuid,attributes:(attributeType:(uuid),value)))"
  );

  // console.log(locationAttributes, "locationAttributes");

  // const {directClientAttribute} =
  //     Fn.extractLocationAttributes(locationAttributes);
  // const isDirectClient = directClientAttribute
  //     ? (directClientAttribute.value as boolean)
  //     : false;

  const userLocation: Location = location ? location : undefined;

  // console.log(location, "location for user");

  const userParentLocation = userLocation
    ? userLocation.parentLocation
    : undefined;
  const childLocations =
    userLocation && userLocation.childLocations
      ? userLocation.childLocations.filter(
          (l: Location) =>
            !l.attributes.some(
              (a: any) =>
                a.attributeType.uuid === LocationAttributeType.DIRECT_CLIENT &&
                a.value === true
            ) ||
            !l.attributes.some(
              (a: any) =>
                a.attributeType.uuid === LocationAttributeType.DIRECT_CLIENT
            )
        )
      : [];

  // console.log(childrenLocation, "children locations for user");

  // const childrenLocationSelectList: SelectItem[] = childrenLocation
  //     .filter((l: Location) =>
  //         (!l.attributes.some((a: any) => a.attributeType.uuid === LocationAttributeType.DIRECT_CLIENT && a.value === true)
  //             || !l.attributes.some((a: any) => a.attributeType.uuid === LocationAttributeType.DIRECT_CLIENT)) &&
  //         (!filterProgram ||
  //             (filterProgram && l.attributes.some((a: any) => a.attributeType.uuid === LocationAttributeType.LOCATION_PROGRAMS && a.value.includes(filterProgram))
  //             )
  //         ))
  //     .map((l: Location) => {
  //       return {value: l.uuid, label: l.name}
  //     });

  const roles = sessionInfo && sessionInfo.user ? sessionInfo.user.roles : [];

  const isSystemDeveloper = roles.some(
    (role) => role.name === "System Developer"
  );

  // const relatedLocation = isDirectClient
  //     ? "NPSPLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
  //     : location
  //         ? location.uuid
  //         : "";

  const hasPrivileges = (privileges: string[]) => {
    return sessionInfo && sessionInfo.user
      ? sessionInfo.user.privileges.some((privilege) =>
          privileges.includes(privilege.name)
        )
      : false;
  };

  // const isDirectClient = relatedLocation?.startsWith("NPSP");

  // console.log(isDirectClient, "isDirectClient");
  // console.log(relatedLocation, "relatedLocation");

  const connectedUser = sessionInfo.user;

  // console.log(sessionInfo);

  return {
    userLocation,
    userParentLocation,
    childLocations,
    hasPrivileges,
    isSystemDeveloper,
    connectedUser,
  };
};

export default useUserContext;
