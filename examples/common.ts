export type Profile = {
  extra: string;
  level: number;
  playerName: string;
  xp: number;
};
export type CharacterItem = {
  basePointsSpecialAttack: number;
  basePointsCriticalHit: number;
  basePointsDefense: number;
  basePointsAttack: number;
  basePointsLife: number;
  characterName: string;
  id: string;
  bioTitle: string;
  basePointsAttackSpeed: number;
};
export type Characters = {
  items: CharacterItem[];
};
type DailyRewardSteps = {
  itemId: string;
  step: number;
  amount: number;
};
type Rewards = {
  itemId: string;
  amount: number;
};
export type DailyRewardsOutput = {
  enabled: boolean;
  resetIfFail: boolean;
  hoursToReceive: number;
  steps: DailyRewardSteps[];
  defaultRewardIfAlreadyOwned: Rewards;
};
export type CheckRewardsOutput = {
  curStep: number;
  rewards: DailyRewardSteps[];
};
export type GetDailyRewardsOutput = {
  rewards: Rewards[];
};
type LuckyWeelItem = {
  itemId: string;
  weight: number;
  quantity: number;
};
export type LuckyWheelData = {
  maxFullSpins: number;
  minFullSpins: number;
  dailyLimit: number;
  items: LuckyWeelItem[];
};
export type CanClaimLuckyWheel = {
  canClaim: number;
};
export type DailyQuestItem = {
  conditionReach: number;
  rewardQuantity: number;
  condition: string;
  rewardId: string;
  id: string;
  questName: string;
  progress: number;
  canClaim: boolean;
};
export type DailyQuestsData = {
  dailyQuest: DailyQuestItem[];
};
export type QuestInputItem = {
  id: string;
  amount: number;
};
export type UpdateDailyQuestInput = {
  items: QuestInputItem[];
};
export type ClaimDailyQuestInput = {
  items: string[];
};
