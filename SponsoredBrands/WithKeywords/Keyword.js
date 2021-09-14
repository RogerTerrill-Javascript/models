import { Base, List } from '../../base';

export class SBK_Keyword extends Base {
  get columns() {
    return [
      'CampaignName',
      'KeywordText',
      'NativeLangaugeKeyword',
      'NativeLanguageLocale',
      'MatchType',
      'Bid',
    ];
  }
}

export class SBK_KeywordsList extends List {
  get model() {
    return SBK_Keyword;
  }
}
