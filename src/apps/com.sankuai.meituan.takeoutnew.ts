import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      name: '[开启消息通知]弹窗',
      key: 1,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[vid="view_mach_content"] > * [text="开启消息通知"] < - > @[clickable=true]',
          ],
          fastQuery: true,
          activityIds: [
            'com.sankuai.waimai.business.page.homepage.MainActivity',
          ],
          snapshotUrls: ['https://i.gkd.li/i/26984299'],
          exampleUrls: [
            'https://e.gkd.li/d548d5de-5682-47f4-beb0-942772f95b09',
          ],
        },
      ],
    },
  ],
});
