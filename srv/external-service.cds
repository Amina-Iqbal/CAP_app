using { my.api as api } from '../db/data-model';

service ExternalAPIService {
  entity ExternalData as projection on api.SkillData;
}

annotate ExternalAPIService.ExternalData with
  @Capabilities.DeleteRestrictions : { Deletable: false }
  @Capabilities.UpdateRestrictions : { Updatable: false }
  @Capabilities.InsertRestrictions : { Insertable: false };
