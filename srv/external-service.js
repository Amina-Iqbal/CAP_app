const cds = require('@sap/cds');
const axios = require('axios');
const { getOAuthToken } = require('./auth'); 

 module.exports = cds.service.impl(async function () {
//  //  const { ExternalData } = this.entities;

// //   this.on('READ', ExternalData, async (req) => {
// //     try {
// //       const token = await getOAuthToken();

// //       const response = await axios({
// //         method: 'get',
// //         url: `${process.env.API_BASE_URL}${process.env.API_ENDPOINT}`,
// //         headers: {
// //           'Authorization': `Bearer ${token}`,
// //           'Accept': 'application/json'
// //         }
// //       });

// //       const data = Array.isArray(response.data)
// //         ? response.data
// //         : response.data.value
// //         ? response.data.value
// //         : [response.data];

// //       return data.map(item => ({
// //         id: item.id || '',
// //         attributeExternalId: item.attributeExternalId || '',
// //         personExternalId: item.personExternalId || '',
// //         personIdentifierType: item.personIdentifierType || '',
// //         proficiencyLevel: item.proficiencyLevel || '',
// //         proficiencyAssignedDate: item.proficiencyAssignedDate || null,
// //         preferenceValue: item.preferenceValue || '',
// //         status: item.status || '',
// //         lastModifiedBy: item.lastModifiedBy || '',
// //         lastModifiedAt: item.lastModifiedAt || null,
// //         expectedRating: item.expectedRating || ''
// //       }));

// //     } catch (error) {
// //       console.error('[ExternalData] Error:', error.message);
// //       req.error(500, `Failed to fetch proficiency data: ${error.message}`);
// //     }
// //   });
 });
