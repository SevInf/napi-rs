window.BENCHMARK_DATA = {
  lastUpdate: 1642070006078,
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
          id: '110f2196a4095963d73cdcfc5d49f72a9c579aaa',
          message: 'chore: publish\n\n - @napi-rs/cli@2.4.0',
          timestamp: '2022-01-13T18:21:44+08:00',
          tree_id: 'bda64595c1c59629aa49edcc461cbd0738af1138',
          url: 'https://github.com/napi-rs/napi-rs/commit/110f2196a4095963d73cdcfc5d49f72a9c579aaa',
        },
        date: 1642070004476,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 55760586,
            range: '±0.42%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 712956301,
            range: '±0.18%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 18523401,
            range: '±0.16%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 710778217,
            range: '±0.16%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 356367,
            range: '±9.81%',
            unit: 'ops/sec',
            extra: '60 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1656796,
            range: '±4.6%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 37049,
            range: '±0.09%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7636,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7604,
            range: '±0.17%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 16071,
            range: '±0.72%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 10492,
            range: '±0.04%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12841,
            range: '±0.09%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 398762,
            range: '±5.44%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 354922,
            range: '±5.21%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 358349,
            range: '±4.97%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 339860,
            range: '±5.26%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 39566,
            range: '±1.07%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 405,
            range: '±2.75%',
            unit: 'ops/sec',
            extra: '73 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 29449,
            range: '±0.6%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2202,
            range: '±1.44%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Query#query * 1',
            value: 29936,
            range: '±2.33%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
        ],
      },
    ],
  },
}
