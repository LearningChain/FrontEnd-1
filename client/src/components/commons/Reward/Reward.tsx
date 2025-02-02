import React from 'react';
import RewardSet, {rewardName} from '../../../_shared/rewards/basic';
import {Layout} from './Reward.styles';

interface RewardProps {
  reward: rewardName;
  size: number;
  color?: string;
}

const Reward = ({reward, size, color}: RewardProps) => {
  return (
    <Layout>
      <svg
        height={size}
        viewBox={RewardSet[reward].viewBox}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={RewardSet[reward].path} />
      </svg>
    </Layout>
  );
};

export default Reward;
