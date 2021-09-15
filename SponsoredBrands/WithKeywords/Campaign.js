import { Base, List } from '../../base';

export class SBK_Campaign extends Base {
  get columns() {
    return [
      'Name',
      'Budget',
      'BudgetType',
      'StartDate',
      'EndDate',
      'AdFormat',
      'State',
      'BrandEntityId',
      'BidOptimization',
      'BidMultiplier',
      'PortfolioId',
      'Creative_BrandName',
      'Creative_BrandLogoAssetId',
      'Creative_Headline',
      'Creative_Asins',
      'LandingPage_Asins',
      'LandingPage_Url',
    ];
  }

  build() {
    this.setAttributes({ keywords: [], negativeKeywords: [] });
    this.setArrayAttributes(['creative_Asins', 'landingPage_Asins']);
    this.generateNestedProperties();
    return this;
  }
}

export class SBK_CampaignsList extends List {
  get model() {
    return SBK_Campaign;
  }

  getCampaign(index) {
    return this.models[index];
  }
}
