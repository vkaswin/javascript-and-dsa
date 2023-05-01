function twoSum(nums = [2, 4, 3, 5, -2, 4, 7, 8, 9], target = 7) {
  let numMap: any = {};
  let indexes: any[] = [];
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    if (sub in numMap) indexes.push([numMap[sub], nums[i]]);
    numMap[nums[i]] = nums[i];
  }
  console.log(indexes);
}

export {};
