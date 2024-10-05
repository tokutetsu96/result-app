import { z } from "zod";

export const validationSchema = z.object({
  myTeamName: z.string().nonempty("自分のチーム名を入力してください。"),
  enemyTeamName: z.string().nonempty("相手のチーム名を入力してください。"),
  myTeamScoreOne: z.coerce
    .number()
    .max(250, "250以下の数値を入力してください。"),
  enemyTeamScoreOne: z.coerce
    .number()
    .max(250, "250以下の数値を入力してください。"),
  gameOne: z.string().nonempty("ゲーム名を入力してください。"),
  myTeamScoreTwo: z.coerce
    .number()
    .max(250, "250以下の数値を入力してください。"),
  enemyTeamScoreTwo: z.coerce
    .number()
    .max(250, "250以下の数値を入力してください。"),
  gameTwo: z.string().nonempty("ゲーム名を入力してください。"),
  myTeamScoreThree: z.coerce
    .number()
    .max(250, "250以下の数値を入力してください。"),
  enemyTeamScoreThree: z.coerce
    .number()
    .max(250, "250以下の数値を入力してください。"),
  gameThree: z.string().nonempty("ゲーム名を入力してください。"),
});
