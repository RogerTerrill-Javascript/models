import { Employee } from './employee';
import { WORKBOOK } from './constants';
import { SBK_Campaign, SBK_CampaignsList } from './campaign';

const programmer = new Employee({
  firstName: 'Roger',
  lastName: 'Terrill',
});

const campaign = new SBK_Campaign(WORKBOOK[0][1]);

const sbk_campaigns = new SBK_CampaignsList(WORKBOOK[0]);

console.log('***********', sbk_campaigns.models);
