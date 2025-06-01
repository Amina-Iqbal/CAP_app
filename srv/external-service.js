const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { ExternalData } = this.entities;

  this.on('READ', ExternalData, async (req) => {
    return [
      {
        id: '7a8f6e20-1e1d-4ae7-8b28-1f0541234567',
        attributeExternalId: '1000003',
        personExternalId: '103047',
        personIdentifierType: 'EXTERNAL_ID',
        proficiencyLevel: 0,
        proficiencyAssignedDate: '2025-01-14',
        preferenceValue: 0,
        status: 'ACTIVE',
        lastModifiedBy: '103047',
        lastModifiedAt: '2025-01-14T13:14:04.680Z',
        expectedRating: 4
      },
      {
        id: '1fca8edc-3f2d-47b9-b8f0-d7e456789abc',
        attributeExternalId: '1000020',
        personExternalId: '103047',
        personIdentifierType: 'EXTERNAL_ID',
        proficiencyLevel: 0,
        proficiencyAssignedDate: '2025-01-14',
        preferenceValue: 0,
        status: 'ACTIVE',
        lastModifiedBy: '103047',
        lastModifiedAt: '2025-01-14T13:14:04.682Z',
        expectedRating: 4
      },
      {
        id: '2a1e5fb4-6b9a-49f7-97e9-2a9123456789',
        attributeExternalId: '1000076',
        personExternalId: '103047',
        personIdentifierType: 'EXTERNAL_ID',
        proficiencyLevel: 0,
        proficiencyAssignedDate: '2025-01-14',
        preferenceValue: 0,
        status: 'ACTIVE',
        lastModifiedBy: '103047',
        lastModifiedAt: '2025-01-14T13:14:04.644Z',
        expectedRating: 3
      }
    ];
  });
});


// const cds = require('@sap/cds');
// const axios = require('axios');
// const { getOAuthToken } = require('./auth'); 

//  module.exports = cds.service.impl(async function () {
//  const { ExternalData } = this.entities;

//   this.on('READ', ExternalData, async (req) => {
//     try {
//       const token = await getOAuthToken();

//       const response = await axios({
//         method: 'get',
//         url: `${process.env.API_BASE_URL}${process.env.API_ENDPOINT}`,
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Accept': 'application/json'
//         }
//       });

 //       const data = Array.isArray(response.data)
//         ? response.data
//         : response.data.value
//         ? response.data.value
//         : [response.data];

//       return data.map(item => ({
//         id: item.id || '',
//         attributeExternalId: item.attributeExternalId || '',
//         personExternalId: item.personExternalId || '',
//         personIdentifierType: item.personIdentifierType || '',
//         proficiencyLevel: item.proficiencyLevel || '',
//         proficiencyAssignedDate: item.proficiencyAssignedDate || null,
//         preferenceValue: item.preferenceValue || '',
//         status: item.status || '',
//         lastModifiedBy: item.lastModifiedBy || '',
//         lastModifiedAt: item.lastModifiedAt || null,
//         expectedRating: item.expectedRating || ''
//       }));

//     } catch (error) {
//       console.error('[ExternalData] Error:', error.message);
//       req.error(500, `Failed to fetch proficiency data: ${error.message}`);
//     }
//   });
// });
