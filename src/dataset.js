const defaultDataset = {
  init: {
    answers: [
      { content: '仕事を依頼したい', nextId: 'job_offer' },
      { content: 'お付き合いしたい', nextId: 'dating' },
    ],
    question: 'こんにちは！ご用件はなんでしょうか？',
  },
  job_offer: {
    answers: [{ content: 'その他', nextId: 'other_jobs' }],
    question: 'どのようなお仕事でしょうか？',
  },
  other_jobs: {
    answers: [
      { content: '問い合わせる', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'その他についてですね。コチラからお問い合わせできます。',
  },
  dating: {
    answers: [
      { content: 'DMする', nextId: 'https://twitter.com/koba_prog' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'まずは一緒にランチでもいかがですか？DMしてください😘',
  },
}

export default defaultDataset
