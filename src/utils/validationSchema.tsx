import { z } from "zod";

export const validationSchema = z.object({
  myTeamName: z
    .string()
    .min(1, { message: "自分のチーム名を入力してください。" }),
  enemyTeamName: z
    .string()
    .min(1, { message: "相手のチーム名を入力してください。" }),
  myTeamScore1: z.coerce
    .number()
    .min(1, { message: "スコアは0以上の数値を入力してください。" })
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore1: z.coerce
    .number()
    .min(1, { message: "スコアは0以上の数値を入力してください。" })
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game1: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map1: z.string().min(1, { message: "マップを選択してください。" }),
  myTeamScore2: z.coerce
    .number()
    .min(1, { message: "スコアは0以上の数値を入力してください。" })
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore2: z.coerce
    .number()
    .min(1, { message: "スコアは0以上の数値を入力してください。" })
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game2: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map2: z.string().min(1, { message: "マップを選択してください。" }),
  myTeamScore3: z.coerce
    .number()
    .min(1, { message: "スコアは0以上の数値を入力してください。" })
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore3: z.coerce
    .number()
    .min(1, { message: "スコアは0以上の数値を入力してください。" })
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game3: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map3: z.string().min(1, { message: "マップを選択してください。" }),
});

export type validationSchemaType = z.infer<typeof validationSchema>;
