window.BENCHMARK_DATA = {
  lastUpdate: 1616392541215,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '81af1674a8766f0453da199a8b177a5a0a14f61a',
          message: 'napi-derive@1.0.1',
          timestamp: '2021-03-22T13:38:42+08:00',
          tree_id: 'abe6ab1d87ad67a675bb5c11d8e86325817d5491',
          url:
            'https://github.com/napi-rs/napi-rs/commit/81af1674a8766f0453da199a8b177a5a0a14f61a',
        },
        date: 1616392539762,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 52562735,
            range: '±0.93%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 674773423,
            range: '±0.87%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16689584,
            range: '±1.12%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 691031432,
            range: '±0.74%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 68250,
            range: '±25.55%',
            unit: 'ops/sec',
            extra: '54 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 96667,
            range: '±24.83%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 447883,
            range: '±3.2%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 392545,
            range: '±3.09%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 355996,
            range: '±3.07%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 351674,
            range: '±3.1%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 33130,
            range: '±1.42%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Async task#thread safe function',
            value: 12813,
            range: '±10.7%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
        ],
      },
    ],
  },
}
