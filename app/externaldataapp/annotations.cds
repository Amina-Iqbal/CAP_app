using ExternalAPIService as service from '../../srv/external-service';
annotate service.ExternalData with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Attribute External ID',
                Value : attributeExternalId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Person External ID',
                Value : personExternalId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Proficiency Level',
                Value : proficiencyLevel,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : status,
            },
        ],
    },
    UI.HeaderInfo : {
        TypeName : 'External Data',
        TypeNamePlural : 'External Data',
        Title : {
            $Type : 'UI.DataField',
            Value : id
        },
        Description : {
            $Type : 'UI.DataField',
            Value : attributeExternalId
        }
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Attribute External ID',
            Value : attributeExternalId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Person External ID',
            Value : personExternalId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Proficiency Level',
            Value : proficiencyLevel,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : status,
        },
    ],
);

