import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.picacomic.fregata',
  name: 'PicACG',
  groups: [
    {
      name: '首页公告板弹窗',
      key: 1,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[vid="button_dialog_announcement_positive"][text="不再顯示"][clickable=true]',
          ],
          fastQuery: true,
          activityIds: ['com.picacomic.fregata.activities.MainActivity'],
        },
      ],
    },
    {
      name: '漫画封面下方广告横幅',
      key: 2,
      enable: false,
      rules: [
        {
          key: 1,
          matches: ['[vid="imageButton_banner_close"][clickable=true]'],
          fastQuery: true,
          activityIds: ['com.picacomic.fregata.activities.MainActivity'],
        },
      ],
    },
  ],
});
