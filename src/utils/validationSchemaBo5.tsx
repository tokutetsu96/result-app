import { z } from "zod";

export const validationSchemaBo5 = z.object({
  myTeamName: z
    .string()
    .min(1, { message: "自分のチーム名を入力してください。" })
    .max(4, { message: "自分のチーム名は4文字以下にしてください。" })
    .regex(/^[A-Z0-9]+$/, {
      message: "自分のチーム名はアルファベットの大文字のみ使用できます。",
    }),
  enemyTeamName: z
    .string()
    .min(1, { message: "相手のチーム名を入力してください。" })
    .max(4, { message: "相手のチーム名は4文字以下にしてください。" })
    .regex(/^[A-Z0-9]+$/, {
      message: "相手のチーム名はアルファベットの大文字のみ使用できます。",
    }),
  myTeamScore1: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore1: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game1: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map1: z.string().min(1, { message: "マップを選択してください。" }),
  myTeamScore2: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore2: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game2: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map2: z.string().min(1, { message: "マップを選択してください。" }),
  myTeamScore3: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore3: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game3: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map3: z.string().min(1, { message: "マップを選択してください。" }),
  myTeamScore4: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore4: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game4: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map4: z.string().min(1, { message: "マップを選択してください。" }),
  myTeamScore5: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  enemyTeamScore5: z.coerce
    .number()
    .max(250, { message: "スコアは250以下の数値を入力してください。" }),
  game5: z.string().min(1, { message: "ゲーム名を入力してください。" }),
  map5: z.string().min(1, { message: "マップを選択してください。" }),
});

export type validationSchemaTypeBo5 = z.infer<typeof validationSchemaBo5>;
