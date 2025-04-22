import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: '哔哩哔哩',
  groups: [
    {
      name: '[订阅感兴趣的通知]弹窗',
      key: 1,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[text="订阅感兴趣的通知"] +2 * > [text="暂不开启"][clickable=true]',
          ],
          fastQuery: true,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          ],
          snapshotUrls: ['https://i.gkd.li/i/19852128'],
        },
      ],
    },
    {
      name: '[你喜欢视频的弹幕氛围吗？]弹窗',
      key: 2,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[text="你喜欢视频的弹幕氛围吗？"] < * - [vid="close_layout"][clickable=true]',
          ],
          fastQuery: true,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.bplus.privateletter.notification.NotificationsActivity',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19852146',
            'https://i.gkd.li/i/19852152',
          ],
        },
      ],
    },
  ],
});
