import { z } from "zod";

export const validationSchema = z.object({
  myTeamName: z.string().nonempty("自分のチーム名を入力してください。"),
  enemyTeamName: z.string().nonempty("相手のチーム名を入力してください。"),
  gameOneResult: z.string().nonempty("ゲーム1の結果を入力してください。"),
  gameTwoResult: z.string().nonempty("ゲーム2の結果を入力してください。"),
  gameThreeResult: z.string().nonempty("ゲーム3の結果を入力してください。"),
});
