import { WORKBOOK } from '../../constants';
import { SBK_CampaignsList } from './Campaign';
import { SBK_KeywordsList } from './Keyword';
import { SBK_NegativeKeywordsList } from './NegativeKeyword';

export class Payload {
  constructor() {
    this.campaigns = new SBK_CampaignsList(WORKBOOK[0]).print();
    this.keywords = new SBK_KeywordsList(WORKBOOK[1]);
    this.negativeKeywords = new SBK_NegativeKeywordsList(WORKBOOK[2]);
  }
}
