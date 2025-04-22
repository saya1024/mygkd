import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1483277,
  name: 'mygkd',
  version: 1,
  author: 'saya1024',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/sata1024/mygkd',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
