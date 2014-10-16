/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'nantoh24';
OpenSpending.year = '2012';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' } ,
  '1-1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-1': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-3': { icon: 'icons/admin-housing.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-4': { icon: 'icons/vote.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-5': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-6': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#0AB971' },
  '3': { icon: 'icons/c_kenkou_fukushi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-1': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-2': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-3': { icon: 'icons/c_kosodate_shien.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-4': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-5': { icon: 'icons/c_syoubou_bousai.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/c_kenkou.svg', color: '#C75746', bcolor: '#D33673' },
  '4-1': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '4-2': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },
  '4-3': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-1': { icon: 'icons/c_sankaku_ikusei.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-2': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-3': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-4': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-5': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-1': { icon: 'icons/tourism.svg', color: '#C75746', bcolor: '#EC2406' },

  '7': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#938626' },
  '7-1': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#938626' },
  '7-2': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#938626' },
  '7-3': { icon: 'icons/c_waterdoun.svg', color: '#C75746', bcolor: '#938626' },
  '7-4': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#938626' },
  '7-5': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#938626' },
  '7-6': { icon: 'icons/toilet.svg', color: '#C75746', bcolor: '#938626' },
  '7-7': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#938626' },
  '7-8': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/c_syoubou_bousai.svg', color: '#C75746', bcolor: '#C75746' },
  '8-1': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#D33673' },
  '9-1': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#D33673' },
  '9-2': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#D33673' },
  '9-3': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' },
  '9-4': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' },
  '9-5': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#D33673' },
  '9-6': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/c_bousai.svg', color: '#C75746', bcolor: '#790586' },
  '10-1': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#790586' },
  '10-2': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#790586' },
  '10-3': { icon: 'icons/publicdebt.svg', color: '#C75746', bcolor: '#790586' },
  '10-4': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#790586' },
  '10-5': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#790586' },
  '11-1': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#790586' },
  '11-2': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' }
};


