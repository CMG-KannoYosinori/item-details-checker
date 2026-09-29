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
    id: 'a',
    name: 'Aサイト',
    css: [
      'https://a-site.example.com/assets/css/reset.css',
      'https://a-site.example.com/assets/css/style.css'
    ],
    headHtml: '',
    bodyClass: 'page-product',
    wrapper: '<main class="l-main"><article class="entry">{{content}}</article></main>',
    baseUrl: 'https://a-site.example.com/'
  },
  {
    id: 'b',
    name: 'Bサイト',
    css: ['https://b-site.example.com/css/common.css'],
    headHtml: '',
    bodyClass: '',
    wrapper: '<div id="container"><div class="content">{{content}}</div></div>',
    baseUrl: 'https://b-site.example.com/'
  },
  {
    id: 'c',
    name: 'Cサイト',
    css: ['https://c-site.example.com/style.css'],
    headHtml: '',
    bodyClass: '',
    wrapper: '{{content}}',
    baseUrl: 'https://c-site.example.com/'
  }
];

/**
 * 「基準（サイトCSSなし）」表示の設定
 * baseUrl: ブロック内の相対パスをどこ基準で解決するか（空なら解決しない）
 */
window.PREVIEW_OPTIONS = {
  baseUrl: ''
};
