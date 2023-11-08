import { rest } from "msw";
import { HistoryAction } from "../../src/components/data/history";
export const handlers = [

  rest.get('/api/history', (_req, res, ctx) => {
    const history = [
      {
        id: 1,
        user: 'Jose Ramirez',
        sustain: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        time: '12:25 PM 12/Dic/2025',
        action: HistoryAction.ActivateRule,
        avatar: '1',
      },
      {
        id: 2,
        user: 'Rosa Mendez',
        sustain: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        time: '12:25 PM 12/Dic/2022',
        action: HistoryAction.DeactivateRule,
        avatar: '2',
      },
      {
        id: 3,
        user: 'Jose Ramirez',
        sustain: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        time: '12:25 PM 12/Dic/2023',
        action: HistoryAction.ActivateRule,
        avatar: '1',
      },
    ];

    return res(
      ctx.status(200),
      ctx.json(history)
    );
  })
];
