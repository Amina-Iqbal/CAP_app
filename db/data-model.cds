namespace my.api;

entity SkillData {
  key id                     : UUID;
      attributeExternalId     : String;
      personExternalId        : String;
      personIdentifierType    : String;
      proficiencyLevel        : Integer;
      proficiencyAssignedDate : Date;
      preferenceValue         : Integer;
      status                  : String;
      lastModifiedBy          : String;
      lastModifiedAt          : DateTime;
      expectedRating          : Integer;
}
