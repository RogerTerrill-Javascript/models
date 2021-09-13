import { Model, List } from './base';

export class SBK_Campaign extends Model {
  get defaults() {
    return {
      name: '',
      budget: '',
      budgetType: '',
      startDate: '',
      endDate: '',
      adFormat: '',
      state: '',
      brandEntityId: '',
      bidOptimization: '',
      bidMultiplier: '',
      portfolioId: '',
      creative_BrandName: '',
      creative_BrandLogoAssetId: '',
      creative_Headline: '',
      creative_Asins: '',
      landingPage_Asins: '',
      landingPage_Url: '',
    };
  }
}

export class SBK_CampaignsList extends List {
  get model() {
    return SBK_Campaign;
  }
}
