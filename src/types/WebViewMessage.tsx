export type WebViewMessage =
  | {
      type: 'result';
      data: { timeStr: string };
    }