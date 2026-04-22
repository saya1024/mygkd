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
            '[text="选择通知接收范围"] +3 LinearLayout > [text="暂时不用"][clickable=true]',
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
    {
      name: '[开启通知权限]弹窗',
      key: 2,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '@[desc="关闭"] * < [id="com.alipay.mobile.antui:id/tip_container"] > * [text="开启通知权限 不错过支付信息等重要通知"]',
          ],
          fastQuery: true,
          activityIds: ['com.eg.android.AlipayGphone.AlipayLogin'],
          snapshotUrls: ['https://i.gkd.li/i/26985172'],
          exampleUrls: [
            'https://e.gkd.li/7e1bed1b-1f65-4a80-891f-0fd15f7f4acd',
          ],
        },
      ],
    },
    {
      name: '[花呗先还后付]弹窗',
      key: 3,
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[text="关闭"] < @[clickable=true] -2 FrameLayout < [text="支付宝推荐你"]',
          ],
          fastQuery: true,
          activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity'],
          snapshotUrls: ['https://i.gkd.li/i/26985433'],
          exampleUrls: [
            'https://e.gkd.li/e54976af-341a-4720-a5c3-0759e7227697',
          ],
        },
      ],
    },
  ],
});
