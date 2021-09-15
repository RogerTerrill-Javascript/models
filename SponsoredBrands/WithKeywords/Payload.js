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

  addToModel(prop, filterProp, modelProp) {
    const objs = this[prop].modelFilter(filterProp, modelProp);
    return objs.map((obj) => obj.removeProp([filterProp]).getModel());
  }

  addKeywords() {
    this.campaigns.getModels().forEach((model) => {
      model.addToArrayProp(
        'keywords',
        this.addToModel('keywords', 'campaignName', model.getProperty('name'))
      );
    });
  }

  addNegativeKeywords() {
    this.campaigns.getModels().forEach((model) => {
      model.addToArrayProp(
        'negativeKeywords',
        this.addToModel(
          'negativeKeywords',
          'campaignName',
          model.getProperty('name')
        )
      );
    });
  }

  build() {
    this.addKeywords();
    this.addNegativeKeywords();
    return this;
  }

  show() {
    console.log('Campaigns', this.campaigns.getModels()[3].model.keywords);
    return this;
  }
}
