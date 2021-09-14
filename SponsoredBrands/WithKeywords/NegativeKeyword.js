import { Base, List } from '../../base';

export class SBK_NegativeKeyword extends Base {
  get columns() {
    return ['CampaignName', 'KeywordText', 'MatchType'];
  }
}

export class SBK_NegativeKeywordsList extends List {
  get model() {
    return SBK_NegativeKeyword;
  }
}
