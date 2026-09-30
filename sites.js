/**
 * プレビュー対象サイトの設定
 * ここを編集すれば、サイトの追加・修正ができます（index.html は触らなくてOK）。
 *
 * id        : 英数字の識別子（共有リンクにも使われます）
 * name      : ボタンに表示する名前
 * css       : head で読み込む CSS の URL（本番と同じ順番で並べる）
 * headHtml  : （任意）Google Fonts の link など、head に追加したい HTML
 * bodyClass : （任意）本番の body に付いている class
 * wrapper   : （任意）本番でブロックが入る親要素。{{content}} の位置にブロックが入ります
 * baseUrl   : （任意）ブロック内の相対パス（画像など）の基準にする URL
 */
window.PREVIEW_SITES = [
  {
    id: 'moratame-pc',
    name: 'モラタメ PC',
    css: [
      'https://www.moratame.net/css/icon-font/style.css?2026092913',
      'https://www.moratame.net/css/bootstrap.v3.3.7--scope.css?2026092913',
      'https://www.moratame.net/css/reset.css?2026092913',
      'https://www.moratame.net/css/properties.css?2026092913',
      'https://www.moratame.net/css/main.css?2026092913',
      'https://www.moratame.net/css/layout.css?2026092913',
      'https://www.moratame.net/css/module.css?2026092913',
      'https://www.moratame.net/css/message.css?2026092913',
      'https://www.moratame.net/css/tooltip.css?2026092913',
      'https://www.moratame.net/css/style--common-sp-and-pc.css?2026092913',
      'https://www.moratame.net/css/style--common-sp-and-pc-2.css?2026092913',
      'https://www.moratame.net/css/mamahalo-pickup-items.css?2026092913',
      'https://www.moratame.net/css/foundation/reset-old-style/reset-old-style--jp.css?2026092913',
      'https://www.moratame.net/css/style--pc.css?2026092913',
      'https://www.moratame.net/css/p9255-common--pc.css?2026092913',
      'https://www.moratame.net/css/p9255-top--pc.css?2026092913'
    ],
    headHtml: '',
    bodyClass: 'bgi bootstrap-v3-3-7--scope',
    wrapper: '<div class="main"><div class="contents cf"><div class="primary"><div class="pr_content la-detail"><div id="syouhinGaiyouWrap"><div class="mb_20"><div id="g3">{{content}}</div></div></div></div></div></div></div>',
    baseUrl: 'https://www.moratame.net/detail/tamesu.php?project_id=89cd7'
  },
  {
    id: 'moratame-sp',
    name: 'モラタメ SP',
    css: [
      'https://www.moratame.net/css/bootstrap.v3.3.7--scope.css?2026092913',
      'https://www.moratame.net/s/js/jqm/jquery.mobile-1.3.1.min.css?2026092913',
      'https://www.moratame.net/s/css/jquery.mobile-1.3.1-user.css?2026092913',
      'https://www.moratame.net/s/css/html5-doctor-reset-stylesheet.min.css',
      'https://www.moratame.net/s/css/common.css?2026092913',
      'https://www.moratame.net/s/css/style.3078.css?2026092913',
      'https://www.moratame.net/s/css/style--sp.css?2026092913',
      'https://www.moratame.net/s/css/style.moratamelist-tame--sp.css?2026092913',
      'https://www.moratame.net/s/css/tooltip.css?2026092913',
      'https://www.moratame.net/s/css/pickup.css?2026092913',
      'https://www.moratame.net/css/style--common-sp-and-pc.css?2026092913',
      'https://www.moratame.net/css/style--common-sp-and-pc-2.css?2026092913',
      'https://www.moratame.net/css/mamahalo-pickup-items.css?2026092913',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://www.moratame.net/css/p9255-common--sp.css?2026092913',
      'https://www.moratame.net/css/p9255-top--sp.css?2026092913'
    ],
    headHtml: '',
    bodyClass: '',
    wrapper: '<div data-role="page" class="page"><div data-role="content" class="content"><div class="container"><div class="block"><div id="accordion" class="block"><div><div id="g3">{{content}}</div></div></div></div></div></div>',
    baseUrl: 'https://www.moratame.net/s/detail/tamesu.php?project_id=89cd7'
  },
  {
    id: 'au-moratame',
    name: '商品モニター',
    css: [
      'https://au.moratame.net/css/t.css?2026093011',
      'https://au.moratame.net/css/pass_monitor.css?2026093011',
      'https://cdn-img.auone.jp/pass/asset/scarab/css/nav.css',
      'https://au.moratame.net/css/triangle.css'
    ],
    headHtml: '',
    bodyClass: 'scr-wrapper',
    wrapper: '<div id="F001" class="js-t-wrapper"><div style="margin-top: 10px;"><div id="g3">{{content}}</div></div></div>',
    baseUrl: 'https://au.moratame.net/detail/tamesu.php?test=106da02dd6618318562493e8addf0ea2&project_id=bcef0'
  },
  {
    id: 'tsample',
    name: 'Vサンプル',
    css: [
      'https://tsample.tsite.jp/css/bootstrap.v3.3.7--scope.css?2026093012',
      'https://tsample.tsite.jp/css/reset.css?2026093012',
      'https://tsample.tsite.jp/css/properties.css?2026093012',
      'https://tsample.tsite.jp/css/main.css?2026093012',
      'https://tsample.tsite.jp/css/layout.css?2026093012',
      'https://tsample.tsite.jp/css/module.css?2026093012',
      'https://tsample.tsite.jp/css/style--common-sp-and-pc.css?2026093012',
      'https://tsample.tsite.jp/css/reset-old-style--jp.css?2026093012',
      'https://tsample.tsite.jp/css/style--pc.css?2026093012',
      'https://tsample.tsite.jp/css/style--sp.css?2026093012',
      'https://tsample.tsite.jp/css/t.css?2026093012',
      'https://tsample.tsite.jp/css/pass_monitor.css?2026093012',
      'https://tsample.tsite.jp/css/t-sample.css?2026093012',
      'https://tsample.tsite.jp/plugins/slick/slick.css?2026093012',
      'https://tsample.tsite.jp/plugins/slick/slick-theme.css?2026093012',
      'https://tsample.tsite.jp/plugins/slick/slick-theme-user.css?2026093012',
      'https://tsample.tsite.jp/css/p9255-common--pc.css?2026093012',
      'https://use.fontawesome.com/releases/v5.0.6/css/all.css',
      'https://tsample.tsite.jp/css/triangle.css?2026093012'
    ],
    headHtml: '',
    bodyClass: 'bootstrap-v3-3-7--scope itemDetail',
    wrapper: '<div class="body-wrapper"><div class="main"><div class="contents cf contents--responsive"><div class="primary primary--responsive"><div id="F001" class="js-t-wrapper itemDetailBox"><div style="margin-top: 10px;"><div id="g3">{{content}}</div></div></div></div></div></div></div>',
    baseUrl: 'https://tsample.tsite.jp/detail/tamesu.php?test=103b065d1c08029dcac48f9e695466b4&project_id=2ff32'
  },
];

/**
 * 「基準（サイトCSSなし）」表示の設定
 * baseUrl: ブロック内の相対パスをどこ基準で解決するか（空なら解決しない）
 */
window.PREVIEW_OPTIONS = {
  baseUrl: ''
};
