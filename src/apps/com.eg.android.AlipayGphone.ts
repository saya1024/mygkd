import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      name: '[选择通知接收范围]弹窗',
      key: 1,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[text="选择通知接收范围"] +3 * > [text="暂时不用"][clickable=true]',
          ],
          fastQuery: true,
          activityIds: [
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          ],
          snapshotUrls: ['https://i.gkd.li/i/19852162'],
          exampleUrls: [
            'https://e.gkd.li/cdac007b-6a28-4c35-8972-b681b213f592',
          ],
        },
      ],
    },
  ],
});
