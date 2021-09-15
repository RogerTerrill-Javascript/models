import { WORKBOOK } from '../../constants';
import { SBK_CampaignsList } from './Campaign';
import { SBK_KeywordsList } from './Keyword';
import { SBK_NegativeKeywordsList } from './NegativeKeyword';

export class Payload {
  constructor() {
    this.campaigns = new SBK_CampaignsList(WORKBOOK[0]);
    this.keywords = new SBK_KeywordsList(WORKBOOK[1]);
    this.negativeKeywords = new SBK_NegativeKeywordsList(WORKBOOK[2]);
  }

  get _campaigns() {
    return this.campaigns;
  }

  addKeywords(model) {
    const keywords = this.keywords.modelFilter(
      'campaignName',
      model.getProperty('name')
    );
    return keywords.map((keyword) => keyword.getModel());
  }

  build() {
    this.campaigns.getModels().forEach((model) => {
      model.addToArrayProp('keywords', this.addKeywords(model));
    });
    return this;
  }

  show() {
    console.log('Campaigns', this.campaigns.getModels()[0].show());
    return this;
  }
}
